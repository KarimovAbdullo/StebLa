import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import BottomSheetButtons from 'components/BottomSheetButtons'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useRef, useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import R from 'res'
import { IListUserInfo } from 'types/data'

import stylesConfig from './ListUserItem.styles'

interface IProps {
  activeList: string[]
  item: IListUserInfo
  setActiveList: (value: string[]) => void
}

export const ListUserItem = ({ item, activeList, setActiveList }: IProps) => {
  const styles = useStyles(stylesConfig)
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)
  const bottomsheetRef = useRef<BottomSheetModal | null>(null)
  const navigate = useSmartNavigation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    setLoading(true)
  }, [])

  const onLongPress = () => {
    setActiveList([...activeList, item.id])
    console.log(activeList)
    if (active) {
      const delite = activeList.filter(i => i !== item.id)
      setActiveList(delite)
    }
    bottomsheetRef2.current?.present()
  }

  const onPress = () => {
    bottomsheetRef2.current?.close()

    bottomsheetRef.current?.present()
  }

  const closed = () => {
    bottomsheetRef.current?.dismiss()
  }

  const active = activeList.find(i => i === item.id)

  const onRules = async () => {
    bottomsheetRef2.current?.dismiss()
    bottomsheetRef.current?.dismiss()
    // @ts-ignore
    navigate.navigate(R.routes.RATES_SCREEN)
  }

  return (
    <>
      {loading ? (
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginVertical={16.5}>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
              <SkeletonPlaceholder.Item
                width={40}
                height={40}
                borderRadius={30}
                marginLeft={15}
              />

              <SkeletonPlaceholder.Item marginHorizontal={10}>
                <SkeletonPlaceholder.Item width={225} height={15} />
                <SkeletonPlaceholder.Item
                  marginTop={6}
                  width={225}
                  height={15}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>

            <SkeletonPlaceholder.Item width={30} height={15} marginRight={15} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      ) : (
        <TouchableOpacity style={styles.container} onPress={onLongPress}>
          <View style={styles.itemContent}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContent}>
              <Typo.TextButton color="textPrimary" type="regular16">
                {item.text}
              </Typo.TextButton>

              <Typo.TextButton color="iconPrimary">
                {item.subTitle}
              </Typo.TextButton>
            </View>
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
                text="Дать статус “VIP”"
                icon={<R.icons.CaronaIcon />}
                style={styles.button}
                textColor="main"
                onPress={onPress}
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

          <BottomSheet snapPoints={['35%']} ref={bottomsheetRef}>
            <>
              <View style={styles.textContainer}>
                <Typo.Title center type="reg21">
                  Вы точно хотите дать пользователю “Имя пользователя” VIP
                  статус ?
                </Typo.Title>
              </View>

              <View style={styles.contentButtons}>
                <CustomButton
                  text={'Подтвердить'}
                  style={styles.buttonShet}
                  onPress={onRules}
                />

                <CustomButton
                  text={'Отменить'}
                  style={styles.buttonShet2}
                  textStyle={styles.textButton}
                  onPress={closed}
                />
              </View>
            </>
          </BottomSheet>
        </TouchableOpacity>
      )}
    </>
  )
}
