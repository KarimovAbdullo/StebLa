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
import { IUserListForm } from 'types/data'
import { IListUserInfo } from 'types/data'
import { lang } from 'utils/lang'
import { requir, validator } from 'utils/validators'

const T = R.lang.screen_userListFrom

import stylesConfig from './UserListForm.styles'

interface IProps {
  route: {
    params: {
      item: IListUserInfo
    }
  }
}

export const UserListForm = ({ route }: IProps) => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)
  const { item } = route.params
  const [newTitle, setNewTitle] = React.useState('')

  console.log(item)

  const onSubmit = () => {}

  const back = () => {
    // @ts-ignore
    navigation.goBack()
  }

  // const endInput = () => {
  //   const newData = state.map(i =>
  //     i.id === item.id ? { ...i, text: newTitle } : i,
  //   )
  //   setState(newData)
  // }

  const initialValues: IUserListForm = {
    firsName: item.text,
    secondName: item.subTitle,
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <TouchableOpacity style={styles.head} onPress={back}>
        <R.icons.BackIcon />

        <Typo.Title type="regular18" color="textTertiary">
          {lang(`${T}.title`)}
        </Typo.Title>
      </TouchableOpacity>

      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {() => (
          <>
            <View style={styles.inputContent}>
              <View style={styles.inp}>
                <FormInput
                  label="Имя пользователя"
                  validate={validator(requir)}
                  name="firsName"
                  placeholder="_"
                  placeholderTextColor={R.colors.grey}
                  secureTextEntry={false}
                  keyboardType="default"
                  value={newTitle}
                  onChangeText={setNewTitle}
                />
                {/* <TextInput
                    defaultValue={item.text}
                    style={styles.tt}
                    autoFocus={true}
                    onEndEditing={endInput}
                    onChangeText={setNewText}
                    value={newText} */}
                {/* /> */}
              </View>

              <View style={styles.inp}>
                <FormInput
                  label="Номер пользователя"
                  validate={validator(requir)}
                  name="secondName"
                  placeholder="_"
                  placeholderTextColor={R.colors.grey}
                  secureTextEntry={false}
                  keyboardType="numeric"
                />
              </View>
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
