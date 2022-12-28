import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React, { ReactElement } from 'react'
import { StyleProp, Text, TextProps } from 'react-native'
import { TThemeColors } from 'res/theme'
import { createStyles } from 'utils/createStyles'

interface IProps {
  children: ReactElement | string | string[]
  center?: boolean
  type?: 'bold' | 'regular' | 'regular18' | 'regular21' | 'header'
  style?: StyleProp<TextProps>
  numberOfLines?: number
  color?: keyof TThemeColors
  flex?: boolean
}

const Title: React.FC<IProps> = ({
  type = 'regular',
  children,
  style,
  numberOfLines,
  color = 'black',
  center = false,
  flex = false,
}) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()
  //@ts-ignore
  const colorStyle = { color: color ? colors[color] : undefined }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles[type],
        flex && styles.flex,
        center ? styles.center : {},
        colorStyle,
        style,
      ]}>
      {children}
    </Text>
  )
}

const stylesConfig = createStyles((_colors, fonts) => ({
  regular: {
    fontFamily: fonts.Ubuntu,
    fontSize: '18@ms',
    lineHeight: '22@ms',
    fontWeight: '300',
  },
  bold: {
    fontFamily: fonts.Ubuntu.medium,
    fontSize: '28@ms',
    lineHeight: '22@ms',
  },
  center: {
    textAlign: 'center',
  },
  flex: {
    flex: 1,
  },
  regular18: {
    fontFamily: fonts.Inter.regular,
    fontSize: '18@ms',
    lineHeight: '24.93@ms',
    fontWeight: '400',
  },
  regular21: {
    fontFamily: fonts.Ubuntu.medium,
    fontSize: '18@ms',
    lineHeight: '21@ms',
    fontWeight: '600',
  },
  header: {
    fontSize: '16@ms',
    fontFamily: fonts.Ubuntu.medium,
    fontWeight: '100',
    lineHeight: '19@ms',
  },
}))

export default Title
