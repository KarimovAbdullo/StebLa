import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import BottomSheetButtons from 'components/BottomSheetButtons'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { useRef } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
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
    bottomsheetRef.current?.present()
  }

  const closed = () => {
    bottomsheetRef.current?.close()
  }

  const active = activeList.find(i => i === item.id)

  return (
    <TouchableOpacity style={styles.container} onPress={onLongPress}>
      <View style={styles.itemContent}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContent}>
          <Typo.TextButton color="textPrimary" type="regular16">
            {item.text}
          </Typo.TextButton>

          <Typo.TextButton color="iconPrimary">{item.subTitle}</Typo.TextButton>
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
              Вы точно хотите дать пользователю “Имя пользователя” VIP статус ?
            </Typo.Title>
          </View>

          <View style={styles.contentButtons}>
            <CustomButton text={'Подтвердить'} style={styles.buttonShet} />

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
  )
}
