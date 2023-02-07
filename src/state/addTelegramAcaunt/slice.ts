import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'

// import { ITelegramVeryfiy } from 'types/data'
import { addTelegram, confirmOnBoarding, verifyTelegram } from './action'
import { changeLanguage } from './action'
import { TelegramState } from './types'

const initialState: TelegramState = {
  loading: false,
  language: 'ru',
  token: '',
  onboardingSuccess: false,
}

const addTelegramSlice = createSlice({
  name: 'addTelegram',
  initialState,
  reducers: {},
  extraReducers: {
    [changeLanguage.type]: (state, action: PayloadAction<'ru' | 'en'>) => {
      state.language = action.payload
    },
    [confirmOnBoarding.type]: (state, action: PayloadAction<boolean>) => {
      state.onboardingSuccess = action.payload
    },

    [addTelegram.pending.type]: state => {
      state.loading = true
    },
    [addTelegram.fulfilled.type]: state => {
      console.log('okey')
      state.loading = false
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
  whitelist: ['addTelegram', 'language', 'onboardingSuccess', 'token'],
}

export const addTelegramReducer = persistReducer(
  persistConfig,
  addTelegramSlice.reducer,
)
