import notifee from '@notifee/react-native'
import AsyncStorage from '@react-native-community/async-storage'
import inAppMessaging from '@react-native-firebase/in-app-messaging'
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

export const notificationListner = async () => {
  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   const channelId = await notifee.createChannel({
  //     id: 'backgroundMessage',
  //     name: 'backgroundMessage',
  //   })
  //
  //   await notifee.displayNotification({
  //     title: remoteMessage.notification?.title,
  //     body: remoteMessage.notification?.body,
  //     android: {
  //       channelId,
  //       sound: 'hollow',
  //       pressAction: {
  //         id: 'default',
  //       },
  //     },
  //   })
  // })
  //
  // messaging().onNotificationOpenedApp(async remoteMessage => {
  //   console.log(
  //     'Notification caused app to open from background state:',
  //     remoteMessage.notification,
  //   )
  //
  //   const newMessage = await messaging().getInitialNotification()
  //
  //   if (newMessage) {
  //     console.log(
  //       'Notification caused app to open from quit state:',
  //       remoteMessage.notification,
  //     )
  //   }
  //
  //   messaging().onMessage(async gg => {
  //     console.log('notification froground state...', gg)
  //   })
  // })
}
