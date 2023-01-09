import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import R from 'res'

import stylesConfig from './StaticChatScreen.style'

export interface IData {
  id: string
  text?: string
}

export const StaticChatScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  const data: IData[] = [
    {
      id: '1',
      text: 'Вода',
    },
    {
      id: '2',
      text: 'Огонь',
    },
    {
      id: '3',
      text: 'Камень',
    },
    {
      id: '4',
      text: 'Вода',
    },
    {
      id: '5',
      text: 'Молоко',
    },
    {
      id: '6',
      text: 'Ножницы',
    },
    {
      id: '7',
      text: 'Яблоко',
    },
    {
      id: '8',
      text: 'Корова',
    },
    {
      id: '1',
      text: 'Молоко',
    },
    {
      id: '2',
      text: 'Вода',
    },
    {
      id: '3',
      text: 'Здание',
    },
    {
      id: '4',
      text: 'Яблоко',
    },
    {
      id: '5',
      text: 'Молоко',
    },
    {
      id: '6',
      text: 'Вода',
    },
    {
      id: '7',
      text: 'Здание',
    },
    {
      id: '8',
      text: 'Яблоко',
    },
    {
      id: '1',
      text: 'Молоко',
    },
    {
      id: '2',
      text: 'Вода',
    },
    {
      id: '3',
      text: 'Здание',
    },
    {
      id: '4',
      text: 'Яблоко',
    },
    {
      id: '5',
      text: 'Молоко',
    },
    {
      id: '6',
      text: 'Вода',
    },
    {
      id: '7',
      text: 'Здание',
    },
    {
      id: '8',
      text: 'Яблоко',
    },
  ]

  return (
    <ScrollView style={styles.main}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <View style={styles.container}>
        <View style={styles.iconContent}>
          <View style={styles.head}>
            <TouchableOpacity onPress={goBack}>
              <R.icons.BackIcon />
            </TouchableOpacity>

            <Image
              source={require('./../../assets/images/1.png')}
              style={styles.img}
            />
            <Typo.Title type="regular8" style={styles.text}>
              Иван Петров
            </Typo.Title>
          </View>

          <R.icons.HamburgerIcon />
        </View>

        <Typo.Body type="regular16" color="textTertiary">
          Найдено 27 ключевых слов
        </Typo.Body>

        <View style={styles.board}>
          {data.map(item => (
            <TouchableOpacity key={item.id} style={styles.item}>
              <Text style={styles.itemText}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
