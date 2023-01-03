import * as React from 'react'
import { ColorValue } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
}

const AlertIcon = (props: IProps) => {
  const { color = '#B3C2CB' } = props

  return (
    <Svg width={s(28)} height={vs(28)} fill="none">
      <Path
        d="M27.716 4.683a1.08 1.08 0 0 1-1.525.016L23.314 1.88a1.081 1.081 0 1 1 1.51-1.547l2.877 2.818a1.081 1.081 0 0 1 .015 1.532ZM4.698 1.813A1.079 1.079 0 0 0 3.173.29L.297 3.166A1.079 1.079 0 1 0 1.82 4.69l2.877-2.876Zm16.69 22.348 2.007 2.014a1.078 1.078 0 1 1-1.527 1.521l-2.383-2.394a12.43 12.43 0 0 1-10.965 0l-2.383 2.397a1.078 1.078 0 1 1-1.527-1.522l2.006-2.013a12.584 12.584 0 1 1 14.773 0v-.003Zm-7.386.26A10.427 10.427 0 1 0 3.576 13.996a10.438 10.438 0 0 0 10.426 10.427Zm3.596-11.505H15.08V10.4a1.079 1.079 0 1 0-2.157 0v2.516h-2.517a1.079 1.079 0 1 0 0 2.158h2.517v2.516a1.078 1.078 0 1 0 2.157 0v-2.516h2.517a1.079 1.079 0 0 0 0-2.158Z"
        fill={color}
      />
    </Svg>
  )
}

export default AlertIcon
