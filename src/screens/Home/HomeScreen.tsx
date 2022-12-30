import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Config from 'react-native-config'
import R from 'res'

import stylesConfig from './HomeScreen.styles'

const HomeScreen = () => {
  const styles = useStyles(stylesConfig)
  console.log(Config.SIZE_MATTERS_BASE_WIDTH)
  const navigate = useSmartNavigation()

  const goCreateScreen = () => {
    //@ts-ignore
    navigate.navigate(R.routes.SCREEN_CREATE_PROFILE)
  }
  return (
    <View>
      <FocusAwareStatusBar
        backgroundColor={'rgba(52, 52, 52, 0.78)'}
        barStyle={'dark-content'}
      />
      <View style={styles.topCard} />

      <Container>
        <TouchableOpacity style={styles.bottomCard} onPress={goCreateScreen}>
          <R.icons.PlusIcon />
          <Typo.Title type="regular18" color="main" style={styles.text}>
            Создать новое правило
          </Typo.Title>
        </TouchableOpacity>
      </Container>
      <View style={styles.line} />

      <Container>
        <TouchableOpacity style={styles.menu}>
          <R.icons.ProfileIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Мой профиль
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}>
          <R.icons.TelegramIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Телеграмм аккаунты
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}>
          <R.icons.BellIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Уведомления
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}>
          <R.icons.StaticIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Статистика
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}>
          <R.icons.DollorIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Управление подпиской
          </Typo.Title>
        </TouchableOpacity>
      </Container>
    </View>
  )
}

export default HomeScreen
