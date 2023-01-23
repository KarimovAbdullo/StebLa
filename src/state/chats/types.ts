import { IChats } from 'types/data'

export type ChatsState = {
  chats: IChats[]
  loading: boolean
  language: 'ru' | 'en'
}
