import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import R from 'res'
import { IChat } from 'types/data'

import stylesConfig from './ChatsItem.styles'

interface IProps {
  activeList: string[]
  item: IChat
  setActiveList: (value: string[]) => void
}

export const ChatsItem = ({ item, activeList, setActiveList }: IProps) => {
  const styles = useStyles(stylesConfig)
  const [loading, setLoading] = useState(false)
  const navigate = useSmartNavigation()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    setLoading(true)
  }, [])

  const onStatickChats = () => {
    navigate.navigate(R.routes.STATIC_CHAT_SCREEN)
  }

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
              width={22}
              height={22}
              borderRadius={20}
              marginRight={10}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      ) : (
        <TouchableOpacity
          style={[styles.container, active ? styles.active : {}]}
          // onLongPress={onLongPress}
          onPress={onStatickChats}>
          <Image source={item.thumbnail} style={styles.imageContent} />
          <View style={styles.textContent}>
            <View>
              <Typo.TextButton type="regular16">{item.name}</Typo.TextButton>
              {item.fayl ? (
                <Typo.TextButton type="regular15">{item.fayl}</Typo.TextButton>
              ) : null}

              {item ? (
                <Typo.TextButton color="textColor">{item.text}</Typo.TextButton>
              ) : null}
            </View>

            <TouchableOpacity
              style={styles.checkContent}
              //  onPress={onLongPress}
            >
              {active ? <R.icons.ActiveCheckIcon /> : <R.icons.CheckIcon />}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    </>
  )
}
