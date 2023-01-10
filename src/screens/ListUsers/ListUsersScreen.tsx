import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import ListUserItem from 'components/ListUserItem'
// import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
// import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import R from 'res'
import { IListUserInfo } from 'types/data'

import stylesConfig from './ListUsersScreen.styles'

export const ListUsersScreen = () => {
  const styles = useStyles(stylesConfig)
  const [activeList, setActiveList] = useState<string[]>([])
  //   const [activeButton, setActiveButton] = useState(false)
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

  //   const activeButtons = () => {
  //     setActiveButton(false)
  //     setTimeout(() => {
  //       setActiveButton(true)
  //     }, 100)
  //   }

  const [data] = useState<IListUserInfo[]>([
    {
      text: 'Имя пользователя',
      id: '1',
      subTitle: '+ 7 (777) 777 777 77',
      image: require('../../assets/images/01.png'),
    },
    {
      text: 'Имя пользователя',
      id: '2',
      subTitle: '+ 7 (777) 777 777 77',
      image: require('../../assets/images/02.png'),
    },
    {
      text: 'Имя пользователя',
      id: '3',
      subTitle: '+ 7 (777) 777 777 77',
      image: require('../../assets/images/03.png'),
    },
    {
      text: 'Имя пользователя',
      id: '4',
      subTitle: '+ 7 (777) 777 777 77',
      image: require('../../assets/images/04.png'),
    },
    {
      text: 'Имя пользователя',
      id: '5',
      subTitle: '+ 7 (777) 777 777 77',
      image: require('../../assets/images/05.png'),
    },
    {
      text: 'Имя пользователя',
      id: '6',
      subTitle: '+ 7 (777) 777 777 77',
      image: require('../../assets/images/06.png'),
    },

    {
      text: 'Имя пользователя',
      id: '7',
      subTitle: '+ 7 (777) 777 777 77',
      image: require('../../assets/images/07.png'),
    },
    {
      text: 'Имя пользователя',
      id: '8',
      subTitle: '+ 7 (777) 777 777 77',
      image: require('../../assets/images/08.png'),
    },
  ])

  return (
    <View style={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />
      <View style={styles.container}>
        <View style={styles.iconContent}>
          <View style={styles.item} />
          <Typo.Title type="regular18bold">Список пользователей</Typo.Title>

          <R.icons.MenuIcon />
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString() + index}
        renderItem={({ item, index }) => (
          <ListUserItem
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
