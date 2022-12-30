import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import R from 'res'

import styleConfig from './CreateProfileScreen.style'

const CreateProfileScreen = () => {
  const styles = useStyles(styleConfig)
  const [check, setCheck] = useState('')

  const freeBtn = () => {
    setCheck('standart')
  }

  const proBtn = () => {
    setCheck('pro')
  }

  return (
    <Container>
      <FocusAwareStatusBar
        backgroundColor={R.colors.white}
        barStyle={'dark-content'}
      />
      <View style={styles.main}>
        <Typo.Title type="reg28" center={true} style={styles.text}>
          Создание профиля
        </Typo.Title>

        <Typo.Title type="regular18" color="main" center={true}>
          Выберите тариф
        </Typo.Title>

        <TouchableOpacity
          onPress={freeBtn}
          style={[
            styles.freeCard,
            check === 'standart'
              ? { borderColor: R.colors.main }
              : { borderColor: R.colors.title },
          ]}>
          <Typo.Title type="regular21" style={styles.title}>
            Бесплатный тариф
          </Typo.Title>
          <Typo.Title type="regular16" color="title">
            Информация о тарифе
          </Typo.Title>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={proBtn}
          style={[
            styles.ProCard,
            check === 'pro'
              ? { borderColor: R.colors.main }
              : { borderColor: R.colors.title },
          ]}>
          <View style={styles.iconCard}>
            <R.icons.StarIcon />
          </View>

          <Typo.Title type="regular21" style={styles.title}>
            Платный тариф
          </Typo.Title>

          <Typo.Title type="regular16" color="title">
            Информация о тарифе
          </Typo.Title>
        </TouchableOpacity>

        {check === 'pro' || check === 'standart' ? (
          <CustomButton text={'Далее'} style={styles.btn} />
        ) : (
          <View style={styles.button}>
            <Text style={styles.textBtn}>Далее</Text>
          </View>
        )}
      </View>
    </Container>
  )
}

export default CreateProfileScreen
