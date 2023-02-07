import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import { IGetNotification, IReadNotification } from 'types/data'

import {
  getReadNotification,
  getUnreadNotification,
  markNotification,
} from './action'
import { INotificationState } from './types'

const initialState: INotificationState = {
  unreadData: [],
  readData: [],
  loading: false,
  language: 'ru',
  msg_id: '',
}

const NotificSlice = createSlice({
  name: 'Notification',
  initialState,
  reducers: {},
  extraReducers: {
    [getUnreadNotification.pending.type]: state => {
      state.loading = true
    },
    [getUnreadNotification.fulfilled.type]: (
      state,
      action: PayloadAction<IGetNotification[]>,
    ) => {
      state.loading = false
      state.unreadData = action.payload
    },
    [getUnreadNotification.rejected.type]: state => {
      state.loading = false
    },
    ///////////////////////////////////////////
    [getReadNotification.pending.type]: state => {
      state.loading = true
    },
    [getReadNotification.fulfilled.type]: (
      state,
      action: PayloadAction<IGetNotification[]>,
    ) => {
      state.loading = false
      state.readData = action.payload
    },
    [getReadNotification.rejected.type]: state => {
      state.loading = false
    },
    ///////////////////////////////////////////////////

    [markNotification.pending.type]: state => {
      state.loading = true
    },
    [markNotification.fulfilled.type]: (
      state,
      action: PayloadAction<IReadNotification>,
    ) => {
      state.loading = false
      state.msg_id = action.payload.msg_id
    },
    [markNotification.rejected.type]: state => {
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
