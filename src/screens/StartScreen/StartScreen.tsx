import Container from 'components/Container'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Config from 'react-native-config'

// import R from 'res'
import stylesConfig from './StartScreen.style'

const StartScreen = () => {
  useStyles(stylesConfig)
  console.log(Config.SIZE_MATTERS_BASE_WIDTH)

  return (
    <SafeAreaView>
      <Container>
        <View>
          <Text style={{ color: 'black' }}>Start screen sfdsdfsfdsf</Text>
          {/* <R.icons.LogoIcon /> */}
        </View>
      </Container>
    </SafeAreaView>
  )
}

export default StartScreen
