import OTPInputView from '@twotalltotems/react-native-otp-input'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import R from 'res'
import { lang } from 'utils/lang'

import stylesConfig from './AddTelegramCodeScreen.style'

const T = R.lang.screen_addCode

export const AddTelegramCodeScreen = () => {
  const styles = useStyles(stylesConfig)
  const [code, setCode] = React.useState('')
  const [countdown, setCountdown] = React.useState(3)
  const navigation = useSmartNavigation()

  const goHome = () => {
    //@ts-ignore
    navigation.navigate(R.routes.MY_PROFILE_SCREEN)
  }

  console.log(code)

  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
    }
  }, [countdown])

  const onSubmit = () => {}

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.iconContent}>
          <R.icons.PhoneIcon />

          <Typo.TextButton color="iconPrimary">
            + 7 987 789 456 21
          </Typo.TextButton>
          <R.icons.PensilIcon />
        </View>

        <Typo.Title type="regular28" center={true} style={styles.textContent}>
          {lang(`${T}.titleTop`)}
        </Typo.Title>

        <View style={styles.titleContent}>
          <Typo.TextButton type="regular16" center={true}>
            {lang(`${T}.label`)}
          </Typo.TextButton>
        </View>

        <OTPInputView
          // @ts-ignore
          style={styles.otpContent}
          pinCount={4}
          onCodeChanged={setCode}
          autoFocusOnLoad
          // @ts-ignore
          codeInputFieldStyle={{ ...styles.active }}
          // @ts-ignore
          codeInputHighlightStyle={{ ...styles.active }}
          onCodeFilled={onSubmit}
        />

        <View style={styles.buttonContent}>
          <CustomButton
            text={lang(`${T}.button`)}
            style={styles.button}
            onPress={goHome}
            disabled={code.length > 3 ? false : true}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}
