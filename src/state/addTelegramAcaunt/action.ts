import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import { onChangeTelegram } from 'state/user/actions'
// import { store } from 'state'
import {
  ILogin,
  ITelegram,
  ITelegramVeryfiy,
  // IUpdateUserInfo,
} from 'types/data'

// export const signOutUser = createAction('user/signOut')
export const changeLanguage = createAction<'ru' | 'en'>('addTelegram/language')

export const addTelegram = createAsyncThunk<
  string | null,
  {
    data: ITelegram
    onSuccess?: (response: {}) => void
    onError?: (error?: string) => void
  }
>('add/telegram', async arg => {
  try {
    const { data: response } = await apiClient.post<string>(
      R.consts.API_PATH_TELEGRAM_INIT,
      { ...arg.data, phone: arg.data.phone.toString() },
    )

    // thunk.dispatch(onChangeTelegram(true))
    arg.onSuccess?.(response)
    return response
  } catch (e) {
    // @ts-ignore
    arg.onError?.(e?.response?.data?.message || 'Server error')
    throw e
  }
})

export const verifyTelegram = createAsyncThunk<
  {} | null,
  {
    data: ILogin
    onSuccess?: (response: ITelegramVeryfiy) => void
    onError?: () => void
  }
>('addTelegramm/confirm', async (arg, thunk) => {
  try {
    const { data: response } = await apiClient.post<ITelegramVeryfiy>(
      R.consts.API_PATH_TELEGRAM_VERFY,
      { ...arg.data, code: arg.data.code.toString().replace(/\D/g, '') },
    )
    if (!response?.error) {
      // const token = store.getState().user?.token?.accessToken
      // const { data: updateRes } = await apiClient.post<IUpdateUserInfo>(
      //   R.consts.API_PATH_UPDATE_USER_INFO,
      //   { accessToken: token, userInfo: { hasTelegram: true } },
      // )
    }

    thunk.dispatch(onChangeTelegram(true))
    arg.onSuccess?.(response)
    return response
  } catch (e) {
    arg.onError?.()
    throw e
  }
})
