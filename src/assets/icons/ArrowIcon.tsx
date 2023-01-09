import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const ArrowIcon = () => (
  <Svg width={25} height={25} fill="none">
    <G opacity={0.5} fill="#061A1A">
      <Path d="M18.022 10.938h6.144a.39.39 0 0 1 .3.64l-3.072 3.688a.39.39 0 0 1-.6 0l-3.072-3.688a.39.39 0 0 1 .3-.64ZM.835 14.062h6.144a.39.39 0 0 0 .3-.64L4.207 9.734a.39.39 0 0 0-.6 0L.535 13.422a.39.39 0 0 0 .3.64Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 4.688a7.795 7.795 0 0 0-6.026 2.84.781.781 0 1 1-1.205-.994 9.378 9.378 0 0 1 16.477 4.404h-1.59a7.816 7.816 0 0 0-7.656-6.25Zm-7.656 9.375a7.815 7.815 0 0 0 13.683 3.409.78.78 0 0 1 1.311.116.781.781 0 0 1-.107.878 9.377 9.377 0 0 1-16.476-4.404h1.589Z"
      />
    </G>
  </Svg>
)

export default ArrowIcon
