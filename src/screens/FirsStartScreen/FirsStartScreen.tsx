import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useRef } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { changeLanguage } from 'state/user/actions'
import { getUser } from 'state/user/selectors'
import { lang } from 'utils/lang'

import styleConfig from './FirsStartScreen.style'

const T = R.lang.screen_firsStart

const FirsStartScreen = () => {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const bottomsheetRef = useRef<BottomSheetModal | null>(null)
  const dispatch = useAppDispatch()
  const { language } = useAppSelector(getUser)

  const goStart = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_START)
  }

  const onPress = () => {
    bottomsheetRef.current?.present()
  }

  // I18n.
  const onChangeLanguage = (langProps: 'ru' | 'en') => () => {
    dispatch(changeLanguage(langProps || language))
    bottomsheetRef.current?.close()
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={R.colors.white}
        barStyle={'dark-content'}
      />

      <TouchableOpacity style={styles.changeLangContent} onPress={onPress}>
        <Typo.TextButton color="main">{lang(`${T}.label`)}</Typo.TextButton>
      </TouchableOpacity>

      <Image
        source={require('./../../assets/images/logoB.png')}
        style={styles.img}
      />

      <Image
        source={require('./../../assets/images/loggo.png')}
        style={styles.image}
      />

      <View style={styles.text}>
        <Typo.Title type="regular18" center={true}>
          {lang(`${T}.title`)}
        </Typo.Title>

        <View style={styles.line} />

        <View>
          <CustomButton
            text={lang(`${T}.btn`)}
            style={styles.btn}
            onPress={goStart}
          />
        </View>
      </View>

      <BottomSheet snapPoints={['20%']} ref={bottomsheetRef}>
        <>
          <View style={styles.contentButtons}>
            <CustomButton
              text={lang(`${T}.btnSheet1`)}
              style={styles.buttonShet}
              onPress={onChangeLanguage('ru')}
            />

            <CustomButton
              text={lang(`${T}.btnSheet2`)}
              style={styles.buttonShet}
              onPress={onChangeLanguage('en')}
            />
          </View>
        </>
      </BottomSheet>
    </View>
  )
}

export default FirsStartScreen
