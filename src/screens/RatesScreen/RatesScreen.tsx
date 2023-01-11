import { BottomSheetModal } from '@gorhom/bottom-sheet'
import BottomSheet from 'components/BottomSheet'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Menu from 'components/Menu/Menu'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useRef, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import R from 'res'
import { lang } from 'utils/lang'

import stylesConfig from './RatesScreen.style'
const T = R.lang.screen_rates

export const RatesScreen = () => {
  const styles = useStyles(stylesConfig)
  const [touch, setTouch] = useState(false)
  const [touc, setTouc] = useState(false)
  const navigate = useSmartNavigation()
  const bottomsheetRef2 = useRef<BottomSheetModal | null>(null)

  const back = () => {
    navigate.goBack()
  }

  const pressText = () => {
    setTouch(!touch)
  }

  const presText = () => {
    setTouc(!touc)
  }

  const menuBar = () => {
    bottomsheetRef2.current?.present()
  }

  return (
    <ScrollView style={styles.main}>
      <View style={styles.itemContent}>
        <FocusAwareStatusBar backgroundColor={R.colors.white} />
        <View style={styles.container}>
          <View style={styles.iconContent}>
            <TouchableOpacity onPress={back}>
              <R.icons.BackIcon />
            </TouchableOpacity>

            <Typo.Title type="regular18bold">{lang(`${T}.head`)}</Typo.Title>

            <TouchableOpacity style={styles.size} onPress={menuBar}>
              <R.icons.HamburgerIcon />
              <BottomSheet snapPoints={['50%']} ref={bottomsheetRef2}>
                <Menu />
              </BottomSheet>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.labelCard}>
          <View style={styles.text}>
            <Typo.Title type="regular18">{lang(`${T}.mini`)}</Typo.Title>
            <Typo.Title type="regular021" color="main">
              {lang(`${T}.big`)}
            </Typo.Title>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>{lang(`${T}.miniBtn`)}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.history}>
          <View style={styles.icon}>
            <R.icons.HistoryIcon />
          </View>

          <Typo.Title type="regular016" color="textPrimary" style={styles.icon}>
            {lang(`${T}.history`)}
          </Typo.Title>
        </View>

        <View style={styles.HistoryCard}>
          <View style={styles.titleCard}>
            <Typo.Title
              type="regular016"
              color="textPrimary"
              style={styles.titles}>
              {lang(`${T}.date`)}
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
              {lang(`${T}.time`)}
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
              {lang(`${T}.type`)}
            </Typo.Title>

            <View style={{ width: 100 }}>
              <Typo.Title
                type="regular016"
                color="textSecondary"
                style={styles.titles}>
                {lang(`${T}.typeA`)}
              </Typo.Title>
            </View>
          </View>

          <View style={styles.titleCard}>
            <Typo.Title type="regular016" color="textPrimary">
              {lang(`${T}.price`)}
            </Typo.Title>

            <View style={{ width: 100 }}>
              <Typo.Title type="regular016" color="textSecondary">
                2 500 Р
              </Typo.Title>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.footer} onPress={pressText}>
          <Typo.Title>{lang(`${T}.topH`)}</Typo.Title>
          {touch ? <R.icons.UpIcon /> : <R.icons.DownIcon />}
        </TouchableOpacity>
        <View>
          {touch ? (
            <View style={styles.p}>
              <Typo.Title type="regular15" style={styles.t}>
                {lang(`${T}.topP`)}
              </Typo.Title>
              <Typo.Title type="regular15" style={styles.t}>
                {lang(`${T}.topP2`)}
              </Typo.Title>
            </View>
          ) : null}
        </View>

        <View style={styles.line} />

        <TouchableOpacity style={styles.foot} onPress={presText}>
          <Typo.Title>{lang(`${T}.bottomH`)}</Typo.Title>
          {touc ? <R.icons.UpIcon /> : <R.icons.DownIcon />}
        </TouchableOpacity>
        <View>
          {touc ? (
            <View style={styles.p}>
              <Typo.Title type="regular15" style={styles.t}>
                {lang(`${T}.bottomP`)}
              </Typo.Title>
              <Typo.Title type="regular15" style={styles.t}>
                {lang(`${T}.bottomP2`)}
              </Typo.Title>
            </View>
          ) : null}
        </View>

        <View style={styles.line} />

        <TouchableOpacity style={styles.button}>
          <Typo.Body type="regular16" color="main">
            {lang(`${T}.btnText`)}
          </Typo.Body>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
