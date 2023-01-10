import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import BottomSheetButtons from 'components/BottomSheetButtons'
import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useRef, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import R from 'res'
import { IListInfo } from 'types/data'

import stylesConfig from './ListItem.styles'

interface IProps {
  activeList: string[]
  item: IListInfo
  setActiveList: (value: string[]) => void
}

export const ListItem = ({ item, activeList, setActiveList }: IProps) => {
  const styles = useStyles(stylesConfig)
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)
  const [loading, setLoading] = useState(false)

  const onLongPress = () => {
    setActiveList([...activeList, item.id])
    console.log(activeList)
    if (active) {
      const delite = activeList.filter(i => i !== item.id)
      setActiveList(delite)
    }
    bottomsheetRef2.current?.present()
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    setLoading(true)
  }, [])

  const active = activeList.find(i => i === item.id)

  return (
    <>
      {loading ? (
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderWidth={5.3}
            borderColor={R.colors.lightGrey}
            marginBottom={0.5}
            paddingHorizontal={10}
            paddingVertical={10}>
            <SkeletonPlaceholder.Item width={290} height={30} />

            <SkeletonPlaceholder.Item width={28} height={30} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      ) : (
        <TouchableOpacity style={styles.container} onPress={onLongPress}>
          <View style={styles.textContent}>
            <Typo.TextButton color="textPrimary" type="regular16">
              {item.text}
            </Typo.TextButton>
          </View>

          <TouchableOpacity style={styles.checkContent} onPress={onLongPress}>
            <R.icons.GroupIcon />
          </TouchableOpacity>

          <BottomSheet
            snapPoints={['35%']}
            ref={bottomsheetRef2}
            style={styles.bottomSheet}>
            <View>
              <BottomSheetButtons
                text="Открыть"
                icon={<R.icons.FileIcon />}
                style={styles.button}
              />

              <BottomSheetButtons
                text="Переименовать"
                icon={<R.icons.ChangeIcon />}
                style={styles.button}
              />

              <BottomSheetButtons
                text="Редактировать"
                icon={<R.icons.ReactIcon />}
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
