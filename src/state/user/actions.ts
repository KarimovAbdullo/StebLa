import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
import { ILogin, IUserInfo, IVerifyUser, IVerifyUserData } from 'types/data'

export const signOutUser = createAction('user/signOut')
export const changeLanguage = createAction<'ru' | 'en'>('user/language')

// export const signInUser = createAsyncThunk<
//   {} | null,
//   {
//     data: ILogin
//     onSuccess?: (response: {}) => void
//     onError?: () => void
//   }
// >('user/signin', async arg => {
//   try {
//     const { data: response } = await apiClient.post<{}>(
//       R.consts.API_PATH_LOGIN,
//       arg.data,
//     )
//
//     arg.onSuccess?.(response)
//     return response
//   } catch (e) {
//     arg.onError?.()
//     throw e
//   }
// })
//
// export const verifyUser = createAsyncThunk<
//   IVerifyUser | null,
//   {
//     data: IVerifyUserData
//     onSuccess?: (response: IVerifyUser) => void
//     onError?: () => void
//   }
// >('user/confirm', async arg => {
//   try {
//     const { data: response } = await apiClient.post<IVerifyUser>(
//       R.consts.API_PATH_CONFIRM,
//       arg.data,
//     )
//
//     arg.onSuccess?.(response)
//     return response
//   } catch (e) {
//     arg.onError?.()
//     throw e
//   }
// })
//
// export const userInfo = createAsyncThunk<
//   IUserInfo | null,
//   {
//     data: IUserInfo
//     onSuccess?: (response: IUserInfo) => void
//     onError?: () => void
//   }
// >('users/change_name', async arg => {
//   try {
//     const { data: response } = await apiClient.put<IUserInfo>(
//       R.consts.API_PATH_CHANGE_NAME,
//       arg.data,
//     )
//     console.log(response)
//
//     arg.onSuccess?.(response)
//     return response
//   } catch (e) {
//     arg.onError?.()
//     throw e
//   }
// })
