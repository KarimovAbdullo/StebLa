import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import R from 'res'
import { IStaticWordInfo } from 'types/data'
import { lang } from 'utils/lang'

import stylesConfig from './StaticWordItem.styles'

interface IProps {
  item: IStaticWordInfo
  goListChat: () => void
  goChat: () => void
}

const T = R.lang.screen_staticWord

export const StaticWordItem = ({ item, goListChat, goChat }: IProps) => {
  const styles = useStyles(stylesConfig)

  const [loading, setLoading] = useState(false)

  console.log(loading)

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
            flexDirection="column"
            justifyContent="space-between"
            paddingHorizontal={18}
            paddingVertical={40}>
            <SkeletonPlaceholder.Item
              justifyContent="space-between"
              alignItems="center"
              marginBottom={20}
              flexDirection="row">
              <SkeletonPlaceholder.Item width={70} height={20} />

              <SkeletonPlaceholder.Item width={30} height={10} />
            </SkeletonPlaceholder.Item>

            <SkeletonPlaceholder.Item
              flexDirection="row"
              paddingVertical={5}
              alignItems="center"
              marginBottom={12}
              justifyContent="space-between">
              <SkeletonPlaceholder.Item flexDirection="row">
                <SkeletonPlaceholder.Item
                  width={30}
                  height={30}
                  borderRadius={30}
                  marginRight={10}
                />

                <SkeletonPlaceholder.Item>
                  <SkeletonPlaceholder.Item width={130} height={15} />

                  <SkeletonPlaceholder.Item
                    width={120}
                    height={15}
                    marginTop={5}
                  />

                  <SkeletonPlaceholder.Item
                    width={60}
                    height={15}
                    marginTop={5}
                  />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>
              <SkeletonPlaceholder.Item width={45} height={30} />
            </SkeletonPlaceholder.Item>

            <SkeletonPlaceholder.Item
              flexDirection="row"
              paddingVertical={5}
              alignItems="center"
              justifyContent="space-between">
              <SkeletonPlaceholder.Item flexDirection="row">
                <SkeletonPlaceholder.Item
                  width={30}
                  height={30}
                  borderRadius={30}
                  marginRight={10}
                />

                <SkeletonPlaceholder.Item>
                  <SkeletonPlaceholder.Item width={130} height={15} />

                  <SkeletonPlaceholder.Item
                    width={60}
                    height={15}
                    marginTop={5}
                  />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>
              <SkeletonPlaceholder.Item width={30} height={30} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      ) : (
        <View style={styles.section}>
          <View style={styles.card}>
            <Typo.Title type="regular021" color="main">
              {item.name}
            </Typo.Title>
            <R.icons.DotIcon />
          </View>

          <View style={styles.card}>
            <TouchableOpacity style={styles.left} onPress={goChat}>
              <R.icons.ArrowIcon />
              <Typo.Title
                type="regular016"
                color="textSecondary"
                style={styles.typo}>
                {lang(`${T}.retry`)}
              </Typo.Title>
            </TouchableOpacity>

            <View style={styles.right}>
              <Typo.Title color="main">123</Typo.Title>
            </View>
          </View>

          <View style={styles.card}>
            <TouchableOpacity style={styles.left} onPress={goListChat}>
              <R.icons.ChatIcon />
              <Typo.Title
                type="regular016"
                color="textSecondary"
                style={styles.typo}>
                {lang(`${T}.chat`)}
              </Typo.Title>
            </TouchableOpacity>

            <View style={styles.right}>
              <Typo.Title color="main">12</Typo.Title>
            </View>
          </View>
        </View>
      )}
    </>
  )
}
