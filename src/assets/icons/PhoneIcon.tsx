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

const PhoneIcon = (props: IProps) => {
  const { color = '#B3C2CB', width = 11, height = 20 } = props

  return (
    <Svg width={s(width)} height={s(height)} viewBox="0 0 11 20" fill="none">
      <Path
        d="M8.91669 0.833374H2.25002C1.69749 0.833374 1.16758 1.05287 0.776881 1.44357C0.38618 1.83427 0.166687 2.36417 0.166687 2.91671V17.0834C0.166687 17.6359 0.38618 18.1658 0.776881 18.5565C1.16758 18.9472 1.69749 19.1667 2.25002 19.1667H8.91669C9.46922 19.1667 9.99913 18.9472 10.3898 18.5565C10.7805 18.1658 11 17.6359 11 17.0834V2.91671C11 2.36417 10.7805 1.83427 10.3898 1.44357C9.99913 1.05287 9.46922 0.833374 8.91669 0.833374ZM5.58335 18.3334C4.89169 18.3334 4.33335 17.775 4.33335 17.0834C4.33335 16.3917 4.89169 15.8334 5.58335 15.8334C6.27502 15.8334 6.83335 16.3917 6.83335 17.0834C6.83335 17.775 6.27502 18.3334 5.58335 18.3334ZM9.33335 15H1.83335V3.33337H9.33335V15Z"
        fill={color}
      />
    </Svg>
  )
}

export default PhoneIcon
