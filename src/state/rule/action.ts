import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import { IGroups, IruleList, IRuleListRes } from 'types/data'

export const getGroups = createAsyncThunk<IGroups>(
  'get/ruleGroups',
  async () => {
    try {
      const { data: response } = await apiClient.get<IGroups>(
        R.consts.API_PATH_RULES_GROUPS,
      )

      return response
    } catch (e) {
      throw e
    }
  },
)

export const getRuleList = createAsyncThunk<
  IRuleListRes,
  {
    data: IruleList
    onSuccess?: () => void
    onError?: () => void
  }
>('rule/list', async arg => {
  try {
    console.log('data', arg.data)

    const { data: response } = await apiClient.post<IRuleListRes>(
      R.consts.API_PATH_RULES_lIST,
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
