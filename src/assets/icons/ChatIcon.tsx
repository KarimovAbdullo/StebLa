import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const ChatIcon = () => (
  <Svg width={25} height={25} fill="none">
    <Path
      d="M12.5 22.406a9.867 9.867 0 0 1-4.763-1.219l-.09-.05-.098.029-2.93.83h-.001a1.303 1.303 0 0 1-1.625-.927l-.242.063.242-.063a1.303 1.303 0 0 1 .01-.687l.001-.001.83-2.93.028-.099-.05-.09a9.906 9.906 0 1 1 8.688 5.144Zm-8.174-1.423 3.24-.928h.001a.558.558 0 0 1 .424.055 8.844 8.844 0 1 0-3.1-3.1.552.552 0 0 1 .054.422v.001l-.928 3.24-.124.434.433-.124Z"
      fill="#061A1A"
      stroke="#061A1A"
      strokeWidth={0.5}
      opacity={0.5}
    />
  </Svg>
)

export default ChatIcon
