import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { uniqBy } from 'lodash'
import { PersistConfig, persistReducer } from 'redux-persist'
import R from 'res'
import { IAccountsList } from 'types/data'

import { getAccountsAction, getMoreAccountsAction } from './actions'
import { AccountsState } from './types'

const initialState: AccountsState = {
  accounts: [],
  loading: false,
  offset: 0,
  hasMore: true,
  moreLoading: false,
}

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
  extraReducers: {
    [getAccountsAction.pending.type]: state => {
      state.loading = true
      state.moreLoading = true
      state.accounts = []
    },
    [getAccountsAction.fulfilled.type]: (
      state,
      action: PayloadAction<IAccountsList>,
    ) => {
      state.loading = false
      state.moreLoading = false
      state.accounts = action.payload.accounts
      state.offset = 10
    },
    [getAccountsAction.rejected.type]: state => {
      state.loading = false
      state.moreLoading = false
    },
    //MoreGet//
    [getMoreAccountsAction.pending.type]: state => {
      state.moreLoading = true
    },
    [getMoreAccountsAction.fulfilled.type]: (
      state,
      action: PayloadAction<IAccountsList>,
    ) => {
      state.moreLoading = false
      state.accounts = uniqBy(
        [...state.accounts, ...action.payload.accounts],
        'id',
      )
      state.hasMore =
        action.payload.accounts.length === R.consts.BASE_PAGE_LIMIT
      state.offset += action.payload.accounts.length
    },
    [getMoreAccountsAction.rejected.type]: state => {
      state.moreLoading = false
    },
  },
})

const persistConfig: PersistConfig<AccountsState> = {
  key: 'accounts',
  storage: AsyncStorage,
  whitelist: ['accounts'],
}

export const accountReducer = persistReducer(
  persistConfig,
  accountSlice.reducer,
)
