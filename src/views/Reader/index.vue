<template>
  <div class="reader" v-if="txt" :style="cssVar">
    <div class="header" 
      :class="{ 'show': showMenu }"
      :style="{
        color: setting.color,
        backgroundColor: setting.background,
      }"
    >
      <span class="title">{{txt.title}}</span>
      <span class="progress">{{(progress * 100).toFixed(2)}}%</span>
    </div>

    <div class="content"
      ref="contentRef" 
      v-html="contentHTML" 
      @click="$event => handleClick($event)"
      @scroll="handleScroll()"
      @touchmove="$event => handleTouchmove($event)"
      :style="{
        color: setting.color,
        backgroundColor: setting.background,
        fontSize: setting.fontSize + 'px',
      }"
    ></div>

    <div class="menu" 
      :class="{ 'show': showMenu }"
      :style="{
        color: setting.color,
        backgroundColor: setting.background,
      }"
    >
      <div class="menu-item" @click="router.push('/')"><var-icon name="chevron-left" /> <span>返回</span></div>
      <div class="menu-item" @click="openBookmarkMenu()"><var-icon name="star-outline" /> <span>书签</span></div>
      <div class="menu-item" @click="utilPanelShowType = 'search'"><var-icon name="magnify" /> <span>查找</span></div>
      <div class="menu-item" @click="utilPanelShowType = 'setting'"><var-icon name="menu" /> <span>设置</span></div>
    </div>

    <div class="util-panel" v-if="utilPanelShowType">
      <div class="util-panel-header">
        <div class="btn" @click="utilPanelShowType = ''">
          <var-icon name="chevron-left" />
          <span>返回</span>
        </div>
      </div>
      <Bookmark 
        v-if="utilPanelShowType === 'bookmark'" 
        :bookmarks="bookmarks" 
        @jump="target => jump(target)" 
        @update="value => bookmarks = value" 
      />
      <Search 
        v-if="utilPanelShowType === 'search'" 
        :paragraphsData="paragraphsData" 
        @jump="target => jump(target)" 
      />
      <Setting 
        v-if="utilPanelShowType === 'setting'" 
        :setting="setting" 
        @update="value => setting = value" 
      />
    </div>

    <var-popup v-model:show="bookmarkPopupShow">
      <div class="bookmark-popup">
        <var-button class="btn" type="primary" @click="addBookmark()">添加书签</var-button>
        <var-button class="btn" type="primary" @click="openBookmarkPopupShowList()">查看书签</var-button>
      </div>
    </var-popup>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick, computed, StyleValue } from 'vue'
import { useRoute } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import router from '@/router'
import db from '@/db'
import { TXTItem, Setting as SettingType, defaultSetting, ParagraphData } from '@/types'

import { Snackbar } from '@varlet/ui'
import '@varlet/ui/es/snackbar/style/index.js'

import Bookmark from './Bookmark.vue'
import Search from './Search.vue'
import Setting from './Setting.vue'

const { params } = useRoute()

const showMenu = ref(false)

const setting = ref<SettingType>(defaultSetting)

const cssVar = computed(() => ({
  '--lineHight': `${setting.value.lineHight}`,
  '--paragraphSpacing': `${setting.value.paragraphSpacing}px`,
} as StyleValue))

const initSetting = () => {
  const _setting = localStorage.getItem('txt_reader_setting')
  setting.value = _setting ? JSON.parse(_setting) : defaultSetting
}
onMounted(initSetting)

const utilPanelShowType = ref<'' | 'bookmark' | 'search' | 'setting'>('')
const bookmarkPopupShow = ref(false)

const txt = ref<TXTItem>()

const contentRef = ref<HTMLElement>()
const paragraphsData = ref<ParagraphData[]>([])
const contentLength = ref(0)
const contentHTML = ref('')

const progress = computed(() => txt.value?.progress || 0)
const progressText = computed(() => txt.value?.progressText || '')

// 将文本按段落格式化为数组
const parseTextContent = (text: string) => {
  const paragraphs = text.replace(/[\n\r]+/g, '<br>').split('<br>')
  const data: ParagraphData[] = []

  for (const p of paragraphs) {
    const lastP: ParagraphData = data[data.length - 1]
    const start = lastP ? lastP.end + 1 : 0
    const end = start + p.length
    data.push({
      start,
      end,
      content: p,
    })
  }
  
  paragraphsData.value = data
}

