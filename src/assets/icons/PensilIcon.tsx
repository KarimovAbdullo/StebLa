import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: ColorValue
  strokeWidth?: number
}

const PensilIcon = (props: IProps) => {
  const { color = '#B3C2CB', width = 16, height = 16 } = props

  return (
    <Svg width={s(width)} height={s(height)} viewBox="0 0 16 16" fill="none">
      <Path
        d="M5.7025 13.8333H15.5V15.4999H0.5V11.9641L8.75 3.71411L12.285 7.25078L5.70167 13.8333H5.7025ZM9.9275 2.53661L11.6958 0.768281C11.8521 0.612055 12.064 0.524292 12.285 0.524292C12.506 0.524292 12.7179 0.612055 12.8742 0.768281L15.2317 3.12578C15.3879 3.28205 15.4757 3.49398 15.4757 3.71495C15.4757 3.93592 15.3879 4.14784 15.2317 4.30411L13.4633 6.07161L9.92833 2.53661H9.9275Z"
        fill={color}
      />
    </Svg>
  )
}

export default PensilIcon
