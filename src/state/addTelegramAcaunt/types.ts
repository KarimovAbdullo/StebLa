export type TelegramState = {
  loading: boolean
  language: 'ru' | 'en'
  token?: string
  onboardingSuccess: boolean
  number?: number
}
