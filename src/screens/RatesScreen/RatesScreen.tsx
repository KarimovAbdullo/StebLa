import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Typo from 'components/typo'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import R from 'res'

import stylesConfig from './RatesScreen.style'

export const RatesScreen = () => {
  const styles = useStyles(stylesConfig)
  const [touch, setTouch] = useState(false)
  const [touc, setTouc] = useState(false)

  const pressText = () => {
    setTouch(!touch)
  }

  const presText = () => {
    setTouc(!touc)
  }

  return (
    <ScrollView style={styles.main}>
      <View style={styles.itemContent}>
        <FocusAwareStatusBar backgroundColor={R.colors.white} />
        <View style={styles.container}>
          <View style={styles.iconContent}>
            <TouchableOpacity>
              <R.icons.BackIcon />
            </TouchableOpacity>

            <Typo.Title type="regular18bold">Тарифы</Typo.Title>
            <R.icons.HamburgerIcon />
          </View>
        </View>

        <View style={styles.labelCard}>
          <View style={styles.text}>
            <Typo.Title type="regular18">Вы подключены на</Typo.Title>
            <Typo.Title type="regular021" color="main">
              Бесплатный тариф
            </Typo.Title>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Изменить</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.history}>
          <View style={styles.icon}>
            <R.icons.HistoryIcon />
          </View>

          <Typo.Title type="regular016" color="textPrimary" style={styles.icon}>
            Открыть историю операций
          </Typo.Title>
        </View>

        <View style={styles.HistoryCard}>
          <View style={styles.titleCard}>
            <Typo.Title
              type="regular016"
              color="textPrimary"
              style={styles.titles}>
              Дата операции
            </Typo.Title>

            <View style={{ width: 100 }}>
              <Typo.Title
                type="regular016"
                color="textSecondary"
                style={styles.titles}>
                22.02.2022
              </Typo.Title>
            </View>
          </View>

          <View style={styles.titleCard}>
            <Typo.Title
              type="regular016"
              color="textPrimary"
              style={styles.titles}>
              Время операции
            </Typo.Title>

            <View style={{ width: 100 }}>
              <Typo.Title
                type="regular016"
                color="textSecondary"
                style={styles.titles}>
                18:23
              </Typo.Title>
            </View>
          </View>

          <View style={styles.titleCard}>
            <Typo.Title
              type="regular016"
              color="textPrimary"
              style={styles.titles}>
              Тип операции
            </Typo.Title>

            <View style={{ width: 100 }}>
              <Typo.Title
                type="regular016"
                color="textSecondary"
                style={styles.titles}>
                Открытая
              </Typo.Title>
            </View>
          </View>

          <View style={styles.titleCard}>
            <Typo.Title type="regular016" color="textPrimary">
              Сумма операции
            </Typo.Title>

            <View style={{ width: 100 }}>
              <Typo.Title type="regular016" color="textSecondary">
                2 500 Р
              </Typo.Title>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.footer} onPress={pressText}>
          <Typo.Title>Условия тарифа</Typo.Title>
          {touch ? <R.icons.UpIcon /> : <R.icons.DownIcon />}
        </TouchableOpacity>
        <View>
          {touch ? (
            <View style={styles.p}>
              <Typo.Title type="regular15" style={styles.t}>
                Не пытайтесь перевести этот вопрос, он не существует ни на одном
                языке. Бессмыссленная эта фраза только похожа на латынь, но
                латынь ли это?
              </Typo.Title>
              <Typo.Title type="regular15" style={styles.t}>
                Между тем если набрать Lorem ipsum в каком-нибудь поисковике
                Интернета, число страниц, где отыщется эта фраза, превысит 80
                тысяч. С бессмыслицами или очепятками такого не случается.
                Значит эта фраза, хоть и бессмысленная, имеет все же большое
                значение.
              </Typo.Title>
            </View>
          ) : null}
        </View>

        <View style={styles.line} />

        <TouchableOpacity style={styles.foot} onPress={presText}>
          <Typo.Title>Правила тарифа</Typo.Title>
          {touc ? <R.icons.UpIcon /> : <R.icons.DownIcon />}
        </TouchableOpacity>
        <View>
          {touc ? (
            <View style={styles.p}>
              <Typo.Title type="regular15" style={styles.t}>
                Не пытайтесь перевести этот вопрос, он не существует ни на одном
                языке. Бессмыссленная эта фраза только похожа на латынь, но
                латынь ли это?
              </Typo.Title>
              <Typo.Title type="regular15" style={styles.t}>
                Между тем если набрать Lorem ipsum в каком-нибудь поисковике
                Интернета, число страниц, где отыщется эта фраза, превысит 80
                тысяч. С бессмыслицами или очепятками такого не случается.
                Значит эта фраза, хоть и бессмысленная, имеет все же большое
                значение.
              </Typo.Title>
            </View>
          ) : null}
        </View>

        <View style={styles.line} />

        <TouchableOpacity style={styles.button}>
          <Typo.Body type="regular16" color="main">
            Оплатить тариф
          </Typo.Body>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
