import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import { IChatsList } from 'types/data'

export const getChatsAction = createAsyncThunk<IChatsList>(
  'chats/get',
  async () => {
    try {
      const { data: response } = await apiClient.get<IChatsList>(
        R.consts.API_PATH_GET_CHATS,
        {
          params: { limit: 10, offset: 1 },
        },
      )

      return response
    } catch (e) {
      throw e
    }
  },
)

export const getMoreChatsAction = createAsyncThunk<
  IChatsList,
  { limit: number; offset: number }
>('chats/get-more-cahts', async arg => {
  try {
    const { data: response } = await apiClient.get<IChatsList>(
      R.consts.API_PATH_GET_CHATS,
      {
        params: { limit: arg.limit, offset: arg.offset },
      },
    )

    return response
  } catch (e) {
    throw e
  }
})
