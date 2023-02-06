import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import NotificationsItems from 'components/NotificationsItem'
import Typo from 'components/typo'
import { useAppSelector } from 'hooks/redux'
import { useAppDispatch } from 'hooks/redux'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import { useEffect } from 'react'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from 'res'
import { getNotification, readNotification } from 'state/notification/action'
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

  const pressRead = () => {
    dispatch(readNotification({}))
  }

  useEffect(() => {
    dispatch(getNotification({}))
  }, [])

  return (
    <View style={styles.container}>
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

      <TouchableOpacity>
        <Typo.Title color="main" style={styles.labelStyle}>
          {lang(`${T}.label`)}
        </Typo.Title>
      </TouchableOpacity>

      {textNtf.ntfData?.map(i => (
        <NotificationsItems text={i.msg} onPress={pressRead} />
      ))}
    </View>
  )
}
