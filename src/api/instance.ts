import axios from 'axios'
import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import * as RNLocalize from 'react-native-localize'
import R from 'res'

const apiClient = axios.create({
  baseURL: R.consts.API_BASE_URL,
  headers: {
    'X-Hardware-Id': DeviceInfo.getUniqueId(),
    'X-Platform': Platform.OS,
    'X-App-Version': DeviceInfo.getVersion(),
    'X-Language': RNLocalize.getLocales()[0].languageCode,
  },
  // @ts-ignore
  // transformResponse: [...axios.defaults.transformResponse, humps.camelizeKeys],
  // @ts-ignore
  // transformRequest: [decamelize, ...axios.defaults.transformRequest],
})

// apiClient.interceptors.request.use(config => ({
//   ...config,
//   params: humps.decamelizeKeys(config.params),
// }))
//
// apiClient.interceptors.request.use((req: AxiosRequestConfig) => {
//   const token = store.getState().user?.token
//
//   if (req.headers === undefined) {
//     req.headers = {}
//   }
//
//   if (token) {
//     req.headers.authorization = `Token ${token}`
//   }
//
//   return req
// })

// function decamelize(object: any) {
//   // @ts-ignore
//   if (!(object && !(object instanceof File))) {
//     return object
//   }
//
//   if (object instanceof FormData) {
//     return object
//   }
//
//   if (typeof object === 'object') {
//     return humps.decamelizeKeys(object)
//   }
// }

export default apiClient
