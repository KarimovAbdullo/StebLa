import Container from 'components/Container'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, View } from 'react-native'

import stylesConfig from './LoginScreen.styles'

export const LoginScreen = () => {
  const styles = useStyles(stylesConfig)

  return (
    <Container>
      <View style={styles.itemsContent}>
        <Text>dfdfd</Text>
      </View>
    </Container>
  )
}
