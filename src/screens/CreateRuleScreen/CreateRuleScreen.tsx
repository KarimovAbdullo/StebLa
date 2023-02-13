import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CreateRuleItems } from 'components/CreateRuleItems/CreateRuleItems'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Menu from 'components/Menu/Menu'
import Typo from 'components/typo'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useRef, useState } from 'react'
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { getRuleAction } from 'state/chats/actions'
import { getChats } from 'state/chats/selectors'
import { IRuleData } from 'types/data'
import { lang } from 'utils/lang'

import styleConfig from './CreateRule.style'

const T = R.lang.screen_createRule

interface IProps {
  route: {
    params: {
      chatIds: string[]
    }
  }
}

const CreateRuleScreen: React.FC<IProps> = ({ route }) => {
  const userId = useAppSelector(state => state.user.user?.id)
  const { loading } = useAppSelector(getChats)

  const { chatIds } = route.params || {}

  console.log(chatIds)

  const styles = useStyles(styleConfig)
  const dispatch = useAppDispatch()
  const navigation = useSmartNavigation()
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)

  const menuBar = () => {
    bottomsheetRef2.current?.present()
  }

  const onYourList = async () => {
    // const rules: string[] = state.filter(i => i.text).map(i => i.text || '')
    // const newData = chatIds.map(chatId => ({ rules, chatId, userId }))
    // dispatch(
    //   getRuleAction({
    //     data: newData,
    //     onSuccess: () => {
    navigation.navigate(R.routes.SCREEN_YOUR_LIST)
    //   },
    // }),
    // )
  }

  // const onYourList = () => {
  //   // @ts-ignore
  //   navigation.navigate(R.routes.SCREEN_YOUR_LIST)
  // }

  const [state, setState] = useState<IRuleData[]>([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ])
  const isValid = state.find(i => i.text)

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
          disabled={!isValid}
          onPress={onYourList}
          loading={loading}
        />
      </SafeAreaView>
    </Container>
  )
}

export default CreateRuleScreen
