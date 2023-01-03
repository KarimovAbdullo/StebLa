import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Typo from 'components/typo'
// import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native'
import R from 'res'

import stylesConfig from './MyProfileScreen.style'

export const MyProfileScreen = () => {
  //   const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)
  const [check, setCheck] = useState('')

  const plus = () => {
    setCheck('plus')
  }
  const write = () => {
    setCheck('write')
  }
  const setting = () => {
    setCheck('setting')
  }
  const alert = () => {
    setCheck('alert')
  }

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.background} />

      <View style={styles.head}>
        <View style={styles.header}>
          <Image
            source={require('./../../assets/images/ell.png')}
            style={styles.img}
          />
        </View>
        <Typo.Title type="regular18" style={styles.text}>
          Никнейм пользователя
        </Typo.Title>

        <View>
          <R.icons.HamburgerIcon />
        </View>
      </View>

      <View style={styles.hr} />

      <View style={styles.profileCard}>
        <Typo.Headline type="bold28">Мой профиль</Typo.Headline>
        <TouchableOpacity>
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
            Добавить
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
            Перейти к управлению
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
            Изменить
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
            Продлить
          </Typo.Body>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
