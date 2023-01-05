import * as React from 'react'
import Svg, { Rect } from 'react-native-svg'

const HamburgerIcon = () => (
  <Svg width={30} height={12} fill="none">
    <Rect width={30} height={3} rx={1.5} fill="#061A1A" />
    <Rect y={9} width={30} height={3} rx={1.5} fill="#061A1A" />
  </Svg>
)

export default HamburgerIcon
