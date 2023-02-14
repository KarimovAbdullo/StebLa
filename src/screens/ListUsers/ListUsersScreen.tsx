import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import ListUserItem from 'components/ListUserItem'
import Menu from 'components/Menu/Menu'
import Typo from 'components/typo'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useRef, useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { getUsersAction } from 'state/admin.tsx/actions'
import { getAdminUsers } from 'state/admin.tsx/selector'
import { IListUserInfo } from 'types/data'
import { lang } from 'utils/lang'

import stylesConfig from './ListUsersScreen.styles'

const T = R.lang.screen_listUser

export const ListUsersScreen = () => {
  const styles = useStyles(stylesConfig)
  const [activeList, setActiveList] = useState<string[]>([])
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)
  const dispatch = useAppDispatch()
  const { admin } = useAppSelector(getAdminUsers)

  console.log('admin', admin)

  const menuBar = () => {
    bottomsheetRef2.current?.present()
  }

  const [data] = useState<IListUserInfo[]>([
    {
      text: 'Имя пользователя',
      id: '1',
      subTitle: '+ 7 (777) 777 777 77',
      image: require('../../assets/images/01.png'),
    },
  ])

  useEffect(() => {
    dispatch(getUsersAction())
  }, [])

  return (
    <View style={styles.itemContent}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />
      <View style={styles.container}>
        <View style={styles.iconContent}>
          <View style={styles.item} />
          <Typo.Title type="regular18bold">{lang(`${T}.name`)}</Typo.Title>

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
