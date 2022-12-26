import React from 'react'
import { ColorValue } from 'react-native'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
  strokeWidth?: number
}

const ExampleIcon = (props: IProps) => {
  const { color = '#fff', strokeWidth = 2, size = 24 } = props

  return (
    <Svg width={size} height={size} viewBox={'0 0 24 24'} fill="none">
      <Path
        d="M11.9998 4.92893V19.0711"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.92871 12H19.0708"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ExampleIcon
