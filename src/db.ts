import Dexie, { Table } from 'dexie'
import { TXTItem } from '@/types'

class TXTReaderDatabase extends Dexie {
  public txtList!: Table<TXTItem, string>

  public constructor() {
    super('TXTReaderDatabase')
    this.version(1).stores({
      txtList: '++id',
    })
  }
}

export default new TXTReaderDatabase()