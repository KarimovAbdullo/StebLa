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

const FileIcon = (props: IProps) => {
  const { color = '#B3C2CB', width = 23, height = 17 } = props

  return (
    <Svg width={s(width)} height={s(height)} viewBox="0 0 23 17" fill="none">
      <Path
        d="M2.16683 16.8333C1.59391 16.8333 1.10364 16.6295 0.695996 16.2218C0.287663 15.8135 0.0834961 15.3229 0.0834961 14.75V2.24996C0.0834961 1.67704 0.287663 1.18676 0.695996 0.779126C1.10364 0.370792 1.59391 0.166626 2.16683 0.166626H8.41683L10.5002 2.24996H18.8335C19.4064 2.24996 19.897 2.45413 20.3054 2.86246C20.713 3.2701 20.9168 3.76038 20.9168 4.33329H9.64079L7.55746 2.24996H2.16683V14.75L4.66683 6.41663H22.4793L19.797 15.3489C19.6581 15.8003 19.4022 16.1607 19.0293 16.4302C18.6557 16.6989 18.2432 16.8333 17.7918 16.8333H2.16683ZM4.35433 14.75H17.7918L19.6668 8.49996H6.22933L4.35433 14.75ZM4.35433 14.75L6.22933 8.49996L4.35433 14.75ZM2.16683 4.33329V2.24996V4.33329Z"
        fill={color}
      />
    </Svg>
  )
}

export default FileIcon
