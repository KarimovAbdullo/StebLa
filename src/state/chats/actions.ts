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
      )

      return response
    } catch (e) {
      throw e
    }
  },
)
