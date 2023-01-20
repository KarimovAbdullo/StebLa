import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import { ITelegram, ITelegramVeryfiy } from 'types/data'

// export const signOutUser = createAction('user/signOut')
export const changeLanguage = createAction<'ru' | 'en'>('addTelegram/language')

export const confirmOnBoarding = createAction<boolean>(
  'addTelegram/startedData',
)

export const addTelegram = createAsyncThunk<
  number | null,
  {
    data: ITelegram
    onSuccess?: (response: {}) => void
    onError?: () => void
  }
>('add/telegram', async arg => {
  try {
    const { data: response } = await apiClient.post<number>(
      R.consts.API_PATH_TELEGRAM_INIT,
      { ...arg.data, phone: arg.data.phone.toString().replace(/\D/g, '') },
    )

    arg.onSuccess?.(response)
    return response
  } catch (e) {
    arg.onError?.()
    throw e
  }
})

export const verifyTelegram = createAsyncThunk<
  {} | null,
  {
    data: ITelegramVeryfiy
    onSuccess?: (response: ITelegramVeryfiy) => void
    onError?: () => void
  }
>('addTelegramm/confirm', async arg => {
  try {
    const { data: response } = await apiClient.post<ITelegramVeryfiy>(
      R.consts.API_PATH_TELEGRAM_VERFY,
      { ...arg.data, code: arg.data.code.toString().replace(/\D/g, '') },
    )

    arg.onSuccess?.(response)
    return response
  } catch (e) {
    arg.onError?.()
    throw e
  }
})
