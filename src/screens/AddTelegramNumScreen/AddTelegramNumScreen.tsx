import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { LoginButton } from 'components/LoginButton/LoginButtton'
import { LoginInput } from 'components/LoginInput/LoginInput'
import Typo from 'components/typo'
import { Formik } from 'formik'
import { useAppDispatch } from 'hooks/redux'
import { useAppSelector } from 'hooks/redux'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { View } from 'react-native'
import R from 'res'
import { addTelegram } from 'state/addTelegramAcaunt/action'
import { addTelegramSelector } from 'state/addTelegramAcaunt/selectors'
import { ITelegram } from 'types/data'
import { lang } from 'utils/lang'
import { required, validator } from 'utils/validators'

const T = R.lang.screen_addNumb

import stylesConfig from './AddTelegramNumScreen.style'

export const AddTelegramNumScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)
  const dispatch = useAppDispatch()
  const { loading } = useAppSelector(addTelegramSelector)
  const [error, setError] = React.useState('')

  const onSubmit = async (data: ITelegram) => {
    const response = await dispatch(
      addTelegram({
        data,
        onSuccess: () => {
          navigation.navigate(R.routes.SCREEN_ADD_TELEGRAM_CODE, {
            phone: data.phone,
          })
        },
        onError: e => {
          setError(e || 'Server error')
        },
      }),
    )

    return response
  }

  const initialValues: ITelegram = {
    phone: '',
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />
      <Typo.Headline center={true}> {lang(`${T}.text`)}</Typo.Headline>

      <Typo.TextButton
        center={true}
        type="regular16"
        color="textPrimary"
        style={styles.text}>
        {lang(`${T}.title`)}
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
                maxLength={18}
              />
            </View>
            {error ? (
              <Typo.TextButton color="red" style={styles.errorText}>
                {error || 'Server error'}
              </Typo.TextButton>
            ) : null}

            <View style={styles.buttonContent}>
              <LoginButton
                text={lang(`${T}.buttonText`)}
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
