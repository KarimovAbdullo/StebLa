import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import {
  IError,
  ILogin,
  ISendCode,
  ISendCodeResponse,
  IToken,
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
    throw response.msg
  } catch (e) {
    arg.onError?.()
    throw e
  }
})
//
export const login = createAsyncThunk<
  { token: IToken; user: IUser } | null,
  {
    data: ILogin
    onSuccess?: (data: { token: IToken; user: IUser }) => void
    onError?: (error?: string) => void
  }
>('user/login', async arg => {
  try {
    const { data: response } = await apiClient.post<IToken | IError>(
      R.consts.API_PATH_LOGIN,
      {
        ...arg.data,
        credential: arg.data.credential.toString().replace(/\D/g, ''),
        code: +arg.data.code,
      },
    )

    if (response.ok && response?.accessToken) {
      const { data: loginResponse } = await apiClient.post<IUser | IError>(
        R.consts.API_PATH_GET_USER_INFO,
        { accessToken: response?.accessToken },
      )

      if (loginResponse.ok) {
        arg.onSuccess?.({ token: response, user: loginResponse })
        return { token: response, user: loginResponse }
      } else {
        arg.onError?.(loginResponse.msg)
        throw loginResponse.msg
      }
    }

    arg.onError?.(!response.ok ? response.msg : 'Error')
    throw !response.ok ? response.msg : 'Error'
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
