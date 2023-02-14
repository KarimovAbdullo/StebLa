import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import {
  IGroups,
  IRuleGroups,
  IruleList,
  IRuleListRes,
  IRuleStatics,
  // IStaticRuleData,
} from 'types/data'

export const getGroups = createAsyncThunk<IRuleGroups[] | never[]>(
  'get/ruleGroups',
  //@ts-ignore
  async () => {
    try {
      const { data: response } = await apiClient.get<IGroups>(
        R.consts.API_PATH_RULES_GROUPS,
      )

      if (response.groups) {
        return response.groups
      }

      return []
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

// export const getStatistics = createAsyncThunk<>(
//   'get/ruleStatistics',
//   //@ts-ignore
//   async () => {
//     try {
//       const { data: response } = await apiClient.get<{
//         data: IStaticRuleData
//         meta: IRuleMeta
//       }>(R.consts.API_PATH_RULES_STATICS)
//     }
//     return response
//   } catch (e) {
//     throw e
//   }

// )

export const getRuleStatistics = createAsyncThunk<IRuleStatics>(
  'get/ruleStatistics',
  //@ts-ignore
  async () => {
    try {
      const { data: response } = await apiClient.get<IRuleStatics>(
        R.consts.API_PATH_RULES_STATICS,
        // { data: arg.data },
      )

      if (response) {
        return response
      }
      return response
    } catch (e) {
      throw e
    }
  },
)
