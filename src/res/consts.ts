import { Dimensions, Platform } from 'react-native'
import Config from 'react-native-config'

// API list
export const API_BASE_URL = Config.API_BASE_URL

export const API_PATH_LOGIN = 'users/signin'
export const API_PATH_TELEGRAM_INIT =
  'https://stebla.dev-webdevep.ru/bot-telegram-service/public/init'
export const API_PATH_TELEGRAM_VERFY =
  'https://stebla.dev-webdevep.ru/bot-telegram-service/public/code'

//Device
export const IS_ANDROID = Platform.OS === 'android'
export const IS_IOS = !IS_ANDROID

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height
