import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import { IRuleGroups, IRuleStatics } from 'types/data'

import { getGroups } from './action'
import { getRuleStatistics } from './action'
import { IRuleState } from './type'

const initialState: IRuleState = {
  loading: false,
  language: 'ru',
  groups: [],
  data: [],
}

const ruleSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
  extraReducers: {
    [getGroups.pending.type]: state => {
      state.loading = true
    },
    [getGroups.fulfilled.type]: (
      state,
      action: PayloadAction<IRuleGroups[]>,
    ) => {
      state.loading = false
      state.groups = action.payload
    },
    [getGroups.rejected.type]: state => {
      state.loading = false
    },
    [getRuleStatistics.pending.type]: state => {
      state.loading = true
    },
    [getRuleStatistics.fulfilled.type]: (
      state,
      action: PayloadAction<{ data: IRuleStatics[] }>,
    ) => {
      state.loading = false
      action.payload.data
    },
    [getRuleStatistics.rejected.type]: state => {
      state.loading = false
    },
  },
})

const persistConfig: PersistConfig<IRuleState> = {
  key: 'rule',
  storage: AsyncStorage,
  whitelist: ['rule'],
}

export const ruleReducer = persistReducer(persistConfig, ruleSlice.reducer)
