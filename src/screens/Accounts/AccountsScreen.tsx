import { BottomSheetModal } from '@gorhom/bottom-sheet'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import BottomSheet from 'components/BottomSheet'
import ButtonInline from 'components/ButtonInline'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { LoginButton } from 'components/LoginButton/LoginButtton'
import { LoginInput } from 'components/LoginInput/LoginInput'
import TelegramItem from 'components/TelegramItem'
import Typo from 'components/typo'
import WhastAppItem from 'components/WhastAppItem'
import { Formik } from 'formik'
import { useStyles } from 'hooks/useStyles'
import React, { useRef, useState } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import R from 'res'
import { ITelegramData, IWhastAppData } from 'types/data'
import { IAddAcountInfo } from 'types/data'
import { required, validator } from 'utils/validators'

import stylesConfig from './AccountsScreen.styles'

export const AccountsScreen = () => {
  const styles = useStyles(stylesConfig)

  const [activeButton, setActiveButton] = React.useState(false)
  const [activeList, setActiveList] = useState<string[]>([])
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)
  const [code, setCode] = React.useState('')

  console.log(code)

  const [dataTelegram] = React.useState<ITelegramData[]>([
    {
      title: 'Аккаунт Телеграмм 1',
      id: '1',
    },
    {
      title: 'Аккаунт Телеграмм 2',
      id: '2',
    },
    {
      title: 'Аккаунт Телеграмм 3',
      id: '3',
    },
  ])

  const [dataWhatsApp] = React.useState<IWhastAppData[]>([
    {
      title: 'Аккаунт Whatsapp 1',
      id: '1',
    },
    {
      title: 'Аккаунт Whatsapp 2',
      id: '2',
    },
    {
      title: 'Аккаунт Whatsapp 3',
      id: '3',
    },
  ])

  const activeButtons = () => {
    setActiveButton(false)
    setTimeout(() => {
      setActiveButton(true)
    }, 100)
    bottomsheetRef2.current?.present()
  }

  const onSubmit = () => {}

  const initialValues: IAddAcountInfo = {
    phone: '',
    code: '',
  }

  return (
    <ScrollView style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <View style={styles.iconContent}>
        <R.icons.BackIcon />

        <Typo.Title type="regular18bold">Аккаунты</Typo.Title>

        <R.icons.PlusCardIcon />
      </View>

      <FlatList
        data={dataTelegram}
        ListHeaderComponentStyle={styles.headerList}
        ListHeaderComponent={
          <Typo.Title center type="regular016" color="iconPrimary">
            Телеграм
          </Typo.Title>
        }
        keyExtractor={(item, index) => item.id.toString() + index}
        renderItem={({ item }) => (
          <TelegramItem
            item={item}
            activeList={activeList}
            setActiveList={setActiveList}
          />
        )}
      />

      <FlatList
        data={dataWhatsApp}
        ListHeaderComponentStyle={styles.headerList}
        ListHeaderComponent={
          <Typo.Title center type="regular016" color="iconPrimary">
            Whatsapp
          </Typo.Title>
        }
        keyExtractor={(item, index) => item.id.toString() + index}
        renderItem={({ item }) => (
          <WhastAppItem
            item={item}
            activeList={activeList}
            setActiveList={setActiveList}
          />
        )}
      />

      <View style={styles.buttonContainer}>
        <ButtonInline
          text={'Добавить аккаунт'}
          style={activeButton ? styles.buttonActive : {}}
          onPress={activeButtons}
          icon={<R.icons.PlusCardIcon />}
        />
      </View>

      <BottomSheet
        snapPoints={['58%']}
        ref={bottomsheetRef2}
        style={styles.bottomSheet}>
        <View>
          <Typo.Title center type="reg28">
            Добавление аккаунта
          </Typo.Title>

          <Formik onSubmit={onSubmit} initialValues={initialValues}>
            {() => (
              <>
                <View style={styles.inputContent}>
                  <LoginInput
                    label="+"
                    validate={validator(required)}
                    name="phone"
                    placeholder="+ _ (_ _ _) _ _ _ _ _ _ _ _"
                    placeholderTextColor={R.colors.main}
                    secureTextEntry={false}
                    keyboardType="numeric"
                    maxLength={12}
                  />
                </View>

                <OTPInputView
                  // @ts-ignore
                  style={styles.otpContent}
                  pinCount={4}
                  onCodeChanged={setCode}
                  autoFocusOnLoad
                  // @ts-ignore
                  codeInputFieldStyle={{ ...styles.noActive }}
                  // @ts-ignore
                  codeInputHighlightStyle={{ ...styles.active }}
                  onCodeFilled={onSubmit}
                />

                <View style={styles.buttonContent}>
                  <LoginButton text={'Выслать код'} style={styles.button} />
                </View>
              </>
            )}
          </Formik>
        </View>
      </BottomSheet>
    </ScrollView>
  )
}