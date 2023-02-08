import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'

const T = R.lang.screen_startInfo

import stylesConfig from './StartInfoScreen.styles'

export const StartInfoScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)

  const onSubmit = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_LOGIN)
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <View style={styles.card}>
        <View style={{ flexDirection: 'column' }}>
          <Typo.Headline type="reg20" center={true}>
            {lang(`${T}.name`)}
          </Typo.Headline>
          <Typo.Headline center={true} type="reg20">
            {lang(`${T}.label`)}
          </Typo.Headline>
        </View>
      </View>

      <CustomButton text={lang(`${T}.btnTitle`)} onPress={onSubmit} />
    </View>
  )
}
