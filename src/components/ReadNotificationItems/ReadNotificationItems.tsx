import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import R from 'res'

import stylesConfig from './ReadNotificationItems.style'

interface IProps {
  text: string
  // icon: ReactNode
  onPress: () => void
}

export const ReadNotificationItems = ({ text, onPress }: IProps) => {
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
          <TouchableOpacity style={styles.itemContent} onPress={onPress}>
            {text ? (
              <View style={styles.iconContent}>
                <R.icons.TelegrammIcon color="#bfe5f9" />
              </View>
            ) : null}

            <View style={styles.textContent}>
              <Typo.Title type="regular16" color="iconPrimary">
                {text}
              </Typo.Title>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}
