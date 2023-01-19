import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import {
  changeLanguage,
  confirmOnBoarding,
  login,
  sendConfirmCode,
  // signOutUser,
} from 'state/user/actions'
import { UserState } from 'state/user/types'
import { ILoginResponse, IUser } from 'types/data'

const initialState: UserState = {
  user: null,
  loading: false,
  token: '' || {},
  language: 'ru',
  onboardingSuccess: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // [signOutUser.type]: state => {
    //   state.user = null
    //   state.loading = false
    //   state.token = null
    // },
    [changeLanguage.type]: (state, action: PayloadAction<'ru' | 'en'>) => {
      state.language = action.payload
    },

    [confirmOnBoarding.type]: (state, action: PayloadAction<boolean>) => {
      state.onboardingSuccess = action.payload
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
      action: PayloadAction<{ token: ILoginResponse; user: IUser }>,
    ) => {
      state.loading = false
      state.token = action.payload.token
      state.user = action.payload.user
    },
    [login.rejected.type]: state => {
      state.loading = false
    },
  },
})

const persistConfig: PersistConfig<UserState> = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['user', 'token', 'language', 'onboardingSuccess'],
}

export const userReducer = persistReducer(persistConfig, userSlice.reducer)
