import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'

const T = R.lang.screen_addTelegInfo

import stylesConfig from './AddTelegrammInfoScreen.styles'

export const AddTelegrammInfoScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)

  const onSubmit = () => {
    navigation.navigate(R.routes.SCREEN_ADD_TELEGRAM_NUM)
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />
      <View style={styles.card}>
        <Typo.Headline center={true} type="reg20">
          {lang(`${T}.label`)}
        </Typo.Headline>
      </View>

      <CustomButton text={lang(`${T}.btnTitle`)} onPress={onSubmit} />
    </View>
  )
}
