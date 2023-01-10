import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Menu from 'components/Menu/Menu'
import StaticWordItem from 'components/StaticWordItem'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useRef, useState } from 'react'
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import R from 'res'
import { IStaticWordInfo } from 'types/data'

import stylesConfig from './StaticWordScreen.style'

export const StaticWordScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)

  const menuBar = () => {
    bottomsheetRef2.current?.present()
  }

  const goListChat = () => {
    navigation.navigate(R.routes.STATIC_LIST_CHAT_SCREEN)
  }

  const goChat = () => {
    navigation.navigate(R.routes.STATIC_CHAT_SCREEN)
  }

  const [data] = useState<IStaticWordInfo[]>([
    {
      name: 'Огонь',
      title: 'Количество повтороений',
      subTitle: 'Количество чатов',
    },
    {
      name: 'Ветер',
      title: 'Количество повтороений',
      subTitle: 'Количество чатов',
    },
    {
      name: 'Огонь',
      title: 'Количество повтороений',
      subTitle: 'Количество чатов',
    },
    {
      name: 'Ветер',
      title: 'Количество повтороений',
      subTitle: 'Количество чатов',
    },
    {
      name: 'Огонь',
      title: 'Количество повтороений',
      subTitle: 'Количество чатов',
    },
    {
      name: 'Ветер',
      title: 'Количество повтороений',
      subTitle: 'Количество чатов',
    },
  ])

  return (
    <ScrollView style={styles.main}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <View style={styles.container}>
        <View style={styles.iconContent}>
          <Typo.Title type="regular18bold">Статистика</Typo.Title>
          <TouchableOpacity style={styles.icon} onPress={menuBar}>
            <R.icons.HamburgerIcon />
            <BottomSheet snapPoints={['50%']} ref={bottomsheetRef2}>
              <Menu />
            </BottomSheet>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContent}>
        <TextInput
          placeholder="Напишите слово, которе нужно найти"
          placeholderTextColor={R.colors.black}
          style={styles.input}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.toString() + index}
        renderItem={({ item, index }) => (
          <StaticWordItem
            item={item}
            key={index}
            goListChat={goListChat}
            goChat={goChat}
          />
        )}
      />
    </ScrollView>
  )
}
