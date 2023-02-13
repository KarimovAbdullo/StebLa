import { IChat } from 'types/data'

export type ChatsState = {
  chats: IChat[]
  loading: boolean
  language: 'ru' | 'en'
  offset: number
  hasMore: boolean
  moreLoading: boolean
  rules: string[]
}
