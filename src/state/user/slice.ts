import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import {
  changeLanguage,
  confirmOnBoarding,
  getPrice,
  login,
  onChangeTelegram,
  sendConfirmCode,
  signOutUser,
} from 'state/user/actions'
import { UserState } from 'state/user/types'
import { IPriceData, IToken, IUser } from 'types/data'

const initialState: UserState = {
  user: null,
  loading: false,
  token: null,
  language: 'ru',
  onboardingSuccess: false,
  hasTelegram: false,
  price: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [changeLanguage.type]: (state, action: PayloadAction<'ru' | 'en'>) => {
      state.language = action.payload
    },
    [confirmOnBoarding.type]: (state, action: PayloadAction<boolean>) => {
      state.onboardingSuccess = action.payload
    },
    [onChangeTelegram.type]: (state, action: PayloadAction<boolean>) => {
      state.hasTelegram = action.payload
    },

    [sendConfirmCode.pending.type]: state => {
      state.loading = true
    },
    [sendConfirmCode.fulfilled.type]: state => {
      state.loading = false
    },
    [sendConfirmCode.rejected.type]: state => {
      state.loading = false
    },

    [login.pending.type]: state => {
      state.loading = true
    },
    [login.fulfilled.type]: (
      state,
      action: PayloadAction<{
        token: IToken
        user: IUser
        hasTelegram: boolean
      }>,
    ) => {
      state.loading = false
      state.token = action.payload.token
      state.user = action.payload.user
      state.hasTelegram = action.payload.hasTelegram
    },
    [login.rejected.type]: state => {
      state.loading = false
    },

    [signOutUser.type]: state => {
      state.user = null
      state.loading = false
      state.token = null
      state.hasTelegram = false
    },

    [getPrice.pending.type]: state => {
      state.loading = true
    },
    [getPrice.fulfilled.type]: (
      state,
      action: PayloadAction<{ price: IPriceData }>,
    ) => {
      state.loading = false
      state.price = action.payload.price
    },
    [getPrice.rejected.type]: state => {
      state.loading = false
    },
  },
})

const persistConfig: PersistConfig<UserState> = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: [
    'user',
    'token',
    'language',
    'onboardingSuccess',
    'price',
    'hasTelegram',
  ],
}

export const userReducer = persistReducer(persistConfig, userSlice.reducer)
