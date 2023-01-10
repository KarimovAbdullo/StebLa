import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { FormInput } from 'components/FormInput/FormInput'
import { LoginButton } from 'components/LoginButton/LoginButtton'
import Typo from 'components/typo'
import { Formik } from 'formik'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from 'res'
import { IForm } from 'types/data'
import { requir, validator } from 'utils/validators'

import stylesConfig from './Form.style'

export const FormScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)

  const onSubmit = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_OTP)
  }

  const back = () => {
    // @ts-ignore
    navigation.goBack()
  }

  const initialValues: IForm = {
    firsName: '',
    secondName: '',
    thirdNmae: '',
    fourthName: '',
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <TouchableOpacity style={styles.head} onPress={back}>
        <R.icons.BackIcon />

        <Typo.Title type="regular18" color="textTertiary">
          Назад
        </Typo.Title>
      </TouchableOpacity>

      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {() => (
          <>
            <View style={styles.inputContent}>
              <View style={styles.inp}>
                <FormInput
                  label="+"
                  validate={validator(requir)}
                  name="firsName"
                  placeholder="_"
                  placeholderTextColor={R.colors.grey}
                  secureTextEntry={false}
                  keyboardType="default"
                  maxLength={12}
                />
              </View>

              <View style={styles.inp}>
                <FormInput
                  label="+"
                  validate={validator(requir)}
                  name="secondName"
                  placeholder="_"
                  placeholderTextColor={R.colors.grey}
                  secureTextEntry={false}
                  keyboardType="default"
                  maxLength={12}
                />
              </View>

              <View style={styles.inp}>
                <FormInput
                  label="+"
                  validate={validator(requir)}
                  name="thirdNmae"
                  placeholder="_"
                  placeholderTextColor={R.colors.grey}
                  secureTextEntry={false}
                  keyboardType="default"
                  maxLength={12}
                />
              </View>

              <View style={styles.inp}>
                <FormInput
                  label="+"
                  validate={validator(requir)}
                  name="fourthName"
                  placeholder="_"
                  placeholderTextColor={R.colors.grey}
                  secureTextEntry={false}
                  keyboardType="default"
                  maxLength={12}
                />
              </View>
            </View>

            <View style={styles.buttonContent}>
              <LoginButton text={'Сохранить'} style={styles.button} />
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}
