import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { useRef } from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from 'res'

import styleConfig from './CreateRule.style'

const CreateRuleScreen = () => {
  const styles = useStyles(styleConfig)
  const bottomsheetRef = useRef<BottomSheetModal | null>(null)
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)

  const onBottomSheetButton = () => {
    bottomsheetRef2.current?.present()
  }

  return (
    <Container>
      <FocusAwareStatusBar
        backgroundColor={R.colors.white}
        barStyle={'dark-content'}
      />
      <View style={styles.header}>
        <Typo.Title type="regular18bold" center={true}>
          Создание правила
        </Typo.Title>
        <View style={styles.icon}>
          <R.icons.HamburgerIcon />
        </View>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.item} onPress={onBottomSheetButton}>
          <Typo.Body type="regular16" color="textSecondary">
            Огонь
          </Typo.Body>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={onBottomSheetButton}>
          <Typo.Body type="regular16" color="textSecondary">
            Ведро
          </Typo.Body>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.item} onPress={onBottomSheetButton}>
          <Typo.Body type="regular16" color="textSecondary">
            Фабрикант
          </Typo.Body>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={onBottomSheetButton}>
          <Typo.Body type="regular16" color="textSecondary">
            Молоко
          </Typo.Body>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.item} onPress={onBottomSheetButton}>
          <Typo.Body type="regular16" color="textSecondary">
            Абрикос
          </Typo.Body>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={onBottomSheetButton}>
          <Typo.Body type="regular16" color="textSecondary">
            <R.icons.PlusCardIcon />
          </Typo.Body>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.item} onPress={onBottomSheetButton}>
          <Typo.Body type="regular16" color="textSecondary">
            <R.icons.PlusCardIcon />
          </Typo.Body>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={onBottomSheetButton}>
          <Typo.Body type="regular16" color="textSecondary">
            <R.icons.PlusCardIcon />
          </Typo.Body>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.item} onPress={onBottomSheetButton}>
          <Typo.Body type="regular16" color="textSecondary">
            <R.icons.PlusCardIcon />
          </Typo.Body>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={onBottomSheetButton}>
          <Typo.Body type="regular16" color="textSecondary">
            <R.icons.PlusCardIcon />
          </Typo.Body>
        </TouchableOpacity>
      </View>

      <CustomButton text={'Далее'} style={styles.btn} />

      <BottomSheet snapPoints={['33%']} ref={bottomsheetRef2}>
        <View>
          <Typo.Title center type="reg21">
            Вы хотите изменить слово “Огонь” ?
          </Typo.Title>

          <View style={styles.btnCard}>
            <CustomButton text={'Подтвердить'} style={styles.btnYes} />
            <CustomButton
              text={'Отменить'}
              textStyle={styles.btnText}
              style={styles.btnNo}
            />
          </View>
        </View>
      </BottomSheet>
    </Container>
  )
}

export default CreateRuleScreen
