import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from 'react-native-svg'

interface IProps {
  width?: number
  height?: number
  color?: ColorValue
  strokeWidth?: number
}

const TelegrammIcon = (props: IProps) => {
  const { width = 36, height = 36, color = '#2AABEE', strokeWidth = 1 } = props

  return (
    <Svg width={s(width)} height={s(height)} viewBox="0 0 36 36" fill="none">
      <G clip-path="url(#clip0_128_697)">
        <Path
          d="M18 0C13.2272 0 8.64562 1.89759 5.27344 5.27203C1.89777 8.64781 0.000935072 13.226 0 18C0 22.772 1.89844 27.3535 5.27344 30.728C8.64562 34.1024 13.2272 36 18 36C22.7728 36 27.3544 34.1024 30.7266 30.728C34.1016 27.3535 36 22.772 36 18C36 13.228 34.1016 8.64647 30.7266 5.27203C27.3544 1.89759 22.7728 0 18 0Z"
          fill={color}
        />
        <Path
          d="M8.14825 17.8099C13.3964 15.5239 16.8951 14.0167 18.6445 13.2885C23.6451 11.2092 24.6829 10.8481 25.3608 10.8359C25.5098 10.8335 25.8417 10.8703 26.0583 11.0454C26.2383 11.193 26.2889 11.3927 26.3142 11.5329C26.3367 11.673 26.3676 11.9922 26.3423 12.2414C26.0723 15.0877 24.8995 21.9946 24.3033 25.1826C24.0529 26.5314 23.5551 26.9837 23.0742 27.0278C22.0279 27.124 21.2348 26.3371 20.2223 25.6736C18.6389 24.635 17.7445 23.9887 16.2061 22.9753C14.4286 21.8042 15.5817 21.1604 16.5942 20.1085C16.8586 19.8332 21.4654 15.644 21.5526 15.264C21.5639 15.2165 21.5751 15.0393 21.4683 14.9459C21.3642 14.8523 21.2095 14.8843 21.097 14.9096C20.9367 14.9456 18.4083 16.6185 13.5033 19.928C12.7861 20.4213 12.1364 20.6618 11.5514 20.6491C10.9101 20.6353 9.67263 20.2857 8.75294 19.987C7.62794 19.6206 6.73075 19.4268 6.8095 18.8044C6.84888 18.4804 7.29607 18.1488 8.14825 17.8099Z"
          fill="white"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_128_697"
          x1="18"
          y1="0"
          x2="18"
          y2="36"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color={color} />
          <Stop offset={strokeWidth} stop-color={color} />
        </LinearGradient>
        <ClipPath id="clip0_128_697">
          <Rect width={s(width)} height={s(height)} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default TelegrammIcon
