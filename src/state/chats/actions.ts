import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import { IChatsList, IRuleResponse } from 'types/data'

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

// export const getRuleAction = createAsyncThunk<
//   IRuleResponse,
//   {
//     data: IRuleData
//     onSuccess?: (response: {}) => void
//     onError?: (msg?: string) => void
//   }
// >('rule/get', async () => {
//   try {
//     const { data: response } = await apiClient.post<IRuleResponse>(
//       R.consts.API_PATH_RULES,
//       // {
//       //   ...arg.data,
//       //   text: arg.data.text,
//       // },
//     )

//     throw response
//   } catch (e) {
//     throw e
//   }
// })

export const getRuleAction = createAsyncThunk<
  IRuleResponse,
  {
    data: IRuleResponse
    onSuccess?: () => void
    onError?: () => void
  }
>('rule/get', async arg => {
  try {
    const { data: response } = await apiClient.post<IRuleResponse>(
      R.consts.API_PATH_RULES,
    )

    if (response) {
      arg.onSuccess?.()
      return response
    }
    arg.onError?.()
    throw response
  } catch (e) {
    arg.onError?.()
    throw e
  }
})
