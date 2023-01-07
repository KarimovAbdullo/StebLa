import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Circle } from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: ColorValue
  strokeWidth?: number
}

const GroupIcon = (props: IProps) => {
  const { color = '#B3C2CB', width = 21, height = 5 } = props

  return (
    <Svg width={s(width)} height={s(height)} viewBox="0 0 21 5" fill="none">
      <Circle cx="18.5" cy="2.5" r="2.5" fill={color} />
      <Circle cx="10.5" cy="2.5" r="2.5" fill={color} />
      <Circle cx="2.5" cy="2.5" r="2.5" fill={color} />
    </Svg>
  )
}

export default GroupIcon
