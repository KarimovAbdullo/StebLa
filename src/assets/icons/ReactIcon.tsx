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

const ReactIcon = (props: IProps) => {
  const { color = '#B3C2CB', width = 20, height = 16 } = props

  return (
    <Svg width={s(width)} height={s(height)} viewBox="0 0 20 16" fill="none">
      <Path
        d="M0.125 4.41667H11.5833V6.5H0.125V4.41667ZM0.125 2.33333H11.5833V0.25H0.125V2.33333ZM0.125 10.6667H7.41667V8.58333H0.125V10.6667ZM15.7604 7.40625L16.5 6.66667C16.5964 6.5701 16.7108 6.49349 16.8368 6.44122C16.9629 6.38894 17.0979 6.36204 17.2344 6.36204C17.3708 6.36204 17.5059 6.38894 17.6319 6.44122C17.7579 6.49349 17.8724 6.5701 17.9687 6.66667L18.7083 7.40625C19.1146 7.8125 19.1146 8.46875 18.7083 8.875L17.9687 9.61458L15.7604 7.40625ZM15.0208 8.14583L9.5 13.6667V15.875H11.7083L17.2292 10.3542L15.0208 8.14583Z"
        fill={color}
      />
    </Svg>
  )
}

export default ReactIcon
