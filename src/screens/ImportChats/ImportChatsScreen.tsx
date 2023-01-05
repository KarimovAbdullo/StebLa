import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from 'res'

import stylesConfig from './ImportChatsScreen.styles'

export const ImportChatsScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()

  const goChats = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_CHATS)
  }
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <TouchableOpacity style={styles.iconContent}>
        <R.icons.MenuIcon />
      </TouchableOpacity>

      <View style={styles.textContent}>
        <Typo.Title type="regular28">Импорт чатов</Typo.Title>

        <Typo.Title center style={styles.subTitle}>
          Для работы приложения необходимо импортировать чаты из телеграм
        </Typo.Title>

        <CustomButton
          text={'Импортировать'}
          style={styles.button}
          onPress={goChats}
        />
      </View>
    </View>
  )
}
