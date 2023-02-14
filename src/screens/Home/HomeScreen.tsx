import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Typo from 'components/typo'
import { useAppSelector } from 'hooks/redux'
import { useAppDispatch } from 'hooks/redux'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from 'res'
import { signOutUser } from 'state/user/actions'
import { getUser } from 'state/user/selectors'
import { lang } from 'utils/lang'

import stylesConfig from './HomeScreen.styles'

const T = R.lang.screen_home

const HomeScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigate = useSmartNavigation()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(getUser)

  const goCreateScreen = () => {
    if (user?.hasTelegram) {
      navigate.navigate(R.routes.screen_REGISTERED_TELEGRAMM_INFO)
    } else {
      navigate.navigate(R.routes.CREATE_RULE_SCREEN)
    }
  }

  const goWord = () => {
    if (user?.hasTelegram) {
      navigate.navigate(R.routes.screen_REGISTERED_TELEGRAMM_INFO)
    } else {
      navigate.navigate(R.routes.SCTATIC_WORD_SCREEN)
    }
  }

  const onNotification = () => {
    if (user?.hasTelegram) {
      navigate.navigate(R.routes.screen_REGISTERED_TELEGRAMM_INFO)
    } else {
      navigate.navigate(R.routes.SCREEN_NOTIFICATIONS)
    }
  }

  const onAcounts = () => {
    if (user?.hasTelegram) {
      navigate.navigate(R.routes.SCREEN_ACCOUNTS)
    } else {
      navigate.navigate(R.routes.screen_REGISTERED_TELEGRAMM_INFO)
    }
  }

  const onMyProfile = () => {
    if (user?.hasTelegram) {
      navigate.navigate(R.routes.screen_REGISTERED_TELEGRAMM_INFO)
    } else {
      // @ts-ignore
      navigate.navigate(R.routes.MY_PROFILE_SCREEN)
    }
  }

  const onRule = () => {
    if (user?.hasTelegram) {
      navigate.navigate(R.routes.screen_REGISTERED_TELEGRAMM_INFO)
    } else {
      navigate.navigate(R.routes.RATES_SCREEN)
    }
  }

  const signOut = () => {
    dispatch(signOutUser())
    navigate.navigate(R.routes.SCREEN_LOGIN)
  }

  // const onUserList = () => {
  //   navigate.navigate(R.routes.SCREEN_LIST_USERS)
  // }

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

        {/* <TouchableOpacity style={styles.menu} onPress={onUserList}>
          <R.icons.DollorIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Spisik Polzovateley
          </Typo.Title>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.menu} onPress={signOut}>
          <R.icons.ExitIcon />
          <Typo.Title type="regular18" color="red" style={styles.text}>
            Выход
          </Typo.Title>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen
