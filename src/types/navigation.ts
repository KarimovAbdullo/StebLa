import R from 'res'

export type TNavigationParams = {
  [R.routes.ROOT_MAIN]: undefined
  [R.routes.SCTATIC_WORD_SCREEN]: undefined
  [R.routes.STATIC_LIST_CHAT_SCREEN]: undefined
  [R.routes.STATIC_CHAT_SCREEN]: undefined
  [R.routes.SCREEN_OTP]: { phone: string }
  [R.routes.FORM_SCREEN]: undefined
  [R.routes.USER_LIST_FORM_SCREEN]: { item: object } | undefined
}
