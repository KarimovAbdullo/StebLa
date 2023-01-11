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

const T = R.lang.screen_addNumb

import stylesConfig from './AddTelegramNumScreen.style'

export const AddTelegramNumScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)

  // const [check, setCheck] = useState(false)

  const onSubmit = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_ADD_TELEGRAM_CODE)
  }

  const initialValues: ILogin = {
    phone: '',
  }

  //      {lang(`${T}.`)}

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
                maxLength={12}
              />
            </View>

            <View style={styles.buttonContent}>
              <LoginButton
                text={lang(`${T}.buttonText`)}
                style={styles.button}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}
