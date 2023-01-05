import * as React from 'react'
import { ColorValue } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
}

const WriteIcon = (props: IProps) => {
  const { color = '#B3C2CB' } = props
  return (
    <Svg width={s(25)} height={vs(25)} fill="none" {...props}>
      <Path
        d="M19.792 12.548c-.576 0-1.042.467-1.042 1.042v8.333c0 .574-.467 1.042-1.042 1.042H3.125a1.043 1.043 0 0 1-1.042-1.042V7.34c0-.574.467-1.042 1.042-1.042h8.333a1.041 1.041 0 1 0 0-2.083H3.125A3.129 3.129 0 0 0 0 7.34v14.583a3.129 3.129 0 0 0 3.125 3.125h14.583a3.129 3.129 0 0 0 3.125-3.125V13.59a1.04 1.04 0 0 0-1.041-1.042Z"
        fill={color}
      />
      <Path
        d="m20.4 6.99-7.432 7.433-2.836.567.566-2.835 7.434-7.432L20.4 6.99ZM23.653 1.469c.304.304.47.703.47 1.134 0 .431-.166.83-.47 1.133l-.735.735-2.268-2.268.735-.734a1.606 1.606 0 0 1 2.268 0Z"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  )
}

export default WriteIcon
