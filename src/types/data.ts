import { ReactElement } from 'react'
import { ImageSourcePropType } from 'react-native'

export interface IForm {
  firsName: string
  // secondName: string
}

export interface ILoginSocial {
  email: string
  password: string
}

export interface IRegisterData {
  name: string
  email: string
  password: string
}

export interface IVerifyUserData {
  phone: string
  code: string
}

export interface IUserInfo {
  lastName: string
  firstName: string
}

export interface IChatsInfo {
  id: string
  name?: string
  thumbnail?: string
}

export interface IListInfo {
  text: string
  id: string
}
// export interface IData {
//   id: number
//   text?: string
//   icon?: ReactElement
// }
export interface IListUserInfo {
  text: string
  id: string
  subTitle: string
  image: ImageSourcePropType
}

export interface ITelegramData {
  title: string
  id: string
}

export interface IWhastAppData {
  title: string
  id: string
}

export interface IAddAcountInfo {
  phone: string
  code: string
}

export interface IStaticWordInfo {
  name: string
}

export interface IUserListForm {
  firsName: string
  secondName: string
}

export interface ISendCode {
  phone: string | number
  use_call: boolean
}

export interface ISendCodeResponse {
  ok: boolean
  msg?: string
}

export interface ILogin {
  credential: string
  code: string
}

export interface IToken {
  ok: true
  accessToken: string
  refreshToken: string
}

export interface IError {
  ok: false
  msg: string
}

export interface IUser {
  id?: string
  ok: true
  roles: [string]
  email: string
  emailIsConfirmed: boolean
  phone: string
  phoneIsConfirmed: boolean
  inn: string
  is_online: boolean
  hasTelegram: boolean
  userinfo: {
    property1: {}
    property2: {}
  }
}

export interface IChat {
  id: number
  name: string
  thumbnail: string
}
export interface IChatsList {
  chatInfos: IChat[]
  message: string
  error: boolean
}
export interface ITelegram {
  phone: string
}

export interface ITelegramVeryfiy {
  code: string
  error?: string
}
export interface IHasTelegram {
  hasTelegram: boolean
}

export interface IUpdateUserInfo {
  accessToken: string
  // userInfo: IHasTelegram
}

export interface ILoginSuccessResponse {
  token: IToken
  user: IUser
  hasTelegram: boolean
}

export interface IIcon {
  iconId: string | number
}

export interface IIcondata {
  id: string | number
  thumbnail: string
}
export interface IRuleResponse {
  chatId: string
  // userId: string | undefined
  rules: string[]
  groupName: string
}

export interface IruleList {
  words: IRuleResponse
}

export interface IRuleGroups {
  groupName: string[]
}

export interface IGroups {
  groups: IRuleGroups
}

export interface IRuleListRes {
  words: IruleList
}

export interface IRuleData {
  id: number
  text?: string
  icon?: ReactElement
}

export interface IPubliKey {
  kty: string
  n: string
  e: string
}
export interface IReadNotific {
  unread_only: boolean
}

export interface IGetNotification {
  id: string
  access_token: string
  desc: boolean
  limit: number
  offset: number
  subject: string
  unread_only: boolean
  ok: boolean
  msg: string
}

export interface IReadNotification {
  access_token?: string
  msg_id: string | string[]
  msg_ids?: string[]
}

export interface INottificationData {
  message: string
  recipient: string
  subject: string
}

export interface IPay {
  value: string
  currency: string
}

export interface IPayment {
  amount: IPay
}

export interface IPay {
  value: string
  currency: string
}

export interface IPayment {
  amount: IPay
}

export interface IStaticRuleData {
  id?: number
  userId?: string
  rule: string
  chatId?: number
  groupName: string
  repeatsCount?: number
  chatsCount?: number
}

export interface IRuleMeta {
  skip: number
  take: number
  count: number
}

export interface IRuleStatics {
  data: IStaticRuleData
  meta: IRuleMeta
}

export interface IAccountsData {
  userId: string
  telegramId: string
  phone: string
}

export interface IAccountsList {
  accounts: IAccountsData[]
}

export interface IAdminData {
  id: string
  presence: string
  status: string
  roles: [string]
  email: string
  emailIsConfirmed: boolean
  phoneIsConfirmed: boolean
  isActive: boolean
  lastLoginRemoteAddress: string
  userinfo: {}
}

export interface IAdminList {
  users: IAdminData[]
  total: number
}

export interface IPriceData {
  price: string
}
