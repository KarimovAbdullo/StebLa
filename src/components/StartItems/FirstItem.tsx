import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import R from 'res'

const FirstItem = () => {
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // position: 'absolute',
    marginTop: '150@vs',
  },
  logoCard: {
    alignItems: 'center',

    paddingTop: '30@vs',
  },
  logoTitle: {
    alignItems: 'center',
    marginTop: '26@vs',
    justifyContent: 'center',
    borderWidth: 1,
  },
  text: {
    paddingHorizontal: '52@s',
    marginTop: '27@vs',
  },
  btn: {
    width: '280@s',
  },
  line: {
    marginVertical: '50@vs',
    backgroundColor: 'grey',
    width: '98@s',
    borderWidth: 1,
    borderColor: '#F7F8F8',
    alignSelf: 'center',
  },
})

export default FirstItem
