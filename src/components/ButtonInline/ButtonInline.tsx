import { useStyles } from 'hooks/useStyles'
import React, { ReactNode } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

interface IProps {
  text: string | string[] | undefined
  onPress?: (() => void) | undefined
  style?: object
  loading?: boolean
  disabled?: boolean
  textStyle?: object
  icon?: ReactNode
}

import stylesConfig from './ButtonInline.styles'

export const ButtonInline = ({
  text,
  onPress,
  style,
  loading,
  disabled = false,
  textStyle,
  icon,
}: IProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <TouchableOpacity onPress={onPress} disabled={loading || disabled}>
      <View style={[styles.button, disabled ? styles.disabled : {}, style]}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text
            style={[
              styles.text,
              disabled ? styles.textDisabled : {},
              textStyle,
            ]}>
            {icon} {text}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
}
