import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { View } from 'react-native'

import stylesConfig from './OtpScreen.styles'

export const OtpScreen = () => {
  const styles = useStyles(stylesConfig)

  return (
    <View style={styles.container}>
      <Typo.Body>jjhjhjj</Typo.Body>
    </View>
  )
}
