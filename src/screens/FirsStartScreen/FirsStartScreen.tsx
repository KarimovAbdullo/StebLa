import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, View } from 'react-native'
import R from 'res'

import styleConfig from './FirsStartScreen.style'

const FirsStartScreen = () => {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()

  const goStart = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_START)
  }
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={R.colors.white}
        barStyle={'dark-content'}
      />

      <Image
        source={require('./../../assets/images/logoB.png')}
        style={styles.img}
      />

      <Image
        source={require('./../../assets/images/loggo.png')}
        style={styles.image}
      />

      <View style={styles.text}>
        <Typo.Title type="regular18" center={true}>
          Получайте только важную информацию
        </Typo.Title>

        <View style={styles.line} />

        <View>
          <CustomButton
            text={'Ознакомиться с сервисом'}
            style={styles.btn}
            onPress={goStart}
          />
        </View>
      </View>
    </View>
  )
}

export default FirsStartScreen
