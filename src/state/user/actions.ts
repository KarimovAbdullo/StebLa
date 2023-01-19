import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import {
  ILogin,
  ILoginResponse,
  ISendCode,
  ISendCodeResponse,
  IUser,
} from 'types/data'

// export const signOutUser = createAction('user/signOut')
export const changeLanguage = createAction<'ru' | 'en'>('user/language')

export const confirmOnBoarding = createAction<boolean>('user/startedData')

export const sendConfirmCode = createAsyncThunk<
  {} | null,
  {
    data: ISendCode
    onSuccess?: (response: {}) => void
    onError?: (msg?: string) => void
  }
>('user/sendCode', async arg => {
  try {
    const { data: response } = await apiClient.post<ISendCodeResponse>(
      R.consts.API_PATH_SEND_CONFIRM_CODE,
      {
        ...arg.data,
        phone: arg.data.phone.toString().replace(/\D/g, ''),
      },
    )

    if (response.ok) {
      arg.onSuccess?.(response)
      return response
    }
    arg.onError?.(response.msg)
  } catch (e) {
    arg.onError?.()
    throw e
  }
})
//
export const login = createAsyncThunk<
  { token: ILoginResponse; user: IUser } | null,
  {
    data: ILogin
    onSuccess?: (data: { token: ILoginResponse; user: IUser }) => void
    onError?: () => void
  }
>('user/login', async arg => {
  try {
    const { data: response } = await apiClient.post<ILoginResponse>(
      R.consts.API_PATH_LOGIN,
      {
        ...arg.data,
        credential: arg.data.credential.toString().replace(/\D/g, ''),
        code: +arg.data.code,
      },
    )

    if (response.ok) {
      const { data: loginResponse } = await apiClient.post<IUser>(
        R.consts.API_PATH_LOGIN,
        {
          ...arg.data,
          credential: arg.data.credential.toString().replace(/\D/g, ''),
          code: +arg.data.code,
          headers: { token: response.accessToken },
        },
      )

      arg.onSuccess?.({ token: response, user: loginResponse })
      return { token: response, user: loginResponse }
    }
    arg.onError?.()
    return null
  } catch (e) {
    arg.onError?.()
    throw e
  }
})

// export const getUserInfo = createAsyncThunk<
//   IGetUserInfo | null,
//   {
//     data: ILogin
//     onSuccess?: (response: IGetUserInfo) => void
//     onError?: () => void
//   }
// >('user/verifyUser', async arg => {
//   try {
//     const { data: response } = await apiClient.post<IGetUserInfo>(
//       R.consts.API_PATH_GET_USER_INFO,
//       {
//         ...arg.data,
//         credential: arg.data.credential.toString().replace(/\D/g, ''),
//         code: +arg.data.code,
//       },
//     )

//     if (response) {
//       arg.onSuccess?.(response)
//       return response
//     }
//     arg.onError?.()
//     return null
//   } catch (e) {
//     arg.onError?.()
//     throw e
//   }
// })
//
// export const userInfo = createAsyncThunk<
//   IUserInfo | null,
//   {
//     data: IUserInfo
//     onSuccess?: (response: IUserInfo) => void
//     onError?: () => void
//   }
// >('users/change_name', async arg => {
//   try {
//     const { data: response } = await apiClient.put<IUserInfo>(
//       R.consts.API_PATH_CHANGE_NAME,
//       arg.data,
//     )
//     console.log(response)
//
//     arg.onSuccess?.(response)
//     return response
//   } catch (e) {
//     arg.onError?.()
//     throw e
//   }
// })
