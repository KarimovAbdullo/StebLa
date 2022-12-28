import useSmartNavigation from 'hooks/useSmartNavigation'
import React from 'react'
import { FC } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { s, vs } from 'react-native-size-matters'
import R from 'res'

import {
  CONTINUE_BUTTON_TEXT_DEFAULT,
  FINISH_BUTTON_TEXT_DEFAULT,
} from '../../constants'

export interface ContinueButtonProps {
  currentPage: number
  goToNextPage: () => void
  style?: ViewStyle
  totalPages: number
}

export const ContinueButton: FC<ContinueButtonProps> = ({
  currentPage,
  goToNextPage,
  style,
  totalPages,
}) => {
  const isLastPage = currentPage === totalPages - 1
  const startPage = currentPage > 0
  const navigation = useSmartNavigation()

  const goLogin = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_LOGIN)
  }

  return (
    <View>
      {startPage ? (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.button, style]}
          onPress={isLastPage ? goLogin : goToNextPage}>
          <Text style={styles.buttonText}>
            {isLastPage
              ? FINISH_BUTTON_TEXT_DEFAULT
              : CONTINUE_BUTTON_TEXT_DEFAULT}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.btn, style]}
          onPress={goToNextPage}>
          <Text style={styles.buttonText}>Ознакомиться с сервисом</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2BB0AD',
    width: s(120),
    borderRadius: 36,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: vs(50),
    height: vs(49),
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#2BB0AD',
    width: s(270),
    borderRadius: 32,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: vs(50),
    height: vs(49),
  },
})
