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

const CheckIcon = (props: IProps) => {
  const { color = '#B3C2CB', width = 22, height = 22 } = props

  return (
    <Svg width={s(width)} height={s(height)} viewBox="0 0 22 22" fill="none">
      <Circle cx="11" cy="11" r="10.25" stroke={color} stroke-width="1.5" />
    </Svg>
  )
}

export default CheckIcon
