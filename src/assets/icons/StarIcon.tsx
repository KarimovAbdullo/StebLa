import * as React from 'react'
import { ColorValue } from 'react-native'
import Svg, { Path } from 'react-native-svg'
interface IIcon {
  color: ColorValue
}

const StarIcon = (props: IIcon) => {
  const { color = '#B3C2CB' } = props
  return (
    <Svg width={23} height={22} fill="none">
      <Path
        d="m11.5.974-.214.128.214-.128Zm0 0 .214.128L11.5.974ZM9.244 5.23 11.5 1.46l2.256 3.77a1.25 1.25 0 0 0 1.24.597l4.353-.586-1.54 4.114a1.25 1.25 0 0 0 .305 1.34l3.174 3.039-4.177 1.36a1.25 1.25 0 0 0-.858 1.076l-.397 4.375-3.668-2.417a1.25 1.25 0 0 0-1.376 0l-3.668 2.417-.397-4.375a1.25 1.25 0 0 0-.858-1.076l-4.177-1.36 3.173-3.038-.518-.542.518.542a1.25 1.25 0 0 0 .307-1.341L3.65 5.24l4.354.586a1.25 1.25 0 0 0 1.24-.597Z"
        stroke={color}
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default StarIcon
