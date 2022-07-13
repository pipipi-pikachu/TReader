export interface TXTItem {
  id: string
  title: string
  createTime: number
  accessTime: number
  size: number
  content: string
  progress: number
  progressText: string
}

export interface Setting {
  color: string
  background: string
  fontSize: number
  lineHight: number
  paragraphSpacing: number
  model: 'scroll' | 'click'
}

export const defaultSetting: Setting = {
  color: '#111',
  background: 'fff',
  fontSize: 16,
  lineHight: 1.5,
  paragraphSpacing: 12,
  model: 'scroll',
}

export interface ParagraphData {
  start: number
  end: number
  content: string
}