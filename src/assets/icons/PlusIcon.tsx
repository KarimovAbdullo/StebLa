import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

const PlusIcon = () => (
  <Svg width={25} height={25} fill="none">
    <Circle cx={12.5} cy={12.5} r={11.75} stroke="#2BB0AD" strokeWidth={1.5} />
    <Path
      stroke="#2BB0AD"
      strokeWidth={1.5}
      strokeLinecap="round"
      d="M12.75 7.75v9.5M17.25 12.75h-9.5"
    />
  </Svg>
)

export default PlusIcon
