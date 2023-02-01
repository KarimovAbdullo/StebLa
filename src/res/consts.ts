import { Dimensions, Platform } from 'react-native'
import Config from 'react-native-config'

// API list
export const API_BASE_URL = Config.API_BASE_URL

export const API_PATH_SEND_CONFIRM_CODE = '/auth-back/api/v2/sendConfirmCode'
export const API_PATH_LOGIN = '/auth-back/api/v2/login'
export const API_PATH_GET_USER_INFO = '/auth-back/api/v2/getUserInfo'
export const API_PATH_GET_CHATS = '/bot-telegram-service/public/chats'
export const API_PATH_GET_PUBLIC_KEY = '/auth-back/api/v2/getPublicKey'
export const API_PATH_RULES = '/bot-telegram-service/rules'
export const API_PATH_UPDATE_USER_INFO = '/auth-back/api/v2/updateUserInfo'
export const API_PATH_TELEGRAM_INIT = '/bot-telegram-service/public/init'
export const API_PATH_TELEGRAM_VERFY = '/bot-telegram-service/public/code'
export const API_PATH_GET_CHATS_ICON = '/bot-telegram-service/public/icon'
//Device
export const IS_ANDROID = Platform.OS === 'android'
export const IS_IOS = !IS_ANDROID

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height
