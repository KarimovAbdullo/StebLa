import apiClient from 'api/instance'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useCallback, useEffect } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { IChat, IIcondata } from 'types/data'

import stylesConfig from './ChatsItem.styles'

interface IProps {
  activeList: number[]
  item: IChat
  setActiveList: (value: number[]) => void
}

export const ChatsItem = ({ item, activeList, setActiveList }: IProps) => {
  const styles = useStyles(stylesConfig)
  const navigate = useSmartNavigation()
  const [iconItem, setIconItem] = React.useState<IIcondata>()

  const onStatickChats = useCallback(() => {
    navigate.navigate(R.routes.STATIC_CHAT_SCREEN, { itemData: item })
  }, [item])

  const active = activeList.find(i => i === item.id)

  const onLongPress = () => {
    setActiveList([...activeList, item.id])

    if (active) {
      const delite = activeList.filter(i => i !== item.id)
      setActiveList(delite)
    }
  }

  const getIcondata = async (iconId: string | number) => {
    try {
      const { data: response } = await apiClient.get<IIcondata | null>(
        `https://stebla.dev-webdevep.ru/bot-telegram-service/public/icon/${iconId}`,
      )
      if (response) {
        setIconItem(response)
      }
    } catch {}
  }

  useEffect(() => {
    getIcondata(item.id)
  }, [])

  return (
    <TouchableOpacity
      style={[styles.container, active ? styles.active : {}]}
      onLongPress={onLongPress}
      onPress={onStatickChats}>
      <Image
        source={
          iconItem?.thumbnail
            ? { uri: 'data:image/png;base64,' + iconItem.thumbnail }
            : require('../../assets/images/avatar.png')
        }
        style={styles.imageContent}
      />
      <View style={styles.textContent}>
        <View style={[styles.textContainer]}>
          <Typo.TextButton type="regular16">{item.name}</Typo.TextButton>
        </View>

        <TouchableOpacity style={styles.checkContent} onPress={onLongPress}>
          {active ? <R.icons.ActiveCheckIcon /> : <R.icons.CheckIcon />}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
