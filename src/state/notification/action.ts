import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import { IGetNotification, IReadNotification } from 'types/data'

export const getNotification = createAsyncThunk<
  IGetNotification[] | null,
  {
    data: IGetNotification
  }
>('notification/get', async (_, thunk) => {
  try {
    //@ts-ignore
    const token = thunk.getState()?.user?.token?.accessToken

    const { data: response } = await apiClient.post<{
      ok: boolean
      items: IGetNotification[]
    }>(R.consts.API_PATH_GET_NOTIFICATION, {
      access_token: token,
      unread_only: false,
    })
    if (response.ok) {
      return response.items
    }
    return null
  } catch (e) {
    // arg.onError?.()
    return null
  }
})

export const readNotification = createAsyncThunk<
  IReadNotification[] | null,
  {
    data: IReadNotification
  }
>('notification/read', async (_, thunk) => {
  try {
    //@ts-ignore
    const token = thunk.getState()?.user?.token?.accessToken
    // const msg = thunk.getState()?.notification.

    const { data: response } = await apiClient.post<{
      ok: boolean
      items: IReadNotification[]
    }>(R.consts.API_PATH_READ_NOTIFICATION, {
      access_token: token,
      unread_only: true,
      msg_id: 'Y+DWXktjeiLaqXCI',
    })
    if (response.ok) {
      return response.items
    }

    return null
  } catch (e) {
    // arg.onError?.()
    return null
  }
})
