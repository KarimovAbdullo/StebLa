import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import { IGroups, IRuleListRes } from 'types/data'

import { getGroups, getRuleList } from './action'
import { IRuleState } from './type'

const initialState: IRuleState = {
  loading: false,
  language: 'ru',
  groups: '',
}

const ruleSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
  extraReducers: {
    [getGroups.pending.type]: state => {
      state.loading = true
    },
    [getGroups.fulfilled.type]: (state, action: PayloadAction<IGroups>) => {
      state.loading = false
      state.groupsName
    },
    [getGroups.rejected.type]: state => {
      state.loading = false
    },
    [getRuleList.pending.type]: state => {
      state.loading = true
    },
    [getRuleList.fulfilled.type]: (
      state,
      action: PayloadAction<IRuleListRes>,
    ) => {
      state.loading = false
      console.log(action.payload)
    },
    [getRuleList.rejected.type]: state => {
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