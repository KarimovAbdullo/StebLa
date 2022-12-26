import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, View } from 'react-native'
import Config from 'react-native-config'

import stylesConfig from './HomeScreen.styles'

const HomeScreen = () => {
  useStyles(stylesConfig)
  console.log(Config.SIZE_MATTERS_BASE_WIDTH)

  return (
    <View>
      <Text>Home screen</Text>
    </View>
  )
}

export default HomeScreen
