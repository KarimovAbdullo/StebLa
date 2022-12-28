import AsyncStorage from '@react-native-community/async-storage'
import { createSlice } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import { signInUser, signOutUser } from 'state/user/actions'
import { UserState } from 'state/user/types'

const initialState: UserState = {
  user: null,
  loading: false,
  token: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signOutUser.type]: state => {
      state.user = null
      state.loading = false
      state.token = null
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

    [signInUser.pending.type]: state => {
      state.loading = true
    },
    [signInUser.fulfilled.type]: state => {
      state.loading = false
    },
    [signInUser.rejected.type]: state => {
      state.loading = false
    },

    // [verifyUser.pending.type]: state => {
    //   state.loading = true
    // },
    // [verifyUser.fulfilled.type]: (
    //   state,
    //   action: PayloadAction<IVerifyUser>,
    // ) => {
    //   state.loading = false
    //   state.user = action.payload.user
    //   state.token = action.payload.token
    // },
    // [verifyUser.rejected.type]: state => {
    //   state.loading = false
    // },
  },
})

const persistConfig: PersistConfig<UserState> = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['user', 'token'],
}

export const userReducer = persistReducer(persistConfig, userSlice.reducer)
