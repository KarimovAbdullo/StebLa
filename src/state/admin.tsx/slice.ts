import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { uniqBy } from 'lodash'
import { PersistConfig, persistReducer } from 'redux-persist'
// import R from 'res'
import { IAdminList } from 'types/data'

import { getUsersAction } from './actions'
import { AdminState } from './types'

const initialState: AdminState = {
  admin: [],
  loading: false,
  offset: 0,
  hasMore: true,
  moreLoading: false,
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: {
    [getUsersAction.pending.type]: state => {
      state.loading = true
      state.moreLoading = true
      state.admin = []
    },
    [getUsersAction.fulfilled.type]: (
      state,
      action: PayloadAction<IAdminList>,
    ) => {
      state.loading = false
      state.moreLoading = false
      state.admin = action.payload.users
      state.offset = 10
    },
    [getUsersAction.rejected.type]: state => {
      state.loading = false
      state.moreLoading = false
    },
  },
})

const persistConfig: PersistConfig<AdminState> = {
  key: 'admin',
  storage: AsyncStorage,
  whitelist: ['admin'],
}

export const adminReducer = persistReducer(persistConfig, adminSlice.reducer)
