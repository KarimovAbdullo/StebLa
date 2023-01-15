import { ImageSourcePropType } from 'react-native'

export interface IUser {
  firstName: string
  lastName: string
  id: string
}

export interface ILogin {
  phone: string
}
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

export interface IVerifyUser {
  user: IUser
  token: string
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
  name: string
  fayl?: string
  text?: string
  image: ImageSourcePropType
  id: string
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
