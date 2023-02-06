import { IGetNotification } from 'types/data'

export type INotificationState = {
  ntfData: IGetNotification[]
  loading: boolean
  language: 'ru' | 'en'
  unread_only: boolean
}
