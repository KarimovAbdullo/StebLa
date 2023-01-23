import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import { IChats, IChatsList } from 'types/data'

export const getChatsAction = createAsyncThunk<IChatsList<IChats>>(
  'chats/get',
  async () => {
    try {
      const { data: response } = await apiClient.get<IChatsList<IChats>>(
        R.consts.API_PATH_GET_CHATS,
      )

      return response
    } catch (e) {
      throw e
    }
  },
)
