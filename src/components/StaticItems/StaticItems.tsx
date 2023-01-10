import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import R from 'res'
import { IChatsInfo } from 'types/data'

import stylesConfig from './StaticItems.style'

interface IProps {
  activeList: string[]
  item: IChatsInfo
  setActiveList: (value: string[]) => void
}

export const StaticItems = ({ item, activeList }: IProps) => {
  const styles = useStyles(stylesConfig)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    setLoading(true)
  }, [])

  // const onLongPress = () => {
  //   setActiveList([...activeList, item.id])
  //   console.log(activeList)
  //   if (active) {
  //     const delite = activeList.filter(i => i !== item.id)
  //     setActiveList(delite)
  //   }
  // }

  const active = activeList.find(i => i === item.id)

  return (
    <>
      {loading ? (
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={8}>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
              <SkeletonPlaceholder.Item
                width={60}
                height={60}
                borderRadius={30}
                marginLeft={10}
              />

              <SkeletonPlaceholder.Item marginHorizontal={10}>
                <SkeletonPlaceholder.Item width={225} height={10} />
                <SkeletonPlaceholder.Item
                  marginTop={6}
                  width={225}
                  height={10}
                />
                <SkeletonPlaceholder.Item
                  marginTop={6}
                  width={100}
                  height={10}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>

            <SkeletonPlaceholder.Item
              width={30}
              height={15}
              borderRadius={4}
              marginRight={10}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      ) : (
        <TouchableOpacity
          activeOpacity={0.4}
          style={[styles.container, active ? styles.active : {}]}>
          <Image source={item.image} style={styles.imageContent} />
          <View style={styles.textContent}>
            <View>
              <Typo.TextButton type="regular16">{item.name}</Typo.TextButton>
              {item.fayl ? (
                <Typo.TextButton type="regular15">{item.fayl}</Typo.TextButton>
              ) : null}

              {item.text ? (
                <Typo.TextButton color="textColor">{item.text}</Typo.TextButton>
              ) : null}
            </View>

            <TouchableOpacity style={styles.checkContent}>
              <R.icons.DotIcon />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    </>
  )
}
