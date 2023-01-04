import * as React from 'react'
import { s, vs } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

const PlusCardIcon = () => (
  <Svg width={s(16)} height={vs(16)} fill="none">
    <Path
      d="M15.583 7.998c0 .598-.485 1.083-1.083 1.083H9.083v5.417a1.083 1.083 0 1 1-2.167 0V9.08H1.5a1.083 1.083 0 1 1 0-2.166h5.417V1.498a1.083 1.083 0 0 1 2.166 0v5.417H14.5c.598 0 1.083.485 1.083 1.083Z"
      fill="#2BB0AD"
    />
  </Svg>
)

export default PlusCardIcon
