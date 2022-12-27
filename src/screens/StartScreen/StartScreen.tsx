import Container from 'components/Container'
import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import R from 'res'

// import R from 'res'
import stylesConfig from './StartScreen.style'

const StartScreen = () => {
  const styles = useStyles(stylesConfig)

  return (
    <SafeAreaView>
      <Container>
        <View style={styles.main}>
          <R.icons.LogoIcon />
          <View style={styles.logo}>
            <R.icons.LogoTitle />
          </View>

          <Typo.Title type="regular19" color="black" style={styles.re}>
            Получайте только важную информацию{' '}
          </Typo.Title>
        </View>
      </Container>
    </SafeAreaView>
  )
}

export default StartScreen
