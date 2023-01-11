import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import ChatsItem from 'components/ChatsItem'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Menu from 'components/Menu/Menu'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useRef, useState } from 'react'
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { IChatsInfo } from 'types/data'
import { lang } from 'utils/lang'

import stylesConfig from './ChatsScreen.styles'

const T = R.lang.screen_chats

export const ChatsScreen = () => {
  const styles = useStyles(stylesConfig)
  const [activeList, setActiveList] = useState<string[]>([])
  const [activeButton, setActiveButton] = useState(false)
  const navigate = useSmartNavigation()
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)

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

  //      {lang(`${T}.`)}

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

  const menuBar = () => {
    bottomsheetRef2.current?.present()
  }

  return (
    <View style={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />
      <View style={styles.container}>
        <View style={styles.iconContent}>
          <View style={styles.item} />
          <Typo.Title type="regular18bold">{lang(`${T}.label`)}</Typo.Title>

          <TouchableOpacity onPress={menuBar}>
            <R.icons.HamburgerIcon />
            <BottomSheet snapPoints={['50%']} ref={bottomsheetRef2}>
              <Menu />
            </BottomSheet>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContent}>
          <TouchableOpacity>
            <R.icons.SearchIcon />
          </TouchableOpacity>

          <TextInput
            placeholder={lang(`${T}.inputTitle`)}
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
              text={lang(`${T}.bottomText`)}
              onPress={changeButton}
            />
          ) : (
            <>
              <CustomButton
                text={lang(`${T}.BtnTitle1`)}
                style={styles.buttonBottom}
                onPress={onLongPress}
              />

              <CustomButton
                text={lang(`${T}.BtnTitle2`)}
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
