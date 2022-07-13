<template>
  <div class="search">
    <var-input class="search-input" placeholder="搜索" v-model="searchKey" :hint="false">
      <template #append-icon>
        <var-icon v-if="searchKey" name="window-close" @click="clearSearchResults()" style="margin-right: 10px;" />
        <var-icon name="magnify" @click="search()" />
      </template>
    </var-input>

    <div class="result-info" v-if="searchState">
      检索到结果 {{results.length}} 条。

      <span v-if="results.length > 300">匹配结果过多，请更换关键词搜索。</span>
      <span v-else-if="results.length > 0">点击跳转到对应位置。</span>
    </div>

    <div class="result-list">
      <p class="item" 
        v-for="item in showResults" 
        :key="item.start"
        v-html="item.contentHTML" 
        @click="emit('jump', item.content)"
      ></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from 'vue'
import { ParagraphData } from '@/types'

const props = defineProps({
  paragraphsData: {
    type: Object as PropType<ParagraphData[]>,
    required: true,
  },
})

const emit = defineEmits<{
  (event: 'jump', payload: string): void
}>()

const searchKey = ref('')
const searchState = ref(false)
const results = ref<ParagraphData[]>([])

const showResults = computed(() => {
  if (results.value.length > 300) return []
  return results.value.map(item => {
    const contentHTML = item.content.replaceAll(searchKey.value, `<span style="background-color: #ffff3a;">${searchKey.value}</span>`)
    return {
      ...item,
      contentHTML,
    }
  })
})

const search = () => {
  results.value = props.paragraphsData.filter(item => item.content.indexOf(searchKey.value) !== -1)
  searchState.value = true
}
const clearSearchResults = () => {
  if (results.value.length) results.value = []
  searchState.value = false
  searchKey.value = ''
}
</script>

<style lang="scss" scoped>
.search {
  height: 100%;
  background-color: #fff;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
}
.result-info {
  font-size: 12px;
  color: #999;
  margin: 10px 0;
}
.result-list {
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