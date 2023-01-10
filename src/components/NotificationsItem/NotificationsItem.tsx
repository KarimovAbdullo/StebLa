import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { ReactNode, useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import R from 'res'

import stylesConfig from './NotificationsItem.styles'

interface IProps {
  name?: string
  label?: string
  text: string
  icon: ReactNode
}

export const NotificationsItems = ({ name, label, text, icon }: IProps) => {
  const styles = useStyles(stylesConfig)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    setLoading(true)
  }, [])

  return (
    <>
      {loading ? (
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginTop={30}
            borderWidth={10}
            borderRadius={10}
            paddingVertical={10}
            borderColor={R.colors.lightGrey}
            paddingHorizontal={10}>
            <SkeletonPlaceholder.Item
              width={40}
              height={40}
              borderRadius={40}
            />

            <SkeletonPlaceholder.Item marginHorizontal={10}>
              <SkeletonPlaceholder.Item
                width={100}
                height={20}
                marginBottom={5}
              />

              <SkeletonPlaceholder.Item
                width={260}
                height={20}
                marginBottom={5}
              />

              <SkeletonPlaceholder.Item
                width={160}
                height={20}
                marginBottom={5}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      ) : (
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
      )}
    </>
  )
}
