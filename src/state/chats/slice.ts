import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import { IChatsList } from 'types/data'

import { getChatsAction, getRuleAction } from './actions'
import { ChatsState } from './types'

const initialState: ChatsState = {
  chats: [],
  loading: false,
  language: 'ru',
}

const chatSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
  extraReducers: {
    [getChatsAction.pending.type]: state => {
      state.loading = true
      state.chats = []
    },
    [getChatsAction.fulfilled.type]: (
      state,
      action: PayloadAction<IChatsList>,
    ) => {
      state.loading = false
      state.chats = action.payload.chatInfos
    },
    [getChatsAction.rejected.type]: state => {
      state.loading = false
    },

    [getRuleAction.pending.type]: state => {
      state.loading = true
    },
    [getRuleAction.fulfilled.type]: state => {
      state.loading = false
    },
    [getRuleAction.rejected.type]: state => {
      state.loading = false
    },
  },
})

const persistConfig: PersistConfig<ChatsState> = {
  key: 'chat',
  storage: AsyncStorage,
  whitelist: ['chats'],
}

export const chatReducer = persistReducer(persistConfig, chatSlice.reducer)
