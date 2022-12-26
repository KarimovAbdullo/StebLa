export interface IUser {
  firstName: string
  lastName: string
  id: string
}

export interface ILogin {
  phone: string
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
