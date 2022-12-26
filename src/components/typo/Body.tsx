import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React, { ReactElement, ReactNode } from 'react'
import { StyleProp, Text, TextProps } from 'react-native'
import { TThemeColors } from 'res/theme'
import { createStyles } from 'utils/createStyles'

interface IProps extends TextProps {
  children:
    | ReactNode
    | ReactElement
    | string
    | string[]
    | number
    | (string | number)[]
  center?: boolean
  type?: 'regular16' | 'regular14' | 'regular18' | 'regular12' | 'semi12'
  style?: StyleProp<TextProps>
  numberOfLines?: number
  color?: keyof TThemeColors
  opacity?: number
  bold?: boolean
  semiBold?: boolean
}

const Body: React.FC<IProps> = ({
  type = 'regular16',
  children,
  style,
  numberOfLines,
  color = 'black',
  center = false,
  opacity = 1,
  bold = false,
  semiBold = false,
  ...attributes
}) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()
  const colorStyle = { color: color ? colors[color] : undefined }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles[type],
        center ? styles.center : {},
        colorStyle,
        bold && styles.bold,
        semiBold && styles.semiBold,
        style,
        { opacity },
      ]}
      {...attributes}>
      {children}
    </Text>
  )
}

const stylesConfig = createStyles((_colors, fonts) => ({
  regular16: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '16@ms',
    lineHeight: '22@ms',
  },
  regular14: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '14@ms',
    lineHeight: '18@ms',
  },
  regular18: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '18@ms',
    lineHeight: '24@ms',
  },
  regular12: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '12@ms',
    lineHeight: '14@ms',
  },
  semi12: {
    fontFamily: fonts.Ubuntu,
    fontSize: '12@ms',
    lineHeight: '14@ms',
  },
  center: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: '700',
  },
  semiBold: {
    fontFamily: fonts.Ubuntu,
  },
}))

export default Body
