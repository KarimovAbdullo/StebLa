import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'

// import { ITelegramVeryfiy } from 'types/data'
import { addTelegram, verifyTelegram } from './action'
import { changeLanguage } from './action'
import { TelegramState } from './types'

const initialState: TelegramState = {
  loading: false,
  language: 'ru',
}

const addTelegramSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [changeLanguage.type]: (state, action: PayloadAction<'ru' | 'en'>) => {
      state.language = action.payload
    },

    // [userInfo.pending.type]: state => {
    //   state.loading = true
    // },
    // [userInfo.fulfilled.type]: (state, action: PayloadAction<IUserInfo>) => {
    //   if (state.user) {
    //     state.user.firstName = action.payload.firstName
    //     state.user.lastName = action.payload.lastName
    //     state.loading = false
    //   }
    // },
    // [userInfo.rejected.type]: state => {
    //   state.loading = false
    // },
    //
    [addTelegram.pending.type]: state => {
      state.loading = true
    },
    [addTelegram.fulfilled.type]: state => {
      console.log('okey')
      state.loading = true
    },
    [addTelegram.rejected.type]: state => {
      console.log('xato')
      state.loading = false
    },

    [verifyTelegram.pending.type]: state => {
      state.loading = true
    },
    [verifyTelegram.fulfilled.type]: (
      state,
      // action: PayloadAction<ITelegramVeryfiy>,
    ) => {
      state.loading = false
    },
    [verifyTelegram.rejected.type]: state => {
      console.log('xato kod')
      state.loading = false
    },
  },
})

const persistConfig: PersistConfig<TelegramState> = {
  key: 'addAcount',
  storage: AsyncStorage,
  whitelist: ['addTelegram', 'language'],
}

export const addTelegramReducer = persistReducer(
  persistConfig,
  addTelegramSlice.reducer,
)
