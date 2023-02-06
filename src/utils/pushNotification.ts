import AsyncStorage from '@react-native-community/async-storage'
import messaging from '@react-native-firebase/messaging'

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission()

  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL

  if (enabled) {
    console.log('Authorization status:', authStatus)
  }
}

export async function getFCMToken() {
  let fcmToken = await AsyncStorage.getItem('fcmToken')
  if (!fcmToken) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const fcmToken = await messaging().getToken()
      if (fcmToken) {
        AsyncStorage.setItem('fcmToken', fcmToken)
        return fcmToken
      } else {
      }
    } catch (error) {}
  }
  return fcmToken
}

export const notificationListner = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    )

    messaging()
      .getInitialNotification()
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          )
        }
      })
    // eslint-disable-next-line @typescript-eslint/no-shadow
    messaging().onMessage(async remoteMessage => {
      console.log('notification froground state...', remoteMessage)
    })
  })
}
