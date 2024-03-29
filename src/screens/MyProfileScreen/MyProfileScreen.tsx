import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Menu from 'components/Menu/Menu'
import Typo from 'components/typo'
import { useAppSelector } from 'hooks/redux'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useRef, useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { getUser } from 'state/user/selectors'
import { openEmail } from 'utils/helpers'
import { lang } from 'utils/lang'

import stylesConfig from './MyProfileScreen.style'

const T = R.lang.screen_myProfile

export const MyProfileScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)
  const [check, setCheck] = useState('')
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)
  const { user } = useAppSelector(getUser)

  const plus = () => {
    navigation.navigate(R.routes.SCREEN_IMPORT_CHATS)
    setCheck('plus')
  }

  const write = () => {
    setCheck('write')
    navigation.navigate(R.routes.SCREEN_CREATE_PROFILE)
  }
  const setting = () => {
    setCheck('setting')
    navigation.navigate(R.routes.RATES_SCREEN)
  }
  const alert = async () => {
    await setCheck('alert')
    navigation.navigate(R.routes.SCREEN_CREATE_PROFILE)
  }
  const menuBar = () => {
    bottomsheetRef2.current?.present()
  }

  const onNotification = () => {
    navigation.navigate(R.routes.SCREEN_NOTIFICATIONS)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <View style={styles.head}>
        <View style={styles.header}>
          <Image
            source={require('./../../assets/images/avatar.png')}
            style={styles.img}
          />
        </View>
        <Typo.Title type="regular18" style={styles.text}>
          {user?.phone || ''}
        </Typo.Title>

        <TouchableOpacity style={styles.icon} onPress={menuBar}>
          <R.icons.HamburgerIcon />
          <BottomSheet snapPoints={['50%']} ref={bottomsheetRef2}>
            <Menu />
          </BottomSheet>
        </TouchableOpacity>
      </View>

      <View style={styles.hr} />

      <View style={styles.profileCard}>
        <Typo.Headline type="bold28">{lang(`${T}.label`)}</Typo.Headline>
        <TouchableOpacity onPress={onNotification}>
          <R.icons.ProfileBellIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          style={[
            styles.boxCard,
            check === 'plus'
              ? { borderColor: R.colors.main }
              : { borderColor: R.colors.grey },
          ]}
          onPress={plus}
          activeOpacity={0.4}>
          <R.icons.PlusIcon
            color={check === 'plus' ? R.colors.main : R.colors.grey}
          />
          <Typo.Body type="regular16" style={styles.title}>
            {lang(`${T}.title`)}
          </Typo.Body>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.boxcard,
            check === 'setting'
              ? { borderColor: R.colors.main }
              : { borderColor: R.colors.grey },
          ]}
          activeOpacity={0.4}
          onPress={setting}>
          <R.icons.SettingIcon
            color={check === 'setting' ? R.colors.main : R.colors.grey}
          />
          <Typo.Body type="regular16" style={styles.title}>
            {lang(`${T}.subTitle`)}
          </Typo.Body>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          style={[
            styles.boxCard,
            check === 'write'
              ? { borderColor: R.colors.main }
              : { borderColor: R.colors.grey },
          ]}
          activeOpacity={0.4}
          onPress={write}>
          <R.icons.WriteIcon
            color={check === 'write' ? R.colors.main : R.colors.grey}
          />
          <Typo.Body type="regular16" style={styles.title}>
            {lang(`${T}.text`)}
          </Typo.Body>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.boxCard,
            check === 'alert'
              ? { borderColor: R.colors.main }
              : { borderColor: R.colors.grey },
          ]}
          activeOpacity={0.4}
          onPress={alert}>
          <R.icons.AlertIcon
            color={check === 'alert' ? R.colors.main : R.colors.grey}
          />
          <Typo.Body type="regular16" style={styles.title}>
            {lang(`${T}.subText`)}
          </Typo.Body>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={openEmail('test@gmail.com')}>
        <Text style={styles.mail}>{lang(`${T}.email`)}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
