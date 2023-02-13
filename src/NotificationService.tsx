import notifee, { AndroidImportance } from '@notifee/react-native'

class NotificationService {
  static displayNotification = async (
    title: string,
    body: string,
    image: string,
  ) => {
    // Create a channel
    const channelId = await notifee.createChannel({
      id: 'important',
      name: 'Important Notifications',
      importance: AndroidImportance.HIGH,
      lights: true,
      sound: 'hollow',
    })

    // Display a notification
    image
      ? await notifee.displayNotification({
          title: title,
          body: body,
          android: {
            sound: 'hollow',
            channelId,
            importance: AndroidImportance.HIGH,
            color: 'blue',
          },
          ios: {
            sound: 'local.wav',
            attachments: [
              {
                // iOS resource
                url: image,
                thumbnailHidden: false,
              },
            ],
          },
        })
      : await notifee.displayNotification({
          title: title,
          body: body,
          android: {
            sound: 'hollow',
            channelId,
            importance: AndroidImportance.HIGH,
            color: 'blue',
          },
          ios: {
            sound: 'local.wav',
          },
        })
  }
}

export default NotificationService
