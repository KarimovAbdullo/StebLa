import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Animated, Easing, StyleSheet, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'

export function Dot({
  selected,
  paginationSelectedColor,
}: {
  selected: boolean
  paginationSelectedColor: string
  paginationColor: string
}) {
  const sizeAnim = useRef(new Animated.Value(8)).current
  const [isSelected, setIsSelected] = useState(selected)

  useEffect(() => {
    if (selected) {
      Animated.timing(sizeAnim, {
        toValue: 11,
        duration: 200,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start()
    } else {
      Animated.timing(sizeAnim, {
        toValue: 8,
        duration: 250,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start()
    }
    setIsSelected(selected)
  }, [selected])

  return (
    <View>
      <Animated.View
        style={[
          styles.dot,
          { backgroundColor: selected ? paginationSelectedColor : '#F7F8F8' },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    width: s(30),
    height: vs(3),
    marginHorizontal: 4,
  },
  line: {
    width: s(40),
    height: vs(3),
  },
})
