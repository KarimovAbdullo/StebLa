import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import NotificationsItems from 'components/NotificationsItem'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from 'res'

import stylesConfig from './NotificationsScreen.styles'

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

        <Typo.Title type="regular18bold">Уведомления</Typo.Title>

        <View style={styles.item} />
      </View>

      <NotificationsItems
        name="Непрочитанные"
        label="Отметить все"
        text="В чате “Иван Петров” было найдено ключевое слово “Огонь”"
        icon={<R.icons.TelegrammIcon />}
      />

      <NotificationsItems
        text="В чате “Иван Петров” было найдено ключевое слово “Огонь”"
        icon={<R.icons.WhatsAppIcon />}
      />

      <NotificationsItems
        name="Прочитанные"
        text="В чате “Иван Петров” было найдено ключевое слово “Огонь”"
        icon={<R.icons.TelegrammIcon color="#9fd2ed" />}
      />

      <NotificationsItems
        text="В чате “Иван Петров” было найдено ключевое слово “Огонь”"
        icon={<R.icons.WhatsAppIcon color="#9beba1" />}
      />
    </View>
  )
}
