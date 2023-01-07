import ButtonInline from 'components/ButtonInline'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import ListItem from 'components/ListItem'
// import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
// import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import R from 'res'
import { IListInfo } from 'types/data'

import stylesConfig from './YourListsScreen.styles'

export const YourListsScreen = () => {
  const styles = useStyles(stylesConfig)
  const [activeList, setActiveList] = useState<string[]>([])
  const [activeButton, setActiveButton] = useState(false)
  // const navigate = useSmartNavigation()

  // const onLongPress = () => {
  //   // @ts-ignore
  //   setActiveButton(!activeButton)
  // }

  // const changeButton = () => {
  //   // @ts-ignore
  //   navigate.navigate(R.routes.CREATE_RULE_SCREEN)
  // }

  // const deliteList = () => {
  //   setActiveList([])
  // }

  const activeButtons = () => {
    setActiveButton(false)
    setTimeout(() => {
      setActiveButton(true)
    }, 100)
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
          <Typo.Title type="regular18bold">Ваши списки</Typo.Title>

          <R.icons.MenuIcon />
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString() + index}
        ListFooterComponent={() => (
          <ButtonInline
            text={'Добавить'}
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
          />
        )}
      />
    </View>
  )
}