import R from 'res'

export type TNavigationParams = {
  [R.routes.ROOT_MAIN]: undefined
  [R.routes.SCTATIC_WORD_SCREEN]: undefined
  [R.routes.STATIC_LIST_CHAT_SCREEN]: undefined
  [R.routes.STATIC_CHAT_SCREEN]: { itemData: object } | undefined
  [R.routes.START_INTRO]: undefined
  [R.routes.SCREEN_LOGIN]: undefined
  [R.routes.SCREEN_CREATE_PROFILE]: undefined
  [R.routes.SCREEN_ADD_TELEGRAM_NUM]: undefined
  [R.routes.MY_PROFILE_SCREEN]: string | undefined
  [R.routes.FORM_SCREEN]: { item: object } | undefined
  [R.routes.SCREEN_OTP]: { phone: string | number } | undefined
  [R.routes.CREATE_RULE_SCREEN]: { chatId: number } | undefined
  [R.routes.USER_LIST_FORM_SCREEN]: { item: object } | undefined
  [R.routes.SCREEN_LIST_USERS]: undefined

  [R.routes.SCREEN_ADD_TELEGRAM_CODE]: { phone: string | number } | undefined
  [R.routes.SCREEN_ADD_TELEGRAM_NUM]: undefined
  [R.routes.screen_REGISTERED_TELEGRAMM_INFO]: undefined
  [R.routes.SCREEN_NOTIFICATIONS]: undefined
  [R.routes.SCREEN_ACCOUNTS]: undefined
  [R.routes.RATES_SCREEN]: undefined
  [R.routes.SCREEN_CHATS]: undefined
  [R.routes.SCREEN_IMPORT_CHATS]: undefined
  [R.routes.SCREEN_START_INFO]: undefined
  [R.routes.SCREEN_HOME]: undefined
  [R.routes.SCREEN_YOUR_LIST]: undefined
}
