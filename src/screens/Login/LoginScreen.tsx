import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { LoginButton } from 'components/LoginButton/LoginButtton'
import { LoginInput } from 'components/LoginInput/LoginInput'
import Typo from 'components/typo'
import { Formik } from 'formik'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { View } from 'react-native'
import R from 'res'
import { sendConfirmCode } from 'state/user/actions'
import { getUser } from 'state/user/selectors'
import { ISendCode } from 'types/data'
import { lang } from 'utils/lang'
import { LoginRequired, validator } from 'utils/validators'

const T = R.lang.screen_login

import stylesConfig from './LoginScreen.styles'

export const LoginScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)
  const dispatch = useAppDispatch()
  const { loading } = useAppSelector(getUser)

  const onSubmit = async (data: ISendCode) => {
    dispatch(
      sendConfirmCode({
        data,
        onSuccess: () => {
          navigation.navigate(R.routes.SCREEN_OTP, { phone: data.phone })
        },
      }),
    )
  }
  const initialValues: ISendCode = {
    phone: '',
    use_call: false,
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />
      <Typo.Headline>{lang(`${T}.title`)}</Typo.Headline>

      <Typo.TextButton type="regular16" color="textPrimary" style={styles.text}>
        {lang(`${T}.topTitle`)}
      </Typo.TextButton>

      <Typo.TextButton type="regular16" color="textPrimary">
        {lang(`${T}.midTitle`)}
      </Typo.TextButton>

      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {() => (
          <>
            <View style={styles.inputContent}>
              <LoginInput
                label="+"
                validate={validator(LoginRequired)}
                name="phone"
                placeholder="+ _ (_ _ _) _ _ _ _ _ _ _ _"
                placeholderTextColor={R.colors.textPrimary}
                secureTextEntry={false}
                keyboardType="numeric"
                maxLength={15}
              />
            </View>

            <View style={styles.buttonContent}>
              <LoginButton
                text={lang(`${T}.BtnTitle`)}
                style={styles.button}
                loading={loading}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}
