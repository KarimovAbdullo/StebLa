import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { View } from 'react-native'

import stylesConfig from './ExampleComponent.styles'

interface IProps {
    
}


export const ExampleComponent = (props: IProps) => {
  const {} = props
  const styles = useStyles(stylesConfig)

  return (
    <View />
    
  )
}
