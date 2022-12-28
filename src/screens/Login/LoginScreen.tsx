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
import { onlyNumber, required, validator } from 'utils/validators'

import stylesConfig from './LoginScreen.styles'

export const LoginScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)

  const onSubmit = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_OTP)
  }

  const initialValues: ILogin = {
    phone: '+7',
  }

  return (
    <View style={styles.container}>
      <Typo.Headline>Вход</Typo.Headline>

      <Typo.TextButton type="regular16" color="textPrimary" style={styles.text}>
        Введите номер телефона.
      </Typo.TextButton>

      <Typo.TextButton type="regular16" color="textPrimary">
        Вам поступит звонок. Нужно будет ввести последние четыре цифры входящего
        номера
      </Typo.TextButton>

      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {() => (
          <>
            <View style={styles.inputContent}>
              <LoginInput
                label="+"
                validate={validator(required, onlyNumber)}
                name="phone"
                placeholder="+ _ (_ _ _) _ _ _ _ _ _ _ _"
                placeholderTextColor={R.colors.textPrimary}
                secureTextEntry={false}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.buttonContent}>
              <LoginButton text={'Получить звонок'} style={styles.button} />
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}
