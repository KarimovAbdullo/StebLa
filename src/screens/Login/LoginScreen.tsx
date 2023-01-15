import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { LoginButton } from 'components/LoginButton/LoginButtton'
import { LoginInput } from 'components/LoginInput/LoginInput'
import Typo from 'components/typo'
import { Formik } from 'formik'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { View } from 'react-native'
import R from 'res'
import { ILogin } from 'types/data'
import { lang } from 'utils/lang'
import { required, validator } from 'utils/validators'

const T = R.lang.screen_login

import stylesConfig from './LoginScreen.styles'

export const LoginScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)

  const onSubmit = () => {
    navigation.navigate(R.routes.SCREEN_OTP)
  }

  const initialValues: ILogin = {
    phone: '',
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
                validate={validator(required)}
                name="phone"
                placeholder="+ _ (_ _ _) _ _ _ _ _ _ _ _"
                placeholderTextColor={R.colors.textPrimary}
                secureTextEntry={false}
                keyboardType="numeric"
                maxLength={15}
              />
            </View>

            <View style={styles.buttonContent}>
              <LoginButton text={lang(`${T}.BtnTitle`)} style={styles.button} />
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}
