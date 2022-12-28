// import Typo from 'components/typo'
import React from 'react'
import { FC, ReactElement } from 'react'
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
  // COLOR_MUTED_TEXT_DEFAULT,
  COLOR_TEXT_DEFAULT,
  // HORIZONTAL_PADDING_DEFAULT,
  VERTICAL_PADDING_DEFAULT,
} from '../../constants'

export interface PageProps {
  style?: ViewStyle
  titleStyle?: ViewStyle
  subtitleStyle?: ViewStyle
  currentPage?: number
  totalPages?: number
  data: PageData
  goToNextPage?: () => void
  goToPreviousPage?: () => void
  textAlign?: 'left' | 'center' | 'right'
  width?: number
}

export interface PageData {
  title?: string
  imageUri?: string
  logo?: ReactElement
  logoTitle?: ReactElement
  metadata?: any
  politice?: string
  conditions?: string
}

export const Page: FC<PageProps> = ({
  style,

  data,
  // currentPage,
  // totalPages,
  // goToNextPage,
  // goToPreviousPage,

  width,
  //@ts-ignore
}) => {
  return (
    <View style={[styles.container, style, { width: width }]}>
      <View style={styles.logoCard}>
        {data.logo ? <R.icons.LogoIcon /> : null}
      </View>
      <View style={{ alignItems: 'center', marginTop: vs(26) }}>
        {data.logoTitle ? <R.icons.LogoTitle /> : null}
      </View>

      <View style={styles.bottomContainerText}>
        <Text style={styles.title}>{data?.title}</Text>
      </View>

      <View style={{ marginTop: vs(20) }}>
        {data.politice ? (
          <TouchableOpacity style={styles.pol}>
            <View style={styles.circle} />
            <Text style={styles.text}>{data.politice}</Text>
          </TouchableOpacity>
        ) : null}
        {data.conditions ? (
          <TouchableOpacity style={styles.pol}>
            <View style={styles.circle} />
            <Text style={styles.text}>{data.conditions}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: COLOR_TEXT_DEFAULT,
    textAlign: 'center',
    lineHeight: 22.5,
    paddingHorizontal: s(50),
  },
  subtitle: {
    // fontSize: 18,
    // fontWeight: '600',
    // lineHeight: 26,
    // color: COLOR_MUTED_TEXT_DEFAULT,
    // textAlign: 'center',
    // borderWidth: 1,
    // width: '100%',
  },
  image: {
    marginTop: VERTICAL_PADDING_DEFAULT,
    width: '100%',
  },
  bottomContainer: {
    // flex: 1,
    // justifyContent: 'flex-end',
    // flexDirection: 'column',
  },
  bottomContainerText: {
    marginTop: vs(27),
    // marginBottom: vs(50),
    width: '100%',
  },
  logoCard: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: vs(30),
  },
  pol: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  text: {
    textDecorationLine: 'underline',
    fontSize: 15,
    marginLeft: 10,
  },
  circle: {
    backgroundColor: 'grey',
    borderRadius: vs(100),
    height: 5,
    width: 4,
    marginTop: vs(5),
  },
})
