import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native'
import R from 'res'

import stylesConfig from './StaticWordScreen.style'

export const StaticWordScreen = () => {
  const navigation = useSmartNavigation()
  const styles = useStyles(stylesConfig)

  const goListChat = () => {
    navigation.navigate(R.routes.STATIC_LIST_CHAT_SCREEN)
  }

  const goChat = () => {
    navigation.navigate(R.routes.STATIC_CHAT_SCREEN)
  }

  return (
    <ScrollView style={styles.main}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <View style={styles.container}>
        <View style={styles.iconContent}>
          <Typo.Title type="regular18bold">Статистика</Typo.Title>
          <View style={styles.icon}>
            <R.icons.HamburgerIcon />
          </View>
        </View>
      </View>

      <View style={styles.inputContent}>
        <TextInput
          placeholder="Напишите слово, которе нужно найти"
          placeholderTextColor={R.colors.black}
          style={styles.input}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.card}>
          <Typo.Title type="regular021" color="main">
            Огонь
          </Typo.Title>
          <R.icons.DotIcon />
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.left} onPress={goChat}>
            <R.icons.ArrowIcon />
            <Typo.Title
              type="regular016"
              color="textSecondary"
              style={styles.typo}>
              Количество повтороений
            </Typo.Title>
          </TouchableOpacity>

          <View style={styles.right}>
            <Typo.Title color="main">123</Typo.Title>
          </View>
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.left} onPress={goListChat}>
            <R.icons.ChatIcon />
            <Typo.Title
              type="regular016"
              color="textSecondary"
              style={styles.typo}>
              Количество чатов
            </Typo.Title>
          </TouchableOpacity>

          <View style={styles.right}>
            <Typo.Title color="main">12</Typo.Title>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.card}>
          <Typo.Title type="regular021" color="main">
            Огонь
          </Typo.Title>
          <R.icons.DotIcon />
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.left} onPress={goChat}>
            <R.icons.ArrowIcon />
            <Typo.Title
              type="regular016"
              color="textSecondary"
              style={styles.typo}>
              Количество повтороений
            </Typo.Title>
          </TouchableOpacity>

          <View style={styles.right}>
            <Typo.Title color="main">123</Typo.Title>
          </View>
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.left} onPress={goListChat}>
            <R.icons.ChatIcon />
            <Typo.Title
              type="regular016"
              color="textSecondary"
              style={styles.typo}>
              Количество чатов
            </Typo.Title>
          </TouchableOpacity>

          <View style={styles.right}>
            <Typo.Title color="main">12</Typo.Title>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.card}>
          <Typo.Title type="regular021" color="main">
            Огонь
          </Typo.Title>
          <R.icons.DotIcon />
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.left} onPress={goChat}>
            <R.icons.ArrowIcon />
            <Typo.Title
              type="regular016"
              color="textSecondary"
              style={styles.typo}>
              Количество повтороений
            </Typo.Title>
          </TouchableOpacity>

          <View style={styles.right}>
            <Typo.Title color="main">123</Typo.Title>
          </View>
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.left} onPress={goListChat}>
            <R.icons.ChatIcon />
            <Typo.Title
              type="regular016"
              color="textSecondary"
              style={styles.typo}>
              Количество чатов
            </Typo.Title>
          </TouchableOpacity>

          <View style={styles.right}>
            <Typo.Title color="main">12</Typo.Title>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
