import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import {
  IChatsList,
  IError,
  ILogin,
  ILoginSuccessResponse,
  IPubliKey,
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

export const login = createAsyncThunk<
  ILoginSuccessResponse | null,
  {
    data: ILogin
    onSuccess?: (data: ILoginSuccessResponse) => void
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
      const jwtDecode = require('jwt-decode')
      const token = response.accessToken
      const decoded = jwtDecode(token)
      console.log('TOOOOOKEEEENNN')

      try {
        ////
        console.log('PUBLIK KEY')
        await apiClient.post<IPubliKey>(R.consts.API_PATH_GET_PUBLIC_KEY, {})
      } catch (e) {
        arg.onError?.()
        throw e
      }

      let hasTelegram = false

      try {
        await apiClient.get<IChatsList>(R.consts.API_PATH_GET_CHATS)
        hasTelegram = true
      } catch {
        hasTelegram = false
      }

      if (loginResponse.ok) {
        arg.onSuccess?.({
          token: response,
          user: loginResponse,
          hasTelegram,
        })
        return {
          token: response,
          user: { ...loginResponse, id: decoded.sub },
          hasTelegram: true,
        }
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
