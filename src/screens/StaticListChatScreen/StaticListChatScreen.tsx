import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { StaticItems } from 'components/StaticItems/StaticItems'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import R from 'res'
import { IChatsInfo } from 'types/data'

import stylesConfig from './StaticListChatScreen.style'

export const StaticListChatScreen = () => {
  const styles = useStyles(stylesConfig)
  const [activeList, setActiveList] = useState<string[]>([])
  // const [activeButton, setActiveButton] = useState(false)
  const navigation = useSmartNavigation()
  const [valu, setValu] = useState('Огонь')

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
  const goBack = () => {
    navigation.goBack()
  }
  const inpX = () => {
    setValu('')
  }

  const [data] = useState<IChatsInfo[]>([
    {
      name: 'Александр',
      image: require('../../assets/images/1.png'),
      fayl: 'Веб-программа',
      text: 'GIF',
      id: '1',
    },
    {
      name: 'Евгений',
      image: require('../../assets/images/2.png'),
      text: 'Давайте выберем первую возможность',
      id: '2',
    },
    {
      name: 'Алексей',
      image: require('../../assets/images/3.png'),
      text: '👋 Привет, как дела?',
      id: '3',
    },
    {
      name: 'Владимир',
      image: require('../../assets/images/4.png'),
      fayl: '🤖 Работа 👨‍💻',
      text: 'Давайте выберем первую возмо…',
      id: '4',
    },
    {
      name: 'Александр',
      image: require('../../assets/images/1.png'),
      fayl: 'Веб-программа',
      text: 'GIF',
      id: '5',
    },
    {
      name: 'Евгений',
      image: require('../../assets/images/2.png'),
      text: 'Давайте выберем первую возможность',
      id: '6',
    },
    {
      name: 'Алексей',
      image: require('../../assets/images/3.png'),
      text: '👋 Привет, как дела?',
      id: '7',
    },
    {
      name: 'Владимир',
      image: require('../../assets/images/4.png'),
      fayl: '🤖 Работа 👨‍💻',
      text: 'Давайте выберем первую возмо…',
      id: '8',
    },
    {
      name: 'Александр',
      image: require('../../assets/images/1.png'),
      fayl: 'Веб-программа',
      text: 'GIF',
      id: '9',
    },
    {
      name: 'Евгений',
      image: require('../../assets/images/2.png'),
      text: 'Давайте выберем первую возможность',
      id: '10',
    },
  ])

  return (
    <SafeAreaView style={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />
      <View style={styles.container}>
        <View style={styles.iconContent}>
          <TouchableOpacity onPress={goBack}>
            <R.icons.BackIcon />
          </TouchableOpacity>

          <Typo.Title type="regular18bold">Статистика</Typo.Title>
          <R.icons.HamburgerIcon />
        </View>
      </View>
      <ScrollView>
        <View style={styles.inputContent}>
          <TextInput style={styles.input} onChangeText={setValu} value={valu} />
          <TouchableOpacity style={styles.icon} onPress={inpX}>
            <R.icons.XIcon />
          </TouchableOpacity>
        </View>

        <Typo.Title
          type="regular016"
          center={true}
          color="textTertiary"
          style={styles.midText}>
          Найдено 13 чатов со словом “Огонь”
        </Typo.Title>

        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.image.toString() + index}
          renderItem={({ item, index }) => (
            <StaticItems
              activeList={activeList}
              item={item}
              key={index}
              setActiveList={setActiveList}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
