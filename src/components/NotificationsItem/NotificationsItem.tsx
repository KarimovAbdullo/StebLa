import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { ReactNode } from 'react'
import { TouchableOpacity, View } from 'react-native'

import stylesConfig from './NotificationsItem.styles'

interface IProps {
  name?: string
  label?: string
  text: string
  icon: ReactNode
}

export const NotificationsItems = ({ name, label, text, icon }: IProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <View style={styles.container}>
      {name ? (
        <Typo.Title center color="iconPrimary">
          {name}
        </Typo.Title>
      ) : null}

      {label ? (
        <TouchableOpacity>
          <Typo.Title color="main" style={styles.labelStyle}>
            {label}
          </Typo.Title>
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity style={styles.itemContent}>
        <View style={styles.iconContent}>{icon}</View>

        <View style={styles.textContent}>
          <Typo.Title type="regular16">{text}</Typo.Title>
        </View>
      </TouchableOpacity>
    </View>
  )
}
