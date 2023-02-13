import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import {
  IChatsList,
  INottificationData,
  IruleList,
  IRuleListRes,
  IRuleResponse,
} from 'types/data'

export const getChatsAction = createAsyncThunk<IChatsList>(
  'chats/get',
  async (_, thunk) => {
    try {
      const { data: response } = await apiClient.get<IChatsList>(
        R.consts.API_PATH_GET_CHATS,
        {
          params: { limit: 9, offset: 0 },
        },
      )

      return response
    } catch (e) {
      thunk.dispatch(getChatsAction)
      throw e
    }
  },
)

export const getMoreChatsAction = createAsyncThunk<
  IChatsList,
  { offset: number }
>('chats/get-more-cahts', async arg => {
  try {
    const { data: response } = await apiClient.get<IChatsList>(
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
  IruleList,
  {
    data: IRuleResponse[]
    onSuccess?: (response: {}) => void
    onError?: () => void
  }
>('rule/posttttt', async arg => {
  try {
    console.log('IRuledata', arg.data)

    const { data: response } = await apiClient.post<IruleList>(
      R.consts.API_PATH_RULES,
      { words: arg.data },
    )

    arg.onSuccess?.(response)
    return response
  } catch (e) {
    arg.onError?.()
    throw e
  }
})

export const postMessage = createAsyncThunk<
  INottificationData,
  {
    data: INottificationData
    onSuccess?: () => void
    onError?: () => void
  }
>('notify/post', async arg => {
  try {
    const { data: response } = await apiClient.post<INottificationData>(
      R.consts.API_PATH_POST_NOTIFICATION_MESSAGE,
      arg.data,
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
