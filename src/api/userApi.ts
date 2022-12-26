import R from 'res'
import {
  ILogin,
  ILoginSocial,
  IRegisterData,
  IUser,
  IVerifyUser,
  IVerifyUserData,
} from 'types/data'

import apiClient from './instance'

/**
 * Get user
 */
export const apiLoginUser = async (
  data: ILogin | ILoginSocial,
): Promise<IUser | null> => {
  try {
    const { data: response } = await apiClient.post<IUser>(
      R.consts.API_PATH_LOGIN,
      data,
    )

    return response
  } catch (e) {
    throw e
  }
}

/**
 * RegisterClient user
 */
export const registerUser = async (data: IRegisterData): Promise<IUser> => {
  try {
    const { data: response } = await apiClient.post<IUser>(
      R.consts.API_PATH_REGISTER,
      data,
    )

    return response
  } catch (e) {
    throw e
  }
}

/**
 * verify user
 */
export const verifyUserApi = async (
  data: IVerifyUserData,
): Promise<IVerifyUser> => {
  try {
    const { data: response } = await apiClient.post<IVerifyUser>(
      R.consts.API_PATH_VERIFY_USER,
      data,
    )

    return response
  } catch (e) {
    throw e
  }
}
