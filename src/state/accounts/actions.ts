import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import { IAccountsList } from 'types/data'

export const getAccountsAction = createAsyncThunk<IAccountsList>(
  'accounts/get',
  async () => {
    try {
      const { data: response } = await apiClient.get<IAccountsList>(
        R.consts.GET_ACCOUNTS,
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

export const getMoreAccountsAction = createAsyncThunk<
  IAccountsList,
  { offset: number }
>('accounts/get-more-accounts', async arg => {
  try {
    const { data: response } = await apiClient.get<IAccountsList>(
      R.consts.API_PATH_GET_CHATS,
      {
        params: {
          limit: R.consts.BASE_PAGE_LIMIT + arg.offset,
          offset: arg.offset,
        },
      },
    )

    return response
  } catch (e) {
    throw e
  }
})
