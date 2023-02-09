import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import ButtonInline from 'components/ButtonInline'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import ListItem from 'components/ListItem'
import Menu from 'components/Menu/Menu'
import Typo from 'components/typo'
import { useAppDispatch } from 'hooks/redux'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useRef, useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { getRuleList } from 'state/rule/action'
import { IListInfo } from 'types/data'
import { lang } from 'utils/lang'

import stylesConfig from './YourListsScreen.styles'

interface IProps {
  route: {
    params: {
      chatId: number
      rules: string[]
    }
  }
}

const T = R.lang.screen_yourList

export const YourListsScreen: React.FC<IProps> = ({ route }) => {
  const dispatch = useAppDispatch()
  const styles = useStyles(stylesConfig)
  const [activeList, setActiveList] = useState<string[]>([])
  const [activeButton, setActiveButton] = useState(false)
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)
  const navigate = useSmartNavigation()
  const { chatId, rules } = route.params || {}

  const menuBar = () => {
    bottomsheetRef2.current?.present()
  }

  // const onYourList = async () => {
  //   const rule: string[] = state.filter(i => i.text).map(i => i.text || '')
  //   dispatch(
  //     getRuleAction({
  //       data: { rules: rule, chatId, userId },
  //       onSuccess: () => {
  //         navigation.navigate(R.routes.SCREEN_YOUR_LIST, { chatId, rule })
  //       },
  //     }),
  //   )
  // }
  const activeButtons = () => {
    setActiveButton(false)
    setTimeout(() => {
      setActiveButton(true)
    }, 100)

    const group: string[] = data.filter(i => i.text).map(i => i.text || '')
    dispatch(
      getRuleList({
        data: { rules: rules, chatId, groupName: group },
      }),
    )
    navigate.navigate(R.routes.CREATE_RULE_SCREEN)
  }

  const [data] = useState<IListInfo[]>([
    {
      text: 'Список 1',
      id: '1',
    },
    {
      text: 'Список 2',
      id: '2',
    },
    {
      text: 'Список 3',
      id: '3',
    },
    {
      text: 'Список 4',
      id: '4',
    },
    {
      text: 'Список 5',
      id: '5',
    },
    {
      text: 'Список 6',
      id: '6',
    },
    {
      text: 'Список 7',
      id: '7',
    },
    {
      text: 'Список 8',
      id: '8',
    },
    {
      text: 'Список 9',
      id: '9',
    },
  ])

  return (
    <View style={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />
      <View style={styles.container}>
        <View style={styles.iconContent}>
          <View style={styles.item} />
          <Typo.Title type="regular18bold">{lang(`${T}.title`)}</Typo.Title>

          <TouchableOpacity onPress={menuBar}>
            <R.icons.HamburgerIcon />
            <BottomSheet snapPoints={['50%']} ref={bottomsheetRef2}>
              <Menu />
            </BottomSheet>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString() + index}
        ListFooterComponent={() => (
          <ButtonInline
            text={lang(`${T}.buttonText`)}
            icon={<R.icons.PlusCardIcon />}
            style={activeButton ? styles.buttonActive : {}}
            onPress={activeButtons}
          />
        )}
        ListFooterComponentStyle={styles.flatContener}
        renderItem={({ item, index }) => (
          <ListItem
            activeList={activeList}
            item={item}
            key={index}
            setActiveList={setActiveList}
            onPress={() => activeButtons(item.id)}
          />
        )}
      />
    </View>
  )
}
