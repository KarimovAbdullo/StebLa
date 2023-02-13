import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import jwtDecode from 'jwt-decode'
import R from 'res'
import {
  IChatsList,
  IError,
  ILogin,
  ILoginSuccessResponse,
  IPriceData,
  // IPubliKey,
  ISendCode,
  ISendCodeResponse,
  IToken,
  IUser,
} from 'types/data'

export const signOutUser = createAction('user/signOut')
export const onChangeTelegram = createAction<boolean>('user/telegram')
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

      const token = response.accessToken
      const decoded = jwtDecode<{ sub: string }>(token)

      let hasTelegram = false

      try {
        await apiClient.get<IChatsList>(R.consts.API_PATH_GET_CHATS, {
          params: { limit: 10, offset: 1 },
          headers: { authorization: `Bearer ${token}` },
        })

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

export const getPrice = createAsyncThunk<IPriceData>('price/get', async () => {
  try {
    const { data: response } = await apiClient.get<IPriceData>(R.consts.PRICE)

    return response
  } catch (e) {
    throw e
  }
})
