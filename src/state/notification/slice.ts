import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import { IGetNotification } from 'types/data'

import { getNotification, readNotification } from './action'
import { INotificationState } from './types'

const initialState: INotificationState = {
  ntfData: [],
  loading: false,
  language: 'ru',
  unread_only: true,
}

const NotificSlice = createSlice({
  name: 'Notification',
  initialState,
  reducers: {},
  extraReducers: {
    [getNotification.pending.type]: state => {
      state.loading = true
    },
    [getNotification.fulfilled.type]: (
      state,
      action: PayloadAction<IGetNotification[]>,
    ) => {
      state.loading = false
      state.ntfData = action.payload
    },
    [getNotification.rejected.type]: state => {
      state.loading = false
    },
    [readNotification.pending.type]: state => {
      state.loading = true
    },
    [readNotification.fulfilled.type]: (
      state,
      action: PayloadAction<{ read: boolean }>,
    ) => {
      state.loading = false
      action.payload.read = true
    },
    [readNotification.rejected.type]: state => {
      state.loading = false
    },
  },
})

const persistConfig: PersistConfig<INotificationState> = {
  key: 'notification',
  storage: AsyncStorage,
  whitelist: ['notification'],
}

export const NotificationReducer = persistReducer(
  persistConfig,
  NotificSlice.reducer,
)
