import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Rect } from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: ColorValue
  strokeWidth?: number
}

const MenuIcon = (props: IProps) => {
  const { color = '#061A1A', width = 30, height = 12 } = props

  return (
    <Svg width={s(width)} height={s(height)} viewBox="0 0 30 12" fill="none">
      <Rect width={s(width)} height="3" rx="1.5" fill={color} />
      <Rect y="9" width={s(width)} height="3" rx="1.5" fill={color} />
    </Svg>
  )
}

export default MenuIcon
