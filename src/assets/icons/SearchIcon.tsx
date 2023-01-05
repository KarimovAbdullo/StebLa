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

const SearchIcon = (props: IProps) => {
  const { color = '#061A1A', width = 15, height = 15 } = props

  return (
    <Svg width={s(width)} height={s(height)} viewBox="0 0 15 15" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.88427 9.24229C11.5219 7.08667 11.3568 3.99894 9.38909 2.03123C7.2412 -0.116652 3.7588 -0.116652 1.61091 2.03123C-0.536971 4.17911 -0.536971 7.66152 1.61091 9.80941C3.57887 11.7774 6.66712 11.9422 8.82277 10.304L12.7669 14.2479L12.8437 14.315C13.1376 14.5387 13.559 14.5163 13.8275 14.2479C14.1204 13.955 14.1204 13.4801 13.8275 13.1872L9.88427 9.24229ZM2.31802 2.73834C4.07538 0.980979 6.92462 0.980979 8.68198 2.73834C10.4393 4.4957 10.4393 7.34494 8.68198 9.1023C6.92462 10.8597 4.07538 10.8597 2.31802 9.1023C0.56066 7.34494 0.56066 4.4957 2.31802 2.73834Z"
        fill={color}
      />
    </Svg>
  )
}

export default SearchIcon
