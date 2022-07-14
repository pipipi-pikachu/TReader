<template>
  <div class="list">
    <var-input class="search" placeholder="搜索" v-model="searchKey" :hint="false">
      <template #append-icon>
        <var-icon v-if="searchKey" name="window-close" @click="searchKey = ''" />
        <var-icon v-else name="magnify" />
      </template>
    </var-input>

    <div class="sort" @click="sortActionSheetShow = true">
      <span>排序：{{sortTypeMap[sortType]}}</span> <var-icon name="chevron-down" />
    </div>

    <var-action-sheet 
      title="选择排序方式"
      :actions="sortActions"
      v-model:show="sortActionSheetShow"
      @select="(action: SortAction) => handleSelectSortType(action)"
    />

    <var-action-sheet 
      title="操作"
      :actions="handleActions"
      v-model:show="handleActionSheetShow"
      @select="(action: HandleAction) => action.handler()"
    />

    <var-popup v-model:show="modifyPopupShow">
      <div class="modify-popup">
        <var-input
          :hint="false"
          placeholder="请输入新标题"
          v-model="newTitle"
        />
        <div class="btns">
          <var-button text type="primary" @click="modifyPopupShow = false">取消</var-button>
          <var-button text type="primary" @click="updateTitle()">确认</var-button>
        </div>
      </div>
    </var-popup>

    <div class="divider"></div>

    <div class="content">
      <div class="list-item" v-for="item in showTxtList" :key="item.id" @click="enterReader(item)">
        <OnLongPress @trigger="openHandleActionSheet(item)">
          <div class="title">{{item.title}}</div>
          <div class="info">
            <div class="left">
              <div class="create-time">{{new Date(item.createTime).toLocaleDateString()}}</div>
              <div class="size">{{transformByteSize(item.size)}}</div>
            </div>
            <div class="progress">{{(item.progress * 100).toFixed(2)}}%</div>
          </div>
        </OnLongPress>
      </div>

      <div class="empty" v-if="!txtList.length">书架空空如也 ┑(~Д ~)┍</div>
      <div class="empty" v-else-if="!showTxtList.length">搜索结果为空 (⊙﹏⊙)</div>
    </div>

    <var-uploader accept="text/plain" @after-read="uploadFile">
      <var-button class="upload-btn" type="primary" round>
        <var-icon name="plus" :size="28" />
      </var-button>
    </var-uploader>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import router from '@/router'
import db from '@/db'
import { TXTItem, defaultSetting } from '@/types'

import { OnLongPress } from '@vueuse/components'

import { Dialog, VarFile, Snackbar } from '@varlet/ui'
import '@varlet/ui/es/dialog/style/index.js'
import '@varlet/ui/es/snackbar/style/index.js'

const txtList = ref<TXTItem[]>([])
onMounted(() => {
  db.txtList.toArray().then(list => txtList.value = list)

  const setting = localStorage.getItem('txt_reader_setting')
  if (!setting) {
    localStorage.setItem('txt_reader_setting', JSON.stringify(defaultSetting))
  }
})

// 调整列表排序
type SortType = 'access' | 'create'

interface SortAction {
  key: SortType
  name: string
}

const sortTypeMap = {
  access: '最后阅读时间',
  create: '最后添加时间',
}
const sortType = ref<SortType>('access')
const sortActionSheetShow = ref(false)

const sortActions: SortAction[] = [
  { key: 'access', name: sortTypeMap.access },
  { key: 'create', name: sortTypeMap.create },
]
const handleSelectSortType = (action: SortAction) => {
  sortType.value = action.key
}

// 长按打开操作面板（删除、修改）
type HandleType = 'modify' | 'delete'

interface HandleAction {
  key: HandleType
  name: string
  handler: () => void
}

const handleTxtItem = ref<TXTItem>()
const handleActionSheetShow = ref(false)

const modifyPopupShow = ref(false)

