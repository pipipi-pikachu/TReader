<template>
  <div class="bookmark">
    <div class="bookmark-list">
      <div class="item" v-for="(item, index) in bookmarks" :key="index" @click="emit('jump', item)">
        <OnLongPress @trigger="deleteBookmark(item)">
          <p>{{item}}</p>
        </OnLongPress>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { OnLongPress } from '@vueuse/components'

import { Dialog } from '@varlet/ui'
import '@varlet/ui/es/dialog/style/index.js'

defineProps({
  bookmarks: {
    type: Array as PropType<string[]>,
    required: true,
  },
})

const emit = defineEmits<{
  (event: 'jump', payload: string): void
  (event: 'update', payload: string[]): void
}>()

const deleteBookmark = (bookmarkItem: string) => {
  Dialog(`是否删除该书签？`).then(type => {
    if (type === 'confirm') {
      const bookmarks = localStorage.getItem('txt_reader_bookmarks')
      const bookmarksObj: string[] = bookmarks ? JSON.parse(bookmarks) : []
      const newBookmarks = bookmarksObj.filter(item => item !== bookmarkItem)
      localStorage.setItem('txt_reader_bookmarks', JSON.stringify(newBookmarks))
      emit('update', newBookmarks)
    }
  })
}
</script>

<style lang="scss" scoped>
.bookmark {
  height: 100%;
  background-color: #fff;
  padding: 5px 10px;
}
.bookmark-list {
  flex: 1;
  overflow: auto;
  padding: 20px 10px;
  margin: 0 -10px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.5;

  .item {
    padding-bottom: 5px;
    border-bottom: 1px dashed #e1e1e1;
  }

  .item + .item {
    margin-top: 15px;
  }
}
</style>