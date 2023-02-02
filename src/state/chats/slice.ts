import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { uniqBy } from 'lodash'
import { PersistConfig, persistReducer } from 'redux-persist'
import { IChatsList, IRuleResponse } from 'types/data'

import { getChatsAction, getMoreChatsAction, getRuleAction } from './actions'
import { ChatsState } from './types'

const initialState: ChatsState = {
  chats: [],
  loading: false,
  language: 'ru',
  chatListPage: 1,
  next: null,
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
      state.chatListPage = 1
    },
    [getChatsAction.rejected.type]: state => {
      state.loading = false
    },

    [getMoreChatsAction.pending.type]: state => {
      state.loading = true
    },
    [getMoreChatsAction.fulfilled.type]: (
      state,
      action: PayloadAction<IChatsList>,
    ) => {
      state.loading = false
      if (state.chats) {
        const newData = uniqBy(
          [...state.chats, ...action.payload.chatInfos],
          'id',
        )
        state.chats = newData
        state.chatListPage += 1
      }
    },
    [getMoreChatsAction.rejected.type]: state => {
      state.loading = false
    },

    [getRuleAction.pending.type]: state => {
      state.loading = true
    },
    [getRuleAction.fulfilled.type]: (
      state,
      action: PayloadAction<IRuleResponse>,
    ) => {
      state.loading = false
      console.log('====================================')
      console.log(action.payload)
      console.log('====================================')
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
