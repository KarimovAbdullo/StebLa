import { useBottomSheetModal } from '@gorhom/bottom-sheet'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from 'res'

import stylesConfig from './Menu.ts.style'

const Menu = () => {
  const styles = useStyles(stylesConfig)
  const navigate = useSmartNavigation()
  const { dismissAll } = useBottomSheetModal()

  // const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)

  const goCreateScreen = () => {
    dismissAll()
    //@ts-ignore
    navigate.navigate(R.routes.SCREEN_CREATE_PROFILE)
  }

  const goWord = () => {
    dismissAll()
    navigate.navigate(R.routes.SCTATIC_WORD_SCREEN)
  }

  const onNotification = () => {
    dismissAll()
    //@ts-ignore
    navigate.navigate(R.routes.SCREEN_NOTIFICATIONS)
  }

  const onAcounts = () => {
    dismissAll()
    //@ts-ignore
    navigate.navigate(R.routes.SCREEN_ACCOUNTS)
  }

  const onMyProfile = () => {
    dismissAll()
    //@ts-ignore
    navigate.navigate(R.routes.MY_PROFILE_SCREEN)
  }

  const onRule = () => {
    dismissAll()
    //@ts-ignore
    navigate.navigate(R.routes.RATES_SCREEN)
  }

  return (
    <View style={styles.Main}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.bottomCard} onPress={goCreateScreen}>
          <R.icons.PlusIcon />
          <Typo.Title type="regular18" color="main" style={styles.text}>
            Создать новое правило
          </Typo.Title>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />

      <View style={styles.container}>
        <TouchableOpacity style={styles.menu} onPress={onMyProfile}>
          <R.icons.ProfileIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Мой профиль
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu} onPress={onAcounts}>
          <R.icons.TelegramIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Телеграмм аккаунты
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu} onPress={onNotification}>
          <R.icons.BellIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Уведомления
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu} onPress={goWord}>
          <R.icons.StaticIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Статистика
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu} onPress={onRule}>
          <R.icons.DollorIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Управление подпиской
          </Typo.Title>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Menu