import { IChat } from 'types/data'

export type ChatsState = {
  chats: IChat[]
  loading: boolean
  language: 'ru' | 'en'
}
