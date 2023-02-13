import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
// import { YooKassa } from 'components/YookoKassa/YookoKassa'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from 'res'
// import {
//   confirmPayment,
//   dismiss,
//   ErrorCodesEnum, // TypeScript Only
//   tokenize,
//   YooKassaError,
// } from 'rn-yookassa'
import { postPayment } from 'state/payment/action'
import { getPrice } from 'state/user/actions'
import { getUser } from 'state/user/selectors'
import { lang } from 'utils/lang'

import styleConfig from './CreateProfileScreen.style'

const T = R.lang.screen_createProfile

const CreateProfileScreen = () => {
  const dispatch = useAppDispatch()
  const styles = useStyles(styleConfig)
  const [check, setCheck] = useState('')
  const navigation = useSmartNavigation()
  const { price } = useAppSelector(getUser)

  useEffect(() => {
    dispatch(getPrice())
  }, [])

  console.log('prise', price)

  const userId = useAppSelector(state => state.user.user?.id)

  // const onPayPress = async () => {
  //   try {
  //     // Our next code will be here.
  //   } catch (err) {
  //     // Process errors from YooKassa module:
  //     if (err instanceof YooKassaError) {
  //       switch (err.code) {
  //         case ErrorCodesEnum.E_PAYMENT_CANCELLED:
  //           console.log('User cancelled YooKassa module.')
  //           break
  //       }
  //     }
  //   }
  // }

  const freeBtn = () => {
    setCheck('standart')
  }

  const proBtn = () => {
    setCheck('pro')
  }

  const goTelegram = async () => {
    //@ts-ignore
    // navigation.navigate(R.routes.SCREEN_ADD_TELEGRAM_INFO)

    if (userId) {
      dispatch(
        postPayment({
          userId: userId,
          price: 200,
          onSucces: () => {
            //@ts-ignore
            navigation.navigate(R.routes.SCREEN_ADD_TELEGRAM_INFO)
          },
        }),
      )
    }
  }

  return (
    <Container>
      <FocusAwareStatusBar
        backgroundColor={R.colors.white}
        barStyle={'dark-content'}
      />
      <View style={styles.main}>
        <Typo.Title type="reg28" center={true} style={styles.text}>
          {lang(`${T}.name`)}
        </Typo.Title>

        <Typo.Title type="regular18" color="main" center={true}>
          {lang(`${T}.label`)}
        </Typo.Title>

        <TouchableOpacity
          onPress={freeBtn}
          style={[
            styles.freeCard,
            check === 'standart'
              ? { borderColor: R.colors.main }
              : { borderColor: R.colors.title },
          ]}>
          <Typo.Title type="regular21" style={styles.title}>
            {lang(`${T}.title`)}
          </Typo.Title>
          <Typo.Title type="regular16" color="title">
            {lang(`${T}.subTitle`)}
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={proBtn}
          style={[
            styles.ProCard,
            check === 'pro'
              ? { borderColor: R.colors.main }
              : { borderColor: R.colors.title },
          ]}>
          <View style={styles.iconCard}>
            <R.icons.StarIcon color={check === 'pro' ? '#2BB0AD' : '#B3C2CB'} />
          </View>

          <Typo.Title type="regular21" style={styles.title}>
            {lang(`${T}.text`)}
          </Typo.Title>

          <Typo.Title type="regular16" color="title">
            {lang(`${T}.subText`)}
          </Typo.Title>
        </TouchableOpacity>

        <CustomButton
          text={lang(`${T}.BtnTitle`)}
          disabled={!check}
          style={styles.btn}
          onPress={goTelegram}
        />
      </View>
      {/* <YooKassa /> */}
    </Container>
  )
}

export default CreateProfileScreen
