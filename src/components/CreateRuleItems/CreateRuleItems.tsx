import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { useRef, useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { IData } from 'screens/CreateRuleScreen/CreateRuleScreen'

import styleConfig from './CreateRuleItems.style'

interface IProps {
  item: IData
  state: IData[]
  setState: (state: IData[]) => void
}

export const CreateRuleItems = ({ state, item, setState }: IProps) => {
  const styles = useStyles(styleConfig)
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)
  const [check, setCheck] = useState(false)
  const [newText, setNewText] = useState('')

  const onBottomSheetButton = () => {
    bottomsheetRef2.current?.present()
  }

  const pressInput = () => {
    setCheck(true)
    bottomsheetRef2.current?.dismiss()
    setNewText(item.text || '')
  }

  const endInput = () => {
    const newData = state.map(i =>
      i.id === item.id ? { ...i, text: newText } : i,
    )
    setState(newData)
    setCheck(false)
  }

  return (
    <View style={styles.card} key={item.id}>
      {check ? (
        <TouchableOpacity
          style={styles.input}
          onPress={item.text ? onBottomSheetButton : pressInput}>
          <TextInput
            defaultValue={item.text}
            style={styles.tt}
            autoFocus={true}
            onEndEditing={endInput}
            onChangeText={setNewText}
            value={newText}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.item}
          onPress={item.text ? onBottomSheetButton : pressInput}>
          <Typo.Body type="regular16" color="textSecondary">
            {item.text ? item.text : item.icon}
          </Typo.Body>
        </TouchableOpacity>
      )}

      <BottomSheet snapPoints={['33%']} ref={bottomsheetRef2}>
        <View>
          <Typo.Body center type="regular22">
            Вы хотите изменить слово “{item.text ? item.text : item.icon}” ?
          </Typo.Body>

          <View style={styles.btnCard}>
            <CustomButton
              text={'Подтвердить'}
              style={styles.btnYes}
              onPress={pressInput}
            />
            <CustomButton
              text={'Отменить'}
              textStyle={styles.btnText}
              style={styles.btnNo}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  )
}
