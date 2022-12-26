import React from 'react'
import { ColorValue } from 'react-native'
// import { s } from 'react-native-size-matters'
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
  strokeWidth?: number
}

const LogoIcon = (props: IProps) => {
  // const { color = "#2BB0AD", strokeWidth = 2, size = 24 } = props
  return (
    <Svg width={76} height={75} fill="none" {...props}>
      <Circle cx={38} cy={37.5} r={37.5} fill="#2BB0AD" />
      <G clipPath="url(#a)">
        <Path
          d="M31.765 50.582a6.873 6.873 0 1 0 0 13.745H44.73a6.873 6.873 0 0 0 0-13.745H31.765Zm32.106 1.45A5.35 5.35 0 0 0 65 48.745V14.696a5.35 5.35 0 0 0-10.701 0v34.049c0 5.093 6.444 7.305 9.572 3.287ZM32.897 39.013a5.35 5.35 0 1 0 10.701 0V23.96a8.596 8.596 0 0 0-5.35-7.96 8.596 8.596 0 0 0-5.35 7.96v15.053Zm-21.402 9.732a5.35 5.35 0 0 0 1.129 3.287c3.128 4.018 9.572 1.806 9.572-3.287v-34.05a5.35 5.35 0 0 0-10.7 0v34.05Z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Rect x={13} y={10} width={50} height={54} rx={25} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default LogoIcon
