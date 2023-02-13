import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { uniqBy } from 'lodash'
import { PersistConfig, persistReducer } from 'redux-persist'
import R from 'res'
import { IChatsList, IRuleResponse } from 'types/data'

import { getChatsAction, getMoreChatsAction, getRuleAction } from './actions'
import { ChatsState } from './types'

const initialState: ChatsState = {
  chats: [],
  loading: false,
  language: 'ru',
  offset: 0,
  hasMore: true,
  moreLoading: false,
  rules: [''],
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
      state.offset = 9
    },
    [getChatsAction.rejected.type]: state => {
      state.loading = false
    },

    [getMoreChatsAction.pending.type]: state => {
      state.moreLoading = true
    },
    [getMoreChatsAction.fulfilled.type]: (
      state,
      action: PayloadAction<IChatsList>,
    ) => {
      state.moreLoading = false
      state.chats = uniqBy([...state.chats, ...action.payload.chatInfos], 'id')
      state.hasMore =
        action.payload.chatInfos.length === R.consts.BASE_PAGE_LIMIT
      state.offset += action.payload.chatInfos.length
    },
    [getMoreChatsAction.rejected.type]: state => {
      state.moreLoading = false
    },

    [getRuleAction.pending.type]: state => {
      state.loading = true
    },
    [getRuleAction.fulfilled.type]: (
      state,
      action: PayloadAction<IRuleResponse>,
    ) => {
      state.loading = false
      state.rules = action.payload.rules
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
