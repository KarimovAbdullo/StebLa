import { IToken, IUser } from 'types/data'

export type UserState = {
  user: IUser | null
  loading: boolean
  token: IToken | null
  language: 'ru' | 'en'
  onboardingSuccess: boolean
  hasTelegram: boolean
}
