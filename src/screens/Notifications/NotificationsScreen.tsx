import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import NotificationsItems from 'components/NotificationsItem'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'

import stylesConfig from './NotificationsScreen.styles'

const T = R.lang.screen_notification

export const NotificationsScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigate = useSmartNavigation()

  const back = () => {
    navigate.goBack()
  }

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

      <NotificationsItems
        name={lang(`${T}.text`)}
        label={lang(`${T}.label`)}
        text={lang(`${T}.title`)}
        icon={<R.icons.TelegrammIcon />}
      />

      <NotificationsItems
        text={lang(`${T}.title`)}
        icon={<R.icons.WhatsAppIcon />}
      />

      <NotificationsItems
        name={lang(`${T}.text`)}
        text={lang(`${T}.title`)}
        icon={<R.icons.TelegrammIcon color="#9fd2ed" />}
      />

      <NotificationsItems
        text={lang(`${T}.title`)}
        icon={<R.icons.WhatsAppIcon color="#9beba1" />}
      />
    </View>
  )
}
