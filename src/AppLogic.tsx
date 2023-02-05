import apiClient from 'api/instance'
import { useAppSelector } from 'hooks/redux'
import { useAppState } from 'hooks/useAppState'
import React, { ReactChild, ReactElement, ReactNode, useEffect } from 'react'
import { AppState, AppStateStatus } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import R from 'res'
import { getUser } from 'state/user/selectors'
import {
  getFCMToken,
  NotificationListner,
  requestUserPermission,
} from 'utils/pushNotification'

interface IAppLogic {
  children: ReactNode | ReactChild | ReactElement
}

const AppLogic = (props: IAppLogic) => {
  const appState = useAppState()
  const { user } = useAppSelector(getUser)

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    )

    return () => {
      subscription.remove()
    }
  }, [])

  useEffect(() => {
    NotificationListner()
    requestUserPermission()
    getFCMToken()
    sendToken()
  }, [])

  // App state
  useEffect(() => {}, [appState])

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true })
    }, 500)
  })

  const sendToken = async () => {
    const fcmToken = await getFCMToken()
    console.log('hey', fcmToken)

    // @ts-ignore
    if (fcmToken) {
      apiClient.post(R.consts.FCM_TOKEN, { token: fcmToken, uid: user?.id })
    }
  }

  const handleAppStateChange = (appStateProps: AppStateStatus) => {
    if (appStateProps === 'active') {
    }
  }

  return <>{props.children}</>
}

export default AppLogic
