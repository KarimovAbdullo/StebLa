import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import { TThemeColors } from 'res/theme'

interface IProps {
  text: string
  onPress?: (() => void) | undefined
  style?: object
  icon: ReactNode
  textColor?: keyof TThemeColors
}

import stylesConfig from './BottomSheetButtons.styles'

export const BottomSheetButtons = ({
  text,
  onPress,
  style,
  icon,
  textColor,
}: IProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <TouchableOpacity
      style={[styles.bottomSheetButtonsContent, style]}
      onPress={onPress}>
      {icon}

      <Typo.Title
        type="regular18"
        color={textColor}
        style={styles.bottomSheetButtonsText}>
        {text}
      </Typo.Title>
    </TouchableOpacity>
  )
}
