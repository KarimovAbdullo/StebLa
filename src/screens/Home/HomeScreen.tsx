import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Config from 'react-native-config'
import R from 'res'
import { lang } from 'utils/lang'

import stylesConfig from './HomeScreen.styles'

const T = R.lang.screen_home

const HomeScreen = () => {
  const styles = useStyles(stylesConfig)
  console.log(Config.SIZE_MATTERS_BASE_WIDTH)
  const navigate = useSmartNavigation()

  const goCreateScreen = () => {
    navigate.navigate(R.routes.SCREEN_CREATE_PROFILE)
  }

  const goWord = () => {
    navigate.navigate(R.routes.SCTATIC_WORD_SCREEN)
  }

  const onNotification = () => {
    navigate.navigate(R.routes.SCREEN_NOTIFICATIONS)
  }

  const onAcounts = () => {
    navigate.navigate(R.routes.SCREEN_ACCOUNTS)
  }

  const onMyProfile = () => {
    navigate.navigate(R.routes.MY_PROFILE_SCREEN)
  }

  const onRule = () => {
    navigate.navigate(R.routes.RATES_SCREEN)
  }

  return (
    <View style={styles.Main}>
      <FocusAwareStatusBar
        backgroundColor={'rgba(52, 52, 52, 0.78)'}
        barStyle={'dark-content'}
      />
      <View style={styles.topCard} />

      <View style={styles.container}>
        <TouchableOpacity style={styles.bottomCard} onPress={goCreateScreen}>
          <R.icons.PlusIcon />
          <Typo.Title type="regular18" color="main" style={styles.text}>
            {lang(`${T}.btnTitle`)}
          </Typo.Title>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />

      <View style={styles.container}>
        <TouchableOpacity style={styles.menu} onPress={onMyProfile}>
          <R.icons.ProfileIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            {lang(`${T}.btnSubTitle`)}
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu} onPress={onAcounts}>
          <R.icons.TelegramIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            {lang(`${T}.btnLabel`)}
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu} onPress={onNotification}>
          <R.icons.BellIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            {lang(`${T}.btnSubLabel`)}
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu} onPress={goWord}>
          <R.icons.StaticIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            {lang(`${T}.btnText`)}
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu} onPress={onRule}>
          <R.icons.DollorIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            {lang(`${T}.btnSubText`)}
          </Typo.Title>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen
