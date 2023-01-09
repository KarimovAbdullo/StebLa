import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { IChatsInfo } from 'types/data'

import stylesConfig from './ChatsItem.styles'

interface IProps {
  activeList: string[]
  item: IChatsInfo
  setActiveList: (value: string[]) => void
}

export const ChatsItem = ({ item, activeList, setActiveList }: IProps) => {
  const styles = useStyles(stylesConfig)

  const onLongPress = () => {
    setActiveList([...activeList, item.id])
    console.log(activeList)
    if (active) {
      const delite = activeList.filter(i => i !== item.id)
      setActiveList(delite)
    }
  }

  const active = activeList.find(i => i === item.id)

  return (
    <TouchableOpacity
      style={[styles.container, active ? styles.active : {}]}
      onPress={onLongPress}>
      <Image source={item.image} style={styles.imageContent} />
      <View style={styles.textContent}>
        <View>
          <Typo.TextButton type="regular16">{item.name}</Typo.TextButton>
          {item.fayl ? (
            <Typo.TextButton type="regular15">{item.fayl}</Typo.TextButton>
          ) : null}

          {item.text ? (
            <Typo.TextButton color="textColor">{item.text}</Typo.TextButton>
          ) : null}
        </View>

        <TouchableOpacity style={styles.checkContent}>
          {active ? <R.icons.ActiveCheckIcon /> : <R.icons.CheckIcon />}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
