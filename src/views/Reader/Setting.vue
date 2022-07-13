<template>
  <div class="setting">
    <div class="setting-item">
      <div class="label">阅读模式</div>
      <var-select :hint="false" placeholder="请选择一个选项" v-model="model">
        <var-option v-for="item in modelOption" :label="item.label" :value="item.key" />
      </var-select>
    </div>
    <div class="setting-item">
      <div class="label">主题</div>
      <div class="theme-options">
        <div class="theme-option" 
          v-for="(item, index) in themeOptions" 
          :key="index" 
          :style="{ color: item.color, backgroundColor: item.background }"
          @click="() => {
            color = item.color
            background = item.background
          }"
        >Aa
          <span v-if="color === item.color && background === item.background"><var-icon name="check" :size="12" /></span>
        </div>
      </div>
    </div>
    <div class="setting-item">
      <div class="label">字号</div>
      <var-select :hint="false" placeholder="请选择一个选项" v-model="fontSize">
        <var-option v-for="item in fontSizeOptions" :label="item" :value="item" />
      </var-select>
    </div>
    <div class="setting-item">
      <div class="label">行高</div>
      <var-select :hint="false" placeholder="请选择一个选项" v-model="lineHight">
        <var-option v-for="item in lineHightOptions" :label="item" :value="item" />
      </var-select>
    </div>
    <div class="setting-item">
      <div class="label">段间距</div>
      <var-select :hint="false" placeholder="请选择一个选项" v-model="paragraphSpacing">
        <var-option v-for="item in paragraphSpacingOption" :label="item" :value="item" />
      </var-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, PropType } from 'vue'
import { Setting, defaultSetting } from '@/types'

import '@varlet/ui/es/select/style/index.js'

const props = defineProps({
  setting: {
    type: Object as PropType<Setting>,
    required: true,
  }
})

const emit = defineEmits<{
  (event: 'update', payload: Setting): void
}>()

interface Theme {
  color: string
  background: string
}
const color = ref(props.setting.color)
const background = ref(props.setting.background)
const themeOptions: Theme[] = [
  { color: '#111', background: '#fff' },
  { color: '#eee', background: '#222' },
  { color: '#000', background: '#f1f1f1' },
  { color: '#111', background: '#e9d8bc' },
  { color: '#111', background: '#c5e7cf' },
]

const fontSize = ref(props.setting.fontSize)
const fontSizeOptions = ref([13, 14, 15, 16, 18, 20, 22])

const lineHight = ref(props.setting.lineHight)
const lineHightOptions = ref([1, 1.2, 1.5, 1.75, 2])

const paragraphSpacing = ref(props.setting.paragraphSpacing)
const paragraphSpacingOption = ref([10, 12, 15, 18, 20, 25])

const model = ref<'scroll' | 'click'>(props.setting.model)
const modelOption = ref([
  { key: 'scroll', label: '滚动' },
  { key: 'click', label: '点击' },
])

watch([color, background, fontSize, lineHight, paragraphSpacing, model], () => {
  const setting = localStorage.getItem('txt_reader_setting')
  const settingObj: Setting = setting ? JSON.parse(setting) : defaultSetting

  const newSetting = {
    ...settingObj,
    color: color.value,
    background: background.value,
    fontSize: fontSize.value,
    lineHight: lineHight.value,
    paragraphSpacing: paragraphSpacing.value,
    model: model.value,
  }
  localStorage.setItem('txt_reader_setting', JSON.stringify(newSetting))
  emit('update', newSetting)
})
</script>

<style lang="scss" scoped>
.setting {
  flex: 1;
  overflow: auto;
  background-color: #fff;
  padding: 15px;
}
.setting-item {
  & + .setting-item {
    margin-top: 20px;
  }

  .label {
    font-size: 12px;
    margin-bottom: 5px;
  }
}
.theme-options {
  display: flex;
  margin-top: 10px;
}
.theme-option {
  width: 18%;
  height: 36px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  position: relative;

  &:not(:last-child) {
    margin-right: calc(10% / 4);
  }

  &:first-child {
    border: 1px solid #666;
  }

  span {
    width: 16px;
    height: 16px;
    border-radius: 6px;
    position: absolute;
    right: 2px;
    top: 2px;
    background-color: #3a7afe;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>