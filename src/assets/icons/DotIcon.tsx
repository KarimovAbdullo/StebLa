import * as React from 'react'
import Svg, { Circle } from 'react-native-svg'

const DotIcon = () => (
  <Svg width={21} height={5} fill="none">
    <Circle cx={18.5} cy={2.5} r={2.5} fill="#B3C2CB" />
    <Circle cx={10.5} cy={2.5} r={2.5} fill="#B3C2CB" />
    <Circle cx={2.5} cy={2.5} r={2.5} fill="#B3C2CB" />
  </Svg>
)

export default DotIcon
