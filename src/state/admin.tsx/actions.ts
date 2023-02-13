import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import { IAdminList } from 'types/data'

export const getUsersAction = createAsyncThunk<IAdminList>(
  'admin/get',
  async () => {
    try {
      const { data: response } = await apiClient.get<IAdminList>(
        R.consts.GET_ADMIN_USERS,
        {
          params: { limit: 10, offset: 0 },
        },
      )

      return response
    } catch (e) {
      throw e
    }
  },
)
