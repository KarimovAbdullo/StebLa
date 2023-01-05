import * as React from 'react'
import { ColorValue } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
}

const SettingIcon = (props: IProps) => {
  const { color = '#B3C2CB' } = props
  return (
    <Svg width={s(34)} height={vs(33)} fill="none">
      <Path
        d="M6.11 7.147c0 3.514 2.873 6.37 6.402 6.37 3.53 0 6.402-2.856 6.402-6.37 0-3.513-2.873-6.37-6.402-6.37-3.53 0-6.402 2.857-6.402 6.37Zm1.668 0c0-2.595 2.122-4.708 4.734-4.708s4.734 2.113 4.734 4.708c0 2.596-2.122 4.708-4.734 4.708S7.778 9.743 7.778 7.147ZM1.994 27.058h9.9c.459 0 .833-.371.833-.831a.833.833 0 0 0-.834-.831H2.83v-4.093c0-2.256 1.845-4.093 4.115-4.093h7.424c.46 0 .834-.37.834-.83a.833.833 0 0 0-.834-.832H6.944c-3.188 0-5.784 2.581-5.784 5.755v4.924c0 .46.375.83.834.83Z"
        fill={color}
        stroke={color}
        strokeWidth={0.431}
      />
      <Path
        d="M24.118 26.3c-2.087 0-3.786-1.69-3.786-3.766s1.7-3.767 3.786-3.767c2.087 0 3.786 1.69 3.786 3.767 0 2.076-1.699 3.766-3.786 3.766Zm0-6.026a2.268 2.268 0 0 0-2.271 2.26c0 1.245 1.019 2.26 2.271 2.26a2.268 2.268 0 0 0 2.272-2.26c0-1.246-1.02-2.26-2.272-2.26Z"
        fill={color}
        stroke={color}
        strokeWidth={0.5}
      />
      <Path
        d="M25.325 32.327H22.91c-.782 0-1.43-.583-1.507-1.358l-.193-1.915a7.123 7.123 0 0 1-1.31-.757l-1.768.793a1.51 1.51 0 0 1-1.934-.62l-1.207-2.08a1.498 1.498 0 0 1 .427-1.977l1.558-1.115a5.96 5.96 0 0 1-.052-.764c0-.271.022-.532.052-.764l-1.558-1.115a1.498 1.498 0 0 1-.427-1.976l1.207-2.08c.39-.674 1.22-.94 1.933-.622l1.77.794a7.123 7.123 0 0 1 1.31-.757l.192-1.915a1.506 1.506 0 0 1 1.507-1.356h2.415c.782 0 1.43.583 1.507 1.357l.192 1.915c.46.204.898.458 1.31.758l1.769-.794a1.516 1.516 0 0 1 1.934.62l1.207 2.081c.39.674.206 1.523-.427 1.977l-1.558 1.115c.03.233.051.492.051.764 0 .27-.021.531-.051.763l1.558 1.115c.633.454.818 1.303.427 1.977l-1.206 2.079c-.39.672-1.219.941-1.933.62l-1.77-.793a7.123 7.123 0 0 1-1.31.757l-.193 1.917a1.506 1.506 0 0 1-1.507 1.356Zm-5.319-5.657a.76.76 0 0 1 .486.176 5.649 5.649 0 0 0 1.686.974c.273.1.465.346.494.633l.239 2.367h2.415l.238-2.367a.755.755 0 0 1 .494-.633 5.68 5.68 0 0 0 1.686-.974.76.76 0 0 1 .796-.109l2.187.983 1.207-2.081-1.936-1.383a.756.756 0 0 1-.304-.743c.056-.318.102-.642.102-.976 0-.334-.046-.658-.102-.976a.754.754 0 0 1 .305-.743l1.935-1.383-1.207-2.08-2.187.98a.762.762 0 0 1-.798-.108 5.588 5.588 0 0 0-1.686-.975.755.755 0 0 1-.493-.633l-.238-2.371H22.91l-.238 2.367a.755.755 0 0 1-.494.633 5.68 5.68 0 0 0-1.686.974.756.756 0 0 1-.796.109l-2.187-.982-1.207 2.08 1.936 1.383a.756.756 0 0 1 .304.743 5.602 5.602 0 0 0-.102.976c0 .335.046.658.102.976a.754.754 0 0 1-.305.743l-1.935 1.383 1.207 2.08 2.187-.98a.795.795 0 0 1 .31-.064Z"
        fill={color}
        stroke={color}
        strokeWidth={0.5}
      />
    </Svg>
  )
}

export default SettingIcon
