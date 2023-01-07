import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Typo from 'components/typo'
// import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { View } from 'react-native'
import R from 'res'

import stylesConfig from './RatesScreen.style'

export const RatesScreen = () => {
  const styles = useStyles(stylesConfig)

  //   const navigate = useSmartNavigation()

  //   const onLongPress = () => {
  //     // @ts-ignore
  //     setActiveButton(!activeButton)
  //   }

  return (
    <View style={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />
      <View style={styles.container}>
        <View style={styles.iconContent}>
          <View style={styles.item} />
          <Typo.Title type="regular18bold">Тарифы</Typo.Title>

          <R.icons.HamburgerIcon />
        </View>
      </View>

      <View style={styles.labelCard}>
        <View style={styles.text}>
          <Typo.Body type="user18">Вы подключены на</Typo.Body>
          <Typo.Title type="regular021" color="main">
            Бесплатный тариф
          </Typo.Title>
        </View>
      </View>
    </View>
  )
}
