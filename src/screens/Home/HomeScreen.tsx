import Container from 'components/Container'
import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { StatusBar, View } from 'react-native'
import Config from 'react-native-config'
import R from 'res'

import stylesConfig from './HomeScreen.styles'

const HomeScreen = () => {
  const styles = useStyles(stylesConfig)
  console.log(Config.SIZE_MATTERS_BASE_WIDTH)

  return (
    <View>
      <StatusBar backgroundColor={'rgba(52, 52, 52, 0.78)'} />
      <View style={styles.topCard} />

      <Container>
        <View style={styles.bottomCard}>
          <R.icons.PlusIcon />
          <Typo.Title type="regular18" color="main" style={styles.text}>
            Создать новое правило
          </Typo.Title>
        </View>
      </Container>
      <View style={styles.line} />

      <Container>
        <View style={styles.menu}>
          <R.icons.PlusIcon />
          <Typo.Title type="regular18" color="main" style={styles.text}>
            Создать новое правило
          </Typo.Title>
        </View>

        <View style={styles.menu}>
          <R.icons.PlusIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Создать новое правило
          </Typo.Title>
        </View>

        <View style={styles.menu}>
          <R.icons.PlusIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Создать новое правило
          </Typo.Title>
        </View>

        <View style={styles.menu}>
          <R.icons.PlusIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Создать новое правило
          </Typo.Title>
        </View>

        <View style={styles.menu}>
          <R.icons.PlusIcon />
          <Typo.Title type="regular18" color="textPrimary" style={styles.text}>
            Создать новое правило
          </Typo.Title>
        </View>
      </Container>
    </View>
  )
}

export default HomeScreen