// 获取当前位置的格式化段落信息
const getCurrentParagraphsData = () => {
  const progressNum = progress.value * contentLength.value

  const length = 8000
  const start = progressNum - length < 0 ? 0 : progressNum - length
  const end = progressNum + length

  const currentParagraphsData = []
  let isStarted = false
  for (const p of paragraphsData.value!) {
    if (!isStarted) {
      if (p.start <= start && start <= p.end) isStarted = true
    }
    if (isStarted) currentParagraphsData.push(p)

    if (p.start <= end && end <= p.end) break
  }

  return currentParagraphsData
}

// 跳转到指定进度
const jumpToCurrentProgress = () => {
  const currentParagraphsData = getCurrentParagraphsData()

  let content = ''
  for (const p of currentParagraphsData) {
    content += `<p data-range="${p.start}~${p.end}">${p.content}</p>`
  }

  contentHTML.value = content

  nextTick(() => {
    const el = Array.from(contentRef.value!.querySelectorAll('p')).find(el => el.textContent?.includes(progressText.value))
    if (el) el.scrollIntoView()
  })
}

// 初始化 txt 相关数据
const initTxtContent = () => {
  db.txtList.where('id').equals(params.id).toArray().then(ret => {
    txt.value = ret[0]
    parseTextContent(txt.value.content)
    contentLength.value = txt.value.content.replace(/[\n\r]+/g, '').length

    jumpToCurrentProgress()
  })
}
onMounted(initTxtContent)

// 更新页面内容
const updateContentHTML = () => {
  const currentParagraphsData = getCurrentParagraphsData()
  
  const firstParagraph = currentParagraphsData[0]
  const lastParagraph = currentParagraphsData[currentParagraphsData.length - 1]
  const paragraphRefs = contentRef.value!.querySelectorAll('p')

  paragraphRefs.forEach(el => {
    const [start, end] = el.dataset.range!.split('~')
    if (+end < firstParagraph.start) contentRef.value!.removeChild(el)
    if (+start > lastParagraph.end) contentRef.value!.removeChild(el)
  })

  const lastParagraphRef = paragraphRefs[paragraphRefs.length - 1]
  const lastEnd = lastParagraphRef.dataset.range!.split('~')[1]

  const firstParagraphRef = paragraphRefs[0]
  const firstStart = firstParagraphRef.dataset.range!.split('~')[0]

  if (firstParagraph.start >= +firstStart) {
    for (const p of currentParagraphsData) {
      if (p.start > +lastEnd) {
        const newEl = document.createElement('p')
        newEl.setAttribute('data-range', `${p.start}~${p.end}`)
        newEl.innerHTML = p.content
        contentRef.value!.appendChild(newEl)
      }
    }
  }
  else {
    for (const p of currentParagraphsData.reverse()) {
      if (p.end < +firstStart) {
        const newEl = document.createElement('p')
        newEl.setAttribute('data-range', `${p.start}~${p.end}`)
        newEl.innerHTML = p.content
        contentRef.value!.insertBefore(newEl, contentRef.value!.children[0])
      }
    }
  }
}

// 内容滚动事件
const handleScroll = useDebounceFn(() => {
  const el = document.elementFromPoint(20, showMenu.value ? 35 : 5)
  if (!el) return

  const current = el.innerHTML.replace(/<[^>]+>/g, '')
  const pos = txt.value!.content.replace(/[\n\r]+/g, '').indexOf(current)
  const newProgress = +(pos / contentLength.value).toFixed(4)

  db.txtList.update(params.id as string, { progress: newProgress, progressText: current }).then(() => {
    txt.value = {
      ...txt.value!,
      progress: newProgress,
      progressText: current,
    }
    updateContentHTML()
  })

}, 1000, { maxWait: 10000 })

