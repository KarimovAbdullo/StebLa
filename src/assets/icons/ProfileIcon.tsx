import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const ProfileIcon = () => (
  <Svg width={19} height={21} fill="none">
    <Path
      d="M15.545 10.642a.78.78 0 1 0-1.099 1.11 6.983 6.983 0 0 1 2.085 4.998c0 .956-2.739 2.344-7.031 2.344s-7.031-1.39-7.031-2.346a6.983 6.983 0 0 1 2.058-4.97.781.781 0 1 0-1.105-1.105A8.538 8.538 0 0 0 .906 16.75c0 2.537 4.428 3.906 8.594 3.906 4.166 0 8.594-1.369 8.594-3.906a8.53 8.53 0 0 0-2.55-6.108Z"
      fill="#B3C2CB"
    />
    <Path
      d="M9.5 11.281a5.47 5.47 0 1 0-5.469-5.469 5.475 5.475 0 0 0 5.469 5.47Zm0-9.375a3.906 3.906 0 1 1 0 7.813 3.906 3.906 0 0 1 0-7.813Z"
      fill="#B3C2CB"
    />
  </Svg>
)

export default ProfileIcon
