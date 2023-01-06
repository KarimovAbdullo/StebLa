import ChatsItem from 'components/ChatsItem'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { IChatsInfo } from 'types/data'

import stylesConfig from './ChatsScreen.styles'

export const ChatsScreen = () => {
  const styles = useStyles(stylesConfig)
  const [activeList, setActiveList] = useState<string[]>([])
  const [activeButton, setActiveButton] = useState(false)
  const navigate = useSmartNavigation()

  const onLongPress = () => {
    // @ts-ignore
    setActiveButton(!activeButton)
  }

  const changeButton = () => {
    // @ts-ignore
    navigate.navigate(R.routes.CREATE_RULE_SCREEN)
  }

  const deliteList = () => {
    setActiveList([])
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
    <View style={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />
      <View style={styles.container}>
        <View style={styles.iconContent}>
          <View style={styles.item} />
          <Typo.Title type="regular18bold">Chats</Typo.Title>

          <R.icons.MenuIcon />
        </View>

        <View style={styles.inputContent}>
          <TouchableOpacity>
            <R.icons.SearchIcon />
          </TouchableOpacity>

          <TextInput
            placeholder="Поиск среди чатов телеграм"
            placeholderTextColor={R.colors.textPrimary}
            style={styles.input}
          />
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => item.image.toString() + index}
        renderItem={({ item, index }) => (
          <ChatsItem
            activeList={activeList}
            item={item}
            key={index}
            setActiveList={setActiveList}
          />
        )}
      />
      {activeList.length > 0 ? (
        <View
          style={[
            styles.bottomContent,
            activeButton ? styles.activeButtonStyle : {},
          ]}>
          {activeButton ? (
            <CustomButton
              text={'Создать правило для этого списка'}
              onPress={changeButton}
            />
          ) : (
            <>
              <CustomButton
                text={'Добавить'}
                style={styles.buttonBottom}
                onPress={onLongPress}
              />

              <CustomButton
                text={'Отменить'}
                style={styles.buttonBottom2}
                textStyle={styles.textButton}
                onPress={deliteList}
              />
            </>
          )}
        </View>
      ) : null}
    </View>
  )
}
