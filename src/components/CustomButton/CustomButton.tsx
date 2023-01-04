import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

interface IProps {
  text: string | string[] | undefined
  onPress?: (() => void) | undefined
  style?: object
  loading?: boolean
  textStyle?: object
}

import stylesConfig from './CustomButton.styles'

export const CustomButton = ({
  text,
  onPress,
  style,
  loading,
  textStyle,
}: IProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <TouchableOpacity onPress={onPress} disabled={loading}>
      <View style={[styles.button, style]}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={[styles.text, textStyle]}>{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  )
}
