import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useCallback, useMemo } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { IChat } from 'types/data'

import stylesConfig from './ChatsItem.styles'

interface IProps {
  activeList: string[]
  item: IChat
  setActiveList: (value: string[]) => void
}

export const ChatsItem = ({ item, activeList, setActiveList }: IProps) => {
  const styles = useStyles(stylesConfig)
  const navigate = useSmartNavigation()

  const onStatickChats = useCallback(() => {
    navigate.navigate(R.routes.STATIC_CHAT_SCREEN, { itemData: item })
  }, [item])

  const active = useMemo(() => activeList.find(i => i === item.id), [item])

  const onLongPress = () => {
    setActiveList([...activeList, item.id])

    if (active) {
      const delite = activeList.filter(i => i !== item.id)
      setActiveList(delite)
    }
  }

  return (
    <TouchableOpacity
      style={[styles.container, active ? styles.active : {}]}
      onLongPress={onLongPress}
      onPress={onStatickChats}>
      <Image
        source={
          item.thumbnail
            ? { uri: 'data:image/png;base64,' + item.thumbnail }
            : require('../../assets/images/avatar.png')
        }
        style={styles.imageContent}
      />
      <View style={styles.textContent}>
        <View style={styles.textContainer}>
          <Typo.TextButton type="regular16">{item.name}</Typo.TextButton>
        </View>

        <TouchableOpacity style={styles.checkContent} onPress={onLongPress}>
          {active ? <R.icons.ActiveCheckIcon /> : <R.icons.CheckIcon />}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