const handleActions: HandleAction[] = [
  {
    key: 'modify',
    name: '修改',
    handler: () => {
      newTitle.value = handleTxtItem.value!.title
      modifyPopupShow.value = true
    },
  },
  {
    key: 'delete',
    name: '删除',
    handler: () => {
      Dialog(`是否删除【${handleTxtItem.value!.title}】？`).then(type => {
        if (type === 'confirm') {
          txtList.value = txtList.value.filter(item => item.id !== handleTxtItem.value!.id)
          db.txtList.delete(handleTxtItem.value!.id)
        }
      })
    },
  },
]

const openHandleActionSheet = (txt: TXTItem) => {
  handleTxtItem.value = txt
  handleActionSheetShow.value = true
}

const newTitle = ref('')
const updateTitle = () => {
  db.txtList.update(handleTxtItem.value!.id, { title: newTitle.value }).then(() => {
    txtList.value = txtList.value.map(item => item.id === handleTxtItem.value!.id ? { ...item, title: newTitle.value } : item)
    newTitle.value = ''
    modifyPopupShow.value = false
  })
}

// TXT列表
const searchKey = ref('')

const showTxtList = computed(() => {
  const list = txtList.value.filter(item => item.title.indexOf(searchKey.value) !== -1)
  if (sortType.value === 'access') list.sort((a, b) => b.accessTime - a.accessTime)
  if (sortType.value === 'create') list.sort((a, b) => b.createTime - a.createTime)
  return list
})

// 上传文件
const uploadFile = async (e: VarFile) => {
  const file = e.file
  if (!file) return

  if (file.type !== 'text/plain') {
    Snackbar('不支持该文件类型！')
    return
  }

  const fileReader = new FileReader()
  fileReader.readAsArrayBuffer(file)
  fileReader.addEventListener('load', () => {
    const fileData = fileReader.result as ArrayBuffer

    const encodings = ['utf-8', 'gbk', 'big5']

    const decode = (encoding: string) => {
      const decoder = new TextDecoder(encoding, { fatal: true })
      try {
        return decoder.decode(fileData)
      } 
      catch {
        return null
      }
    }

    let text = ''
    for (const encoding of encodings) {
      const ret = decode(encoding)
      if (ret) {
        text = ret
        break
      }
    }

    const newTXT = {
      id: '' + new Date().getTime() + Math.floor(Math.random() * 1000000),
      title: file.name,
      createTime: new Date().getTime(),
      accessTime: 0,
      size: file.size,
      content: text,
      progress: 0,
      progressText: '',
    }
    
    txtList.value.push(newTXT)
    db.txtList.add(newTXT)
  })
}

// 文件大小单位转换
const transformByteSize = (byte: number) => {
  const kb = byte / 1024
  if (kb < 1024) return `${kb.toFixed(1)}KB`
  return `${(kb / 1024).toFixed(2)}MB`
}

// 进入阅读器
const enterReader = (txt: TXTItem) => {
  const accessTime = new Date().getTime()
  db.txtList.update(txt.id, { accessTime }).then(() => router.push(txt.id))
}
</script>

<style lang="scss" scoped>
.list {
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.sort {
  display: flex;
  align-items: center;
  font-size: 13px;
  padding: 10px 0;
  margin: 12px 0;
}
.divider {
  width: 100%;
  height: 0;
  border-top: 1px solid #ddd;
  margin: 0 auto;
}
.content {
  flex: 1;
  padding: 0 15px;
  margin: 0 -15px;
  overflow: auto;
  user-select: none;
}
.list-item {
  padding: 30px 0 10px;
  border-bottom: 1px solid #ddd;

  .title {
    font-size: 15px;
    margin-bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .info {
    display: flex;
    font-size: 12px;
    justify-content: space-between;

    .left {
      display: flex;
    }
    .create-time {
      margin-right: 15px;
    }
  }
}
.empty {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
}
.upload-btn {
  position: fixed;
  left: 10px;
  bottom: 10px;
}
.modify-popup {
  width: 300px;
  height: 120px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .btns {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 15px;
  }
}
</style>