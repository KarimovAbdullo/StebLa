import OTPInputView from '@twotalltotems/react-native-otp-input'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import moment from 'moment'
import React, { useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import R from 'res'

import stylesConfig from './OtpScreen.styles'

export const OtpScreen = () => {
  const styles = useStyles(stylesConfig)
  const [code, setCode] = React.useState('')
  const [countdown, setCountdown] = React.useState(3)

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
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.iconContent}>
          <R.icons.PhoneIcon />

          <Typo.TextButton color="iconPrimary">
            + 7 987 789 456 21
          </Typo.TextButton>
          <R.icons.PensilIcon />
        </View>

        <Typo.Title type="regular28" style={styles.textContent}>
          Вход
        </Typo.Title>

        <View style={styles.titleContent}>
          <Typo.TextButton type="regular16">
            Введите последние 4 цифры входящего номера
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
            <R.icons.LoadingIcon />

            <Typo.TextButton type="regular16" color="iconPrimary">
              Получить повторно
            </Typo.TextButton>
          </TouchableOpacity>

          <CustomButton text={'Далее'} style={styles.button} />
        </View>

        <View style={styles.buttonContent}>
          <Typo.TextButton type="regular2" style={styles.buttonContainer}>
            Возможность повторного звонка будет доступна через
          </Typo.TextButton>

          <View style={styles.timerContent}>
            <Typo.TextButton color="black" center>
              {moment.utc(countdown * 100).format('mm:ss')}
            </Typo.TextButton>
          </View>
        </View>

        <TouchableOpacity>
          <Typo.TextButton center color="iconPrimary" style={styles.bottomText}>
            Не приходит звонок?
          </Typo.TextButton>
          <Typo.TextButton color="main" center>
            Заказать SMS сообщение
          </Typo.TextButton>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
}
