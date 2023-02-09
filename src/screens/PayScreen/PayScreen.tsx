import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import { LoginButton } from 'components/LoginButton/LoginButtton'
import { LoginInput } from 'components/LoginInput/LoginInput'
import Menu from 'components/Menu/Menu'
import Typo from 'components/typo'
import { Formik } from 'formik'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { ISendCode } from 'types/data'
import { LoginRequired, validator } from 'utils/validators'

import styleConfig from './PayScreen.style'

export const PayScreen = () => {
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)
  const styles = useStyles(styleConfig)
  const [check, setCheck] = useState('')
  const navigation = useSmartNavigation()

  const freeBtn = () => {
    setCheck('standart')
  }

  const proBtn = () => {
    setCheck('pro')
  }
  const menuBar = () => {
    bottomsheetRef2.current?.present()
  }
  const onSubmit = () => {}

  const goTelegram = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_ADD_TELEGRAM_INFO)
  }
  const initialValues: ISendCode = {
    phone: '',
    use_call: false,
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={R.colors.white}
        barStyle={'dark-content'}
      />

      <View style={styles.iconContent}>
        <Typo.Title type="regular18bold" color="textPrimary">
          Оплата
        </Typo.Title>
        <TouchableOpacity style={styles.icon} onPress={menuBar}>
          <R.icons.HamburgerIcon />
          <BottomSheet snapPoints={['50%']} ref={bottomsheetRef2}>
            <Menu />
          </BottomSheet>
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <Typo.Title type="regular15" color="textPrimary">
          Выберите удобный способ для оплатит VIP тарифа
        </Typo.Title>

        <TouchableOpacity
          onPress={freeBtn}
          style={[
            styles.freeCard,
            check === 'standart'
              ? { borderColor: R.colors.main }
              : { borderColor: R.colors.title },
          ]}>
          <Text style={styles.title}>ЮMoney</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={proBtn}
          style={[
            styles.ProCard,
            check === 'pro'
              ? { borderColor: R.colors.main }
              : { borderColor: R.colors.title },
          ]}>
          <Text>Банксковый карта </Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        text={'dasdadd'}
        disabled={!check}
        style={styles.btn}
        onPress={goTelegram}
      />

      <View style={styles.sector}>
        <Text>dasdasdad</Text>
      </View>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {() => (
          <>
            <View style={styles.inputContent}>
              <LoginInput
                label="+"
                validate={validator(LoginRequired)}
                name="phone"
                placeholder="_ _ _ _   _ _ _ _    _ _ _ _    _ _ _ _"
                placeholderTextColor={R.colors.textPrimary}
                secureTextEntry={false}
                keyboardType="numeric"
                maxLength={15}
              />
            </View>

            <View>
              <LoginButton
                text={'dsadasd'}
                style={styles.button}
                // loading={loading}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}

// import { BottomSheetModal } from '@gorhom/bottom-sheet'
// import BottomSheet from 'components/BottomSheet'
// import CheckBox from 'components/CheckBox/CheckBox'
// import { CustomButton } from 'components/CustomButton/CustomButton'
// import Menu from 'components/Menu/Menu'
// import { useStyles } from 'hooks/useStyles'
// import React, { useRef, useState } from 'react'
// import { Text, View } from 'react-native'
// import { TouchableOpacity } from 'react-native'
// import R from 'res'

// import styleConfig from './PayScreen.style'

// export const PayScreen = () => {
//   const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)
//   const [mood, setMood] = useState('')

//   const styles = useStyles(styleConfig)

//   const data = [
//     {
//       title: 'Юмоней',
//       id: '1',
//     },

//     {
//       title: 'Банковской картой',
//       id: '2',
//     },
//   ]
//   return (
//     <View style={styles.container}>
//       <View style={styles.iconContent}>
//         <View style={styles.item} />
//         <Text>Платеж</Text>

//         <TouchableOpacity>
//           <R.icons.HamburgerIcon />
//           <BottomSheet snapPoints={['50%']} ref={bottomsheetRef2}>
//             <Menu />
//           </BottomSheet>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.main}>
//         <Text>
//           Выберите удобный способ получения вознаграждения гарантийного счёта:
//         </Text>

//         <Text style={styles.price}>5 евро</Text>
//         <View style={styles.checkBoxContent}>
//           {data.map(item => (
//             <CheckBox
//               key={item.id}
//               text={item.title}
//               onPress={() => setMood(item.title)}
//               checkStyle={mood === item.title ? styles.check : {}}
//               boxStyle={mood === item.title ? styles.checkBox : {}}
//             />
//           ))}
//         </View>
//         <View style={styles.btnCard} />
//       </View>
//       <View style={styles.btn}>
//         <CustomButton text={'gooooo'} />
//       </View>
//     </View>
//   )
// }
