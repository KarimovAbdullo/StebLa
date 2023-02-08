import { IGetNotification } from 'types/data'

export type INotificationState = {
  readData: IGetNotification[]
  unreadData: IGetNotification[]
  loading: boolean
  language: 'ru' | 'en'
  unread_only?: boolean
  msg_id: string | string[]
}
