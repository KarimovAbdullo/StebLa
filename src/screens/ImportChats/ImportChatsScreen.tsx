import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Menu from 'components/Menu/Menu'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useRef } from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'

import stylesConfig from './ImportChatsScreen.styles'

const T = R.lang.screen_importChats

export const ImportChatsScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)

  const menuBar = () => {
    bottomsheetRef2.current?.present()
  }

  const goChats = () => {
    navigation.navigate(R.routes.SCREEN_CHATS)
  }

  return (
    <View style={[styles.container]}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <TouchableOpacity style={styles.icon} onPress={menuBar}>
        <R.icons.HamburgerIcon />
        <BottomSheet snapPoints={['50%']} ref={bottomsheetRef2}>
          <Menu />
        </BottomSheet>
      </TouchableOpacity>

      <View style={[styles.textContent]}>
        <Typo.Title type="regular021">{lang(`${T}.text`)}</Typo.Title>
        <Typo.Title type="reg21" center style={styles.subTitle}>
          {lang(`${T}.subText`)}
        </Typo.Title>

        <Typo.Title center style={styles.subTitle}>
          {lang(`${T}.label`)}
        </Typo.Title>

        <CustomButton
          text={lang(`${T}.btnTitle`)}
          style={styles.button}
          onPress={goChats}
        />
      </View>
    </View>
  )
}
