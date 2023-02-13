/**
 * @format
 */
import messaging from '@react-native-firebase/messaging'
import NotificationService from 'NotificationService'
import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import App from './src/App'

messaging().onMessage(async remoteMessage => {
  console.log(remoteMessage)
  await NotificationService.displayNotification(
    remoteMessage?.data?.s,
    remoteMessage?.data?.m,
    remoteMessage?.data?.fcm_options?.image,
  )
})

messaging().setBackgroundMessageHandler(async remoteMessage => {
  await NotificationService.displayNotification(
    remoteMessage?.data?.s,
    remoteMessage?.data?.m,
    remoteMessage?.data?.fcm_options?.image,
  )
})

AppRegistry.registerComponent(appName, () => App)
