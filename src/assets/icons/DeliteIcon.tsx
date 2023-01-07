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

const DeliteIcon = (props: IProps) => {
  const { color = '#F54D3F', width = 17, height = 19 } = props

  return (
    <Svg width={s(width)} height={s(height)} viewBox="0 0 17 19" fill="none">
      <Path
        d="M3.2915 18.875C2.71859 18.875 2.22831 18.6712 1.82067 18.2635C1.41234 17.8552 1.20817 17.3646 1.20817 16.7917V3.25C0.913032 3.25 0.665462 3.15035 0.465462 2.95104C0.266157 2.75104 0.166504 2.50347 0.166504 2.20833C0.166504 1.91319 0.266157 1.66563 0.465462 1.46563C0.665462 1.26632 0.913032 1.16667 1.20817 1.16667H5.37484C5.37484 0.871528 5.47484 0.623958 5.67484 0.423958C5.87414 0.224653 6.12136 0.125 6.4165 0.125H10.5832C10.8783 0.125 11.1259 0.224653 11.3259 0.423958C11.5252 0.623958 11.6248 0.871528 11.6248 1.16667H15.7915C16.0866 1.16667 16.3339 1.26632 16.5332 1.46563C16.7332 1.66563 16.8332 1.91319 16.8332 2.20833C16.8332 2.50347 16.7332 2.75104 16.5332 2.95104C16.3339 3.15035 16.0866 3.25 15.7915 3.25V16.7917C15.7915 17.3646 15.5877 17.8552 15.18 18.2635C14.7717 18.6712 14.2811 18.875 13.7082 18.875H3.2915ZM3.2915 3.25V16.7917H13.7082V3.25H3.2915ZM5.37484 13.6667C5.37484 13.9618 5.47484 14.209 5.67484 14.4083C5.87414 14.6083 6.12136 14.7083 6.4165 14.7083C6.71164 14.7083 6.95921 14.6083 7.15921 14.4083C7.35852 14.209 7.45817 13.9618 7.45817 13.6667V6.375C7.45817 6.07986 7.35852 5.83229 7.15921 5.63229C6.95921 5.43299 6.71164 5.33333 6.4165 5.33333C6.12136 5.33333 5.87414 5.43299 5.67484 5.63229C5.47484 5.83229 5.37484 6.07986 5.37484 6.375V13.6667ZM9.5415 13.6667C9.5415 13.9618 9.6415 14.209 9.8415 14.4083C10.0408 14.6083 10.288 14.7083 10.5832 14.7083C10.8783 14.7083 11.1259 14.6083 11.3259 14.4083C11.5252 14.209 11.6248 13.9618 11.6248 13.6667V6.375C11.6248 6.07986 11.5252 5.83229 11.3259 5.63229C11.1259 5.43299 10.8783 5.33333 10.5832 5.33333C10.288 5.33333 10.0408 5.43299 9.8415 5.63229C9.6415 5.83229 9.5415 6.07986 9.5415 6.375V13.6667ZM3.2915 3.25V16.7917V3.25Z"
        fill={color}
      />
    </Svg>
  )
}

export default DeliteIcon