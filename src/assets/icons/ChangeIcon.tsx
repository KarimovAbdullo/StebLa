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

const ChangeIcon = (props: IProps) => {
  const { color = '#B3C2CB', width = 21, height = 17 } = props

  return (
    <Svg width={s(width)} height={s(height)} viewBox="0 0 21 17" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.41683 0.166626H6.3335V2.24996H3.2085C2.37969 2.24996 1.58484 2.5792 0.998787 3.16525C0.412736 3.7513 0.0834961 4.54616 0.0834961 5.37496V11.625C0.0834961 12.4538 0.412736 13.2486 0.998787 13.8347C1.58484 14.4207 2.37969 14.75 3.2085 14.75H6.3335V16.8333H8.41683V0.166626ZM6.3335 4.33329V12.6666H3.2085C2.93223 12.6666 2.66728 12.5569 2.47193 12.3615C2.27658 12.1662 2.16683 11.9012 2.16683 11.625V5.37496C2.16683 5.09869 2.27658 4.83374 2.47193 4.63839C2.66728 4.44304 2.93223 4.33329 3.2085 4.33329H6.3335Z"
        fill={color}
      />
      <Path
        d="M17.7917 12.6667H10.5V14.75H17.7917C18.6205 14.75 19.4153 14.4208 20.0014 13.8347C20.5874 13.2487 20.9167 12.4538 20.9167 11.625V5.375C20.9167 4.5462 20.5874 3.75134 20.0014 3.16529C19.4153 2.57924 18.6205 2.25 17.7917 2.25H10.5V4.33333H17.7917C18.0679 4.33333 18.3329 4.44308 18.5282 4.63843C18.7236 4.83378 18.8333 5.09873 18.8333 5.375V11.625C18.8333 11.9013 18.7236 12.1662 18.5282 12.3616C18.3329 12.5569 18.0679 12.6667 17.7917 12.6667Z"
        fill={color}
      />
    </Svg>
  )
}

export default ChangeIcon
