import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import NotificationsItems from 'components/NotificationsItem'
import { ReadNotificationItems } from 'components/ReadNotificationItems/ReadNotificationItems'
import Typo from 'components/typo'
import { useAppSelector } from 'hooks/redux'
import { useAppDispatch } from 'hooks/redux'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import { useEffect } from 'react'
import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import R from 'res'
import {
  getReadNotification,
  getUnreadNotification,
  markNotification,
} from 'state/notification/action'
import { GetNotification } from 'state/notification/selectors'
import { lang } from 'utils/lang'

import stylesConfig from './NotificationsScreen.styles'

const T = R.lang.screen_notification

export const NotificationsScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigate = useSmartNavigation()
  const dispatch = useAppDispatch()
  const textNtf = useAppSelector(GetNotification)

  const back = () => {
    navigate.goBack()
  }
  // const active = activeList.find(i => i === item.id)

  // const onLongPress = () => {
  //   setActiveList([...activeList, item.id])

  const pressRead = (id: string) => {
    dispatch(markNotification({ data: { msg_id: id } }))
  }

  const pressAllRead = ([]: string[]) => {
    dispatch(markNotification({ data: { msg_id: '*' } }))
  }

  useEffect(() => {
    dispatch(getUnreadNotification())
    dispatch(getReadNotification())
  }, [])

  return (
    <ScrollView style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <View style={styles.iconContent}>
        <TouchableOpacity onPress={back}>
          <R.icons.BackIcon />
        </TouchableOpacity>
        <Typo.Title type="regular18bold">{lang(`${T}.name`)}</Typo.Title>
        <View style={styles.item} />
      </View>

      <Typo.Title center color="iconPrimary">
        {lang(`${T}.text`)}
      </Typo.Title>

      <TouchableOpacity onPress={() => pressAllRead(['*'])}>
        <Typo.Title color="main" style={styles.labelStyle}>
          {lang(`${T}.label`)}
        </Typo.Title>
      </TouchableOpacity>

      {textNtf.readData?.map(item => (
        <NotificationsItems
          text={item.msg}
          onPress={() => pressRead(item.id)}
        />
      ))}
      <Typo.Title center color="iconPrimary">
        "Прочитанные"
      </Typo.Title>

      {textNtf.unreadData?.map(item => (
        <ReadNotificationItems
          text={item.msg}
          onPress={() => pressRead(item.id)}
        />
      ))}
    </ScrollView>
  )
}