// 点击翻页
const handleClick = (e: MouseEvent) => {
  const windowWidth = document.body.clientWidth
  const windowHeight = document.body.clientHeight
  const pageX = e.pageX
  const pageY = e.pageY

  if (setting.value.model === 'scroll') {
    const topLimit = windowHeight * 0.35
    const bottomLimit = windowHeight * 0.65

    if (showMenu.value) showMenu.value = false
    else if (pageY >= topLimit && pageY <= bottomLimit) showMenu.value = true
  }
  else {
    const leftLimit = windowWidth * 0.35
    const rightLimit = windowWidth * 0.65

    if(pageX < leftLimit) {
      contentRef.value!.scrollTop = contentRef.value!.scrollTop - (windowHeight - 30)
    }
    else if(pageX > rightLimit) {
      contentRef.value!.scrollTop = contentRef.value!.scrollTop + (windowHeight - 30)
    }
    else {
      showMenu.value = !showMenu.value
    }
  }
}

// 翻页模式为点击时，阻止滚动操作相关事件
const handleTouchmove = (e: TouchEvent) => {
  if (setting.value.model === 'click') e.preventDefault()
}

// 跳转到指定位置
const jump = (target: string) => {
  utilPanelShowType.value = ''

  nextTick(() => {
    const pos = txt.value!.content.replace(/[\n\r]+/g, '').indexOf(target)
    const newProgress = +(pos / contentLength.value).toFixed(4)

    db.txtList.update(params.id as string, { progress: newProgress, progressText: target }).then(() => {
      txt.value = {
        ...txt.value!,
        progress: newProgress,
        progressText: target,
      }
      jumpToCurrentProgress()
    })
  })
}

const bookmarks = ref<string[]>([])
const initBookmarks = () => {
  const _bookmarks = localStorage.getItem('txt_reader_bookmarks')
  if (_bookmarks) bookmarks.value = JSON.parse(_bookmarks)
}
onMounted(initBookmarks)

const currentParagraphText = ref('')
const openBookmarkMenu = () => {
  const el = document.elementFromPoint(20, showMenu.value ? 35 : 5)
  if (!el) return
  currentParagraphText.value = el.innerHTML.replace(/<[^>]+>/g, '')
  bookmarkPopupShow.value = true
}

const openBookmarkPopupShowList = () => {
  bookmarkPopupShow.value = false
  utilPanelShowType.value = 'bookmark'
}

const addBookmark = () => {
  if (bookmarks.value.includes(currentParagraphText.value)) {
    Snackbar('请勿重复添加书签！')
    return
  }

  const _bookmarks = localStorage.getItem('txt_reader_bookmarks')
  const bookmarksObj: string[] = _bookmarks ? JSON.parse(_bookmarks) : []
  bookmarks.value = [...bookmarksObj, currentParagraphText.value]

  localStorage.setItem('txt_reader_bookmarks', JSON.stringify(bookmarks.value))

  bookmarkPopupShow.value = false
  Snackbar('已添加当前位置到书签！')
}

</script>

<style lang="scss" scoped>
.reader {
  height: 100%;
  position: relative;
}
.content {
  height: 100%;
  overflow: auto;
  padding: 12px;
}
.header {
  height: 30px;
  position: absolute;
  top: -30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  font-size: 12px;
  color: #999;
  background-color: #fff;
  box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
  transition: top .2s;

  &.show {
    top: 0;
  }

  .title {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .progress {
    flex-shrink: 0;
  }
}
.menu {
  height: 60px;
  position: absolute;
  bottom: -60px;
  left: 0;
  right: 0;
  display: flex;
  font-size: 12px;
  color: #999;
  background-color: #fff;
  box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
  transition: bottom .2s;

  &.show {
    bottom: 0;
  }
}
.menu-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 2px;
  }
}
.util-panel {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;

  .util-panel-header {
    height: 40px;
    background-color: #41464b;
    color: #fff;
    padding: 0 5px;
    flex-shrink: 0;

    .btn {
      height: 100%;
      display: flex;
      align-items: center;
    }

    span {
      font-size: 12px;
      margin-top: -2px;
    }
  } 
}

.bookmark-popup {
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .btn {
    width: 100%;
    display: flex;
    align-items: center;

    & + .btn {
      margin-top: 15px;
    }
  }
}
</style>

<style lang="scss">
.content {
  p {
    line-height: var(--lineHight);
  }
  p + p {
    padding-top: var(--paragraphSpacing);
  }
}
</style>