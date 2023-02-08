import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import { IGetNotification, IReadNotification } from 'types/data'

export const getUnreadNotification = createAsyncThunk<
  IGetNotification[] | null
>('unread/get', async (_, thunk) => {
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
    return null
  }
})

export const getReadNotification = createAsyncThunk<IGetNotification[] | null>(
  'read/get',
  async (_, thunk) => {
    try {
      //@ts-ignore
      const token = thunk.getState()?.user?.token?.accessToken

      const { data: response } = await apiClient.post<{
        ok: boolean
        items: IGetNotification[]
      }>(R.consts.API_PATH_GET_NOTIFICATION, {
        access_token: token,
        unread_only: true,
      })
      if (response.ok) {
        return response.items
      }
      return null
    } catch (e) {
      return null
    }
  },
)

export const markNotification = createAsyncThunk<
  { ok: boolean } | null,
  { data: IReadNotification }
>('notification/read', async (arg, thunk) => {
  try {
    //@ts-ignore
    const token = thunk.getState()?.user?.token?.accessToken

    const { data: response } = await apiClient.post<{ ok: boolean }>(
      R.consts.API_PATH_READ_NOTIFICATION,
      { access_token: token, msg_id: arg.data.msg_id },
    )
    if (response.ok) {
      thunk.dispatch(getUnreadNotification())
      thunk.dispatch(getReadNotification())
    }

    return response
  } catch (e) {
    return null
  }
})
