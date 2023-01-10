import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { IData } from 'screens/StaticChatScreen/StaticChatScreen'

interface IProps {
  item: IData
}

import styleConfig from './StaticChatItem.style'
export const StaticChatItem = ({ item }: IProps) => {
  const styles = useStyles(styleConfig)
  return (
    <TouchableOpacity key={item.id} style={styles.item}>
      <Text style={styles.itemText}>{item.text}</Text>
    </TouchableOpacity>
  )
}
