import OTPInputView from '@twotalltotems/react-native-otp-input'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import moment from 'moment'
import React, { useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import R from 'res'
import { lang } from 'utils/lang'

import stylesConfig from './OtpScreen.styles'

const T = R.lang.screen_otp

export const OtpScreen = () => {
  const styles = useStyles(stylesConfig)
  const [code, setCode] = React.useState('')
  const [countdown, setCountdown] = React.useState(3)
  const navigation = useSmartNavigation()

  console.log(code)

  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
    }
  }, [countdown])

  const onSubmit = () => {}

  const goHomeScreen = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_HOME)
  }

  const goLogin = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_LOGIN)
  }

  return (
    <KeyboardAwareScrollView style={styles.contentItem}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <View style={styles.container}>
        <TouchableOpacity style={styles.iconContent} onPress={goLogin}>
          <R.icons.PhoneIcon />

          <Typo.TextButton color="iconPrimary">
            + 7 987 789 456 21
          </Typo.TextButton>
          <R.icons.PensilIcon />
        </TouchableOpacity>

        <Typo.Title type="regular28" style={styles.textContent}>
          {lang(`${T}.name`)}
        </Typo.Title>

        <View style={styles.titleContent}>
          <Typo.TextButton type="regular16">
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
          <TouchableOpacity style={styles.refreshContent}>
            <R.icons.LoadingIcon
              color={code.length > 3 ? R.colors.main : R.colors.iconPrimary}
            />

            <Typo.TextButton
              type="regular16"
              color={code.length > 3 ? 'main' : 'iconPrimary'}>
              {lang(`${T}.title`)}
            </Typo.TextButton>
          </TouchableOpacity>

          <CustomButton
            text={lang(`${T}.btn`)}
            style={styles.button}
            onPress={goHomeScreen}
            disabled={code.length > 3 ? false : true}
          />
        </View>

        <View style={styles.buttonContent}>
          <Typo.TextButton type="regular2" style={styles.buttonContainer}>
            {lang(`${T}.subTitle`)}
          </Typo.TextButton>

          <View style={styles.timerContent}>
            <Typo.TextButton color="black" center>
              {code.length > 3
                ? moment.utc(countdown * 100).format('mm:ss')
                : moment.utc(countdown * 100).format('01:ss')}
            </Typo.TextButton>
          </View>
        </View>

        <TouchableOpacity>
          <Typo.TextButton center color="iconPrimary" style={styles.bottomText}>
            {lang(`${T}.text`)}
          </Typo.TextButton>
          <Typo.TextButton color="main" center>
            {lang(`${T}.subText`)}
          </Typo.TextButton>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
}
