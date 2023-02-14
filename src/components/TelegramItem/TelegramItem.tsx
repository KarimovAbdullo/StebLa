import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import BottomSheetButtons from 'components/BottomSheetButtons'
import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useRef, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import R from 'res'
import { IAccountsData } from 'types/data'

import stylesConfig from './TelegramItem.styles'

interface IProps {
  item: IAccountsData
  activeList: string[]
  setActiveList: (value: string[]) => void
}

export const TelegramItem = ({ item, activeList, setActiveList }: IProps) => {
  const styles = useStyles(stylesConfig)
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    setLoading(true)
  }, [])

  const onLongPress = () => {
    setActiveList([...activeList, item.telegramId])
    console.log(activeList)
    if (active) {
      const delite = activeList.filter(i => i !== item.telegramId)
      setActiveList(delite)
    }
    bottomsheetRef2.current?.present()
  }

  const active = activeList.find(i => i === item.telegramId)

  return (
    <>
      {loading ? (
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginVertical={14}>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
              <SkeletonPlaceholder.Item
                width={40}
                height={40}
                borderRadius={40}
                marginLeft={15}
              />

              <SkeletonPlaceholder.Item marginHorizontal={4}>
                <SkeletonPlaceholder.Item width={225} height={40} />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>

            <SkeletonPlaceholder.Item width={30} height={15} marginRight={15} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      ) : (
        <TouchableOpacity style={styles.container} onPress={onLongPress}>
          <View style={styles.itemContent}>
            <R.icons.TelegrammIcon />

            <Typo.Title type="regular16" style={styles.textContent}>
              {item.phone}
            </Typo.Title>
          </View>
          <TouchableOpacity
            onPress={onLongPress}
            style={{ paddingVertical: 10 }}>
            <R.icons.GroupIcon />
          </TouchableOpacity>

          <BottomSheet
            snapPoints={['20%']}
            ref={bottomsheetRef2}
            style={styles.bottomSheet}>
            <View>
              <BottomSheetButtons
                text="Открыть"
                icon={<R.icons.DisableIcon />}
                style={styles.button}
              />

              <BottomSheetButtons
                text="Удалить"
                icon={<R.icons.DeliteIcon />}
                textColor="red"
              />
            </View>
          </BottomSheet>
        </TouchableOpacity>
      )}
    </>
  )
}
