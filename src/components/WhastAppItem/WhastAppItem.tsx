import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import BottomSheetButtons from 'components/BottomSheetButtons'
import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { useRef } from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from 'res'
import { IWhastAppData } from 'types/data'

import stylesConfig from './WhastAppItem.styles'

interface IProps {
  item: IWhastAppData
  activeList: string[]
  setActiveList: (value: string[]) => void
}

export const WhastAppItem = ({ item, activeList, setActiveList }: IProps) => {
  const styles = useStyles(stylesConfig)
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)

  const onLongPress = () => {
    setActiveList([...activeList, item.id])
    console.log(activeList)
    if (active) {
      const delite = activeList.filter(i => i !== item.id)
      setActiveList(delite)
    }
    bottomsheetRef2.current?.present()
  }

  const active = activeList.find(i => i === item.id)

  return (
    <TouchableOpacity style={styles.container} onPress={onLongPress}>
      <View style={styles.itemContent}>
        <R.icons.WhatsAppIcon />

        <Typo.Title type="regular16" style={styles.textContent}>
          {item.title}
        </Typo.Title>
      </View>

      <R.icons.GroupIcon />
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
  )
}
