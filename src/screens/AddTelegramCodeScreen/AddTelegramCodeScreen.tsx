import OTPInputView from '@twotalltotems/react-native-otp-input'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useAppDispatch } from 'hooks/redux'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import R from 'res'
import { verifyTelegram } from 'state/addTelegramAcaunt/action'
import { lang } from 'utils/lang'

import stylesConfig from './AddTelegramCodeScreen.style'

const T = R.lang.screen_addCode

interface IProps {
  route: {
    params: {
      phone: string
    }
  }
}
export const AddTelegramCodeScreen: React.FC<IProps> = ({ route }) => {
  const styles = useStyles(stylesConfig)
  const [code, setCode] = React.useState('')
  const [countdown, setCountdown] = React.useState(3)
  const navigation = useSmartNavigation()
  const { phone } = route.params || {}
  const dispatch = useAppDispatch()

  const goHome = () => {
    navigation.navigate(R.routes.screen_REGISTERED_TELEGRAMM_INFO)
  }

  const goNum = () => {
    navigation.navigate(R.routes.SCREEN_ADD_TELEGRAM_NUM)
  }

  console.log(code)

  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
    }
  }, [countdown])

  const onSubmit = (value?: string) => {
    dispatch(
      verifyTelegram({
        data: { code: value ? value : code, credential: phone },
        onSuccess: response => {
          response.code
            ? navigation.navigate(R.routes.SCREEN_IMPORT_CHATS)
            : navigation.navigate(R.routes.SCREEN_IMPORT_CHATS)
        },
      }),
    )
  }

  return (
    <KeyboardAwareScrollView style={styles.itemContent}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconContent} onPress={goNum}>
          <R.icons.PhoneIcon />

          <Typo.TextButton color="iconPrimary">
            + 7 987 789 456 21
          </Typo.TextButton>
          <R.icons.PensilIcon />
        </TouchableOpacity>

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
          pinCount={6}
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
            disabled={code.length > 5 ? false : true}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}
