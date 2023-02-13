import AsyncStorage from '@react-native-community/async-storage'
import { createSlice } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'

import { postPayment } from './action'
import { IPayState } from './type'

const initialState: IPayState = {
  loading: false,
}

const payState = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
  extraReducers: {
    [postPayment.pending.type]: state => {
      state.loading = true
    },
    [postPayment.fulfilled.type]: state => {
      state.loading = false
    },
    [postPayment.rejected.type]: state => {
      state.loading = false
    },
  },
})

const persistConfig: PersistConfig<IPayState> = {
  key: 'pay',
  storage: AsyncStorage,
  whitelist: ['pay'],
}

export const payReducer = persistReducer(persistConfig, payState.reducer)
