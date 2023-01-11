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
import { IListInfo } from 'types/data'
import { lang } from 'utils/lang'
import { requir, validator } from 'utils/validators'

import stylesConfig from './Form.style'

interface IProps {
  route: {
    params: {
      item: IListInfo
    }
  }
}

const T = R.lang

export const FormScreen = ({ route }: IProps) => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)
  const { item } = route.params
  console.log(item)

  const onSubmit = () => {
    // @ts-ignore
  }

  const back = () => {
    // @ts-ignore
    navigation.goBack()
  }

  const initialValues: IForm = {
    firsName: item.text,
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <TouchableOpacity style={styles.head} onPress={back}>
        <R.icons.BackIcon />

        <Typo.Title type="regular18" color="textTertiary">
          {lang(`${T}.name`)}
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
            </View>

            <View style={styles.buttonContent}>
              <LoginButton text={lang(`${T}.btnTitle`)} style={styles.button} />
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}
