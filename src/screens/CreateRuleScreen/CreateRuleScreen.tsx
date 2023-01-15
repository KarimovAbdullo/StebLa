import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CreateRuleItems } from 'components/CreateRuleItems/CreateRuleItems'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Menu from 'components/Menu/Menu'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { ReactElement, useRef, useState } from 'react'
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'

import styleConfig from './CreateRule.style'

const T = R.lang.screen_createRule

export interface IData {
  id: number
  text?: string
  icon?: ReactElement
}

const CreateRuleScreen = () => {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)

  const menuBar = () => {
    bottomsheetRef2.current?.present()
  }

  const onYourList = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_YOUR_LIST)
  }

  const [state, setState] = useState<IData[]>([
    { id: 1, text: 'Огонь.' },
    { id: 2, text: 'Ведро' },
    { id: 3, text: 'Фабрикант' },
    { id: 4, text: 'Молоко' },
    { id: 5, text: 'Абрикос' },
    { id: 6, icon: <R.icons.PlusCardIcon /> },
    { id: 7, icon: <R.icons.PlusCardIcon /> },
    { id: 8, icon: <R.icons.PlusCardIcon /> },
    { id: 9, icon: <R.icons.PlusCardIcon /> },
    { id: 10, icon: <R.icons.PlusCardIcon /> },
  ])

  return (
    <Container>
      <FocusAwareStatusBar
        backgroundColor={R.colors.white}
        barStyle={'dark-content'}
      />
      <View style={styles.header}>
        <Typo.Title type="regular18bold" center={true}>
          {lang(`${T}.name`)}
        </Typo.Title>
        <TouchableOpacity style={styles.icon} onPress={menuBar}>
          <R.icons.HamburgerIcon />
          <BottomSheet snapPoints={['50%']} ref={bottomsheetRef2}>
            <Menu />
          </BottomSheet>
        </TouchableOpacity>
      </View>
      <View />

      <SafeAreaView>
        <FlatList
          data={state}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={styles.itemContent}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <CreateRuleItems item={item} state={state} setState={setState} />
          )}
        />

        <CustomButton
          text={lang(`${T}.btnTitle`)}
          style={styles.btn}
          onPress={onYourList}
        />
      </SafeAreaView>
    </Container>
  )
}

export default CreateRuleScreen
