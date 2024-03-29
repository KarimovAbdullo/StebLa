import { useBottomSheetModal } from '@gorhom/bottom-sheet'
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

import stylesConfig from './Menu.ts.style'

const T = R.lang.screen_menu

const Menu = () => {
  const styles = useStyles(stylesConfig)
  const navigate = useSmartNavigation()
  const { dismissAll } = useBottomSheetModal()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(getUser)

  // const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)

  const goCreateScreen = () => {
    dismissAll()
    if (user?.hasTelegram) {
      navigate.navigate(R.routes.screen_REGISTERED_TELEGRAMM_INFO)
    } else {
      navigate.navigate(R.routes.CREATE_RULE_SCREEN)
    }
  }

  const goWord = () => {
    dismissAll()
    if (user?.hasTelegram) {
      navigate.navigate(R.routes.screen_REGISTERED_TELEGRAMM_INFO)
    } else {
      navigate.navigate(R.routes.SCTATIC_WORD_SCREEN)
    }
  }

  const onNotification = () => {
    dismissAll()
    if (user?.hasTelegram) {
      navigate.navigate(R.routes.screen_REGISTERED_TELEGRAMM_INFO)
    } else {
      navigate.navigate(R.routes.SCREEN_NOTIFICATIONS)
    }
  }

  const onAcounts = () => {
    dismissAll()
    if (user?.hasTelegram) {
      navigate.navigate(R.routes.screen_REGISTERED_TELEGRAMM_INFO)
    } else {
      navigate.navigate(R.routes.SCREEN_ACCOUNTS)
    }
  }

  const onMyProfile = () => {
    dismissAll()
    if (user?.hasTelegram) {
      navigate.navigate(R.routes.screen_REGISTERED_TELEGRAMM_INFO)
    } else {
      //@ts-ignore
      navigate.navigate(R.routes.MY_PROFILE_SCREEN)
    }
  }

  const onRule = () => {
    dismissAll()
    if (user?.hasTelegram) {
      navigate.navigate(R.routes.RATES_SCREEN)
    } else {
      navigate.navigate(R.routes.SCREEN_ADD_TELEGRAM_NUM)
    }
  }

  const signOut = () => {
    dispatch(signOutUser())
    navigate.navigate(R.routes.SCREEN_LOGIN)
  }

  return (
    <View style={styles.Main}>
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

export default Menu
