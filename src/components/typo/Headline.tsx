import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React, { ReactElement, ReactNode } from 'react'
import { StyleProp, Text, TextProps } from 'react-native'
import { TThemeColors } from 'res/theme'
import { createStyles } from 'utils/createStyles'

interface IProps {
  children:
    | ReactElement
    | string
    | string[]
    | number
    | (ReactNode | string | number)[]
  center?: boolean
  type?: 'bold28' | 'bold24' | 'bold38' | 'bold42' | 'bold20' | 'bold16'
  style?: StyleProp<TextProps>
  numberOfLines?: number
  color?: keyof TThemeColors
}

const Headline: React.FC<IProps> = ({
  type = 'bold28',
  children,
  style,
  numberOfLines,
  color = 'black',
  center = false,
}) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()
  const colorStyle = { color: color ? colors[color] : undefined }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles[type], center ? styles.center : {}, colorStyle, style]}>
      {children}
    </Text>
  )
}

const stylesConfig = createStyles((_colors, fonts) => ({
  bold28: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '28@ms',
    lineHeight: '34@ms',
  },
  bold24: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '24@ms',
    lineHeight: '30@ms',
  },
  bold38: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '38@ms',
    lineHeight: '44@ms',
  },
  bold42: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '42@ms',
    lineHeight: '48@ms',
  },
  bold20: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '20@ms',
    lineHeight: '24@ms',
  },
  bold16: {
    fontFamily: fonts.Ubuntu.regular,
    fontSize: '16@ms',
    lineHeight: '24@ms',
  },
  center: {
    textAlign: 'center',
  },
}))

export default Headline
