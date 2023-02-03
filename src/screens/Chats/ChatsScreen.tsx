import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import ChatsItem from 'components/ChatsItem'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Menu from 'components/Menu/Menu'
import { SkeletLoading } from 'components/SkeletLoading/SkeletLoading'
import Typo from 'components/typo'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useRef, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import R from 'res'
import { getChatsAction, getMoreChatsAction } from 'state/chats/actions'
import { getChats } from 'state/chats/selectors'
import { lang } from 'utils/lang'

import stylesConfig from './ChatsScreen.styles'

const T = R.lang.screen_chats

export const ChatsScreen = () => {
  const styles = useStyles(stylesConfig)
  const [activeList, setActiveList] = useState<number[]>([])
  const [activeButton, setActiveButton] = useState(false)
  const navigate = useSmartNavigation()
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)
  const { chats, loading, offset, moreLoading } = useAppSelector(getChats)
  const dispatch = useAppDispatch()

  console.log(chats)

  const [loadingData] = useState([
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
  ])

  const onLoading = () => {
    dispatch(getMoreChatsAction({ offset }))
  }

  const onLongPress = () => {
    setActiveButton(!activeButton)
  }
  console.log('chatList', chats)

  const onRefresh = () => {
    dispatch(getChatsAction())
  }

  useEffect(() => {
    onRefresh()
  }, [])

  const changeButton = () => {
    navigate.navigate(R.routes.CREATE_RULE_SCREEN, {
      chatId: activeList[0],
    })
  }

  const deliteList = () => {
    setActiveList([])
  }

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

      {loading ? (
        <FlatList
          data={loadingData}
          keyExtractor={(item, index) => item.toString() + index}
          renderItem={({ item }) => <SkeletLoading key={item.id} />}
        />
      ) : (
        <FlatList
          data={chats}
          onEndReached={onLoading}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
          ListFooterComponent={
            moreLoading
              ? () => (
                  <ActivityIndicator size="large" style={styles.loadingStyle} />
                )
              : undefined
          }
          keyExtractor={(item, index) => item.toString() + index}
          renderItem={({ item }) => (
            <ChatsItem
              activeList={activeList}
              item={item}
              key={item.id.toString()}
              setActiveList={setActiveList}
            />
          )}
        />
      )}

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
