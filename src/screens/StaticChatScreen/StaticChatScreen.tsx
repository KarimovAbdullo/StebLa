import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Menu from 'components/Menu/Menu'
import { StaticChatItem } from 'components/StaticChatItems/StaticChatItem'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useRef } from 'react'
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native'
import R from 'res'
import { IChat } from 'types/data'
import { lang } from 'utils/lang'

import stylesConfig from './StaticChatScreen.style'

export interface IData {
  id: string
  text?: string
}

interface IProps {
  route: {
    params: {
      itemData: IChat
    }
  }
}

const T = R.lang.screen_staticChat

export const StaticChatScreen = ({ route }: IProps) => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)
  const { itemData } = route.params

  const goBack = () => {
    navigation.goBack()
  }

  const menuBar = () => {
    bottomsheetRef2.current?.present()
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
              source={{ uri: 'data:image/png;base64,' + itemData.thumbnail }}
              style={styles.img}
            />
            <Typo.Title type="regular8" style={styles.text}>
              {itemData.name}
            </Typo.Title>
          </View>

          <TouchableOpacity style={styles.icon} onPress={menuBar}>
            <R.icons.HamburgerIcon />
            <BottomSheet snapPoints={['50%']} ref={bottomsheetRef2}>
              <Menu />
            </BottomSheet>
          </TouchableOpacity>
        </View>

        <Typo.Body type="regular16" color="textTertiary">
          {lang(`${T}.title`)}
        </Typo.Body>

        <View>
          <FlatList
            numColumns={3}
            columnWrapperStyle={styles.board}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <StaticChatItem item={item} />}
          />
        </View>
      </View>
    </ScrollView>
  )
}
