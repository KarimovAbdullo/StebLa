import * as React from 'react'
import { ColorValue } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import Svg, { Circle, Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
}

const PlusIcon = (props: IProps) => {
  const { color = '#2BB0AD' } = props
  return (
    <Svg width={s(25)} height={vs(25)} fill="none">
      <Circle cx={12.5} cy={12.5} r={11.75} stroke={color} strokeWidth={1.5} />
      <Path
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        d="M12.75 7.75v9.5M17.25 12.75h-9.5"
      />
    </Svg>
  )
}

export default PlusIcon
