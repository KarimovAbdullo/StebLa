import { useBottomSheetModal } from '@gorhom/bottom-sheet'
import Typo from 'components/typo'
import { useAppSelector } from 'hooks/redux'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from 'res'
import { getChats } from 'state/chats/selectors'
import { lang } from 'utils/lang'

import stylesConfig from './Menu.ts.style'

const T = R.lang.screen_menu

const Menu = () => {
  const styles = useStyles(stylesConfig)
  const navigate = useSmartNavigation()
  const { dismissAll } = useBottomSheetModal()

  const { chats } = useAppSelector(getChats)

  // const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)

  const goCreateScreen = () => {
    dismissAll()
    if (chats.length > 0) {
      navigate.navigate(R.routes.CREATE_RULE_SCREEN)
    } else {
      navigate.navigate(R.routes.SCREEN_ADD_TELEGRAM_NUM)
    }
  }

  const goWord = () => {
    dismissAll()
    if (chats.length > 0) {
      navigate.navigate(R.routes.SCTATIC_WORD_SCREEN)
    } else {
      navigate.navigate(R.routes.SCREEN_ADD_TELEGRAM_NUM)
    }
  }

  const onNotification = () => {
    dismissAll()
    if (chats.length > 0) {
      navigate.navigate(R.routes.SCREEN_NOTIFICATIONS)
    } else {
      navigate.navigate(R.routes.SCREEN_ADD_TELEGRAM_NUM)
    }
  }

  const onAcounts = () => {
    dismissAll()
    if (chats.length > 0) {
      navigate.navigate(R.routes.SCREEN_ACCOUNTS)
    } else {
      navigate.navigate(R.routes.SCREEN_ADD_TELEGRAM_NUM)
    }
  }

  const onMyProfile = () => {
    dismissAll()
    if (chats.length > 0) {
      //@ts-ignore
      navigate.navigate(R.routes.MY_PROFILE_SCREEN)
    } else {
      navigate.navigate(R.routes.SCREEN_ADD_TELEGRAM_NUM)
    }
  }

  const onRule = () => {
    dismissAll()
    if (chats.length > 0) {
      navigate.navigate(R.routes.RATES_SCREEN)
    } else {
      navigate.navigate(R.routes.SCREEN_ADD_TELEGRAM_NUM)
    }
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
      </View>
    </View>
  )
}

export default Menu
