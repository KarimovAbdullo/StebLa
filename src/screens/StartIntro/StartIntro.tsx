import useSmartNavigation from 'hooks/useSmartNavigation'
import React, { useRef, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import Swiper from 'react-native-swiper'
import R from 'res'
import { lang } from 'utils/lang'

const T = R.lang.screen_start

const StartIntro = () => {
  const data = [
    {
      title: lang(`${T}.1`),
    },
    {
      title: lang(`${T}.2`),
    },
    {
      title: lang(`${T}.3`),
    },
    {
      title: lang(`${T}.4`),
    },
    {
      title: lang(`${T}.5`),
      politice: lang(`${T}.a`),
      conditions: lang(`${T}.b`),
    },
  ]
  const swiperRef = useRef<Swiper | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  // const [modalVisible, setModalVisible] = useState(true)
  const navigation = useSmartNavigation()

  const next = () => {
    if (currentPage === data.length) {
      console.log('====================================')

      return
    }
    swiperRef.current?.scrollBy(+1)
  }

  const goLogin = () => {
    navigation.navigate(R.routes.SCREEN_LOGIN)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.main}>
        <Swiper
          loop={false}
          showsHorizontalScrollIndicator={false}
          ref={swiperRef}
          paginationStyle={styles.panig}
          activeDotColor={
            data.length === currentPage ? R.colors.main : R.colors.black
          }
          dotStyle={styles.dod}
          activeDotStyle={styles.dod}
          index={0}
          onIndexChanged={index => setCurrentPage(index + 1)}
          nextButton={true}>
          {data.map((i, index) => (
            <View style={styles.card} key={index}>
              <Text style={styles.title}>{i.title}</Text>
              {i.politice ? (
                <TouchableOpacity style={styles.pol}>
                  <View style={styles.circle} />
                  <Text style={styles.text}>{i.politice}</Text>
                </TouchableOpacity>
              ) : null}
              {i.conditions ? (
                <TouchableOpacity style={styles.pol}>
                  <View style={styles.circle} />
                  <Text style={styles.text}>{i.conditions}</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          ))}
        </Swiper>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={currentPage === data.length ? goLogin : next}>
            <Text style={styles.textBtn}>
              {currentPage === data.length
                ? lang(`${T}.btnR`)
                : lang(`${T}.btnN`)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default StartIntro
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    justifyContent: 'flex-end',
    alignContent: 'center',
    height: '50%',
    backgroundColor: R.colors.white,
    paddingHorizontal: s(20),

    // position: 'absolute',
    // top: vs(180),
  },
  footer: {
    position: 'absolute',
    bottom: '30%',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: R.colors.main,
    paddingHorizontal: s(35),
    height: vs(49),
    borderRadius: 36,
  },
  dod: {
    width: 30,
    height: 3,
  },
  typo: {
    borderWidth: 1,
    textAlign: 'center',
  },

  pol: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: vs(5),
    marginLeft: s(15),
    alignSelf: 'center',
  },
  text: {
    textDecorationLine: 'underline',
    fontSize: 15,
    marginLeft: s(10),
    color: R.colors.textColor,
  },
  circle: {
    backgroundColor: R.colors.grey,
    borderRadius: vs(100),
    height: vs(4),
    width: s(4),
    marginTop: vs(5),
  },
  title: {
    fontSize: s(20),
    fontWeight: '400',
    color: R.colors.black,
    textAlign: 'center',
    lineHeight: 29.08,
    paddingHorizontal: s(20),
  },

  panig: {
    position: 'absolute',
    bottom: '44%',
  },
  textBtn: {
    color: R.colors.white,
    fontSize: 16,
  },
})
