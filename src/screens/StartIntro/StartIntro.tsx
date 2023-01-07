import Typo from 'components/typo'
import React, { useRef, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Swiper from 'react-native-swiper'

const StartIntro = () => {
  const data = [
    {
      // id: 1,
      title:
        'Теперь вам не нужно самостоятельно искать нужную вам информацию в чатах телеграмм',
    },
    {
      // id: 2,
      title:
        'Вы устанавливаете чаты и  слова, которые хотите отслеживать в телеграмм или в whatapp',
    },
    {
      // id: 3,
      title:
        'Приложение находит упоминание слов в чатах  и направляет  вам оповещение с ссылкой на сообщение в телеграм или в WhatsApp',
    },
    {
      // id: 4,
      title:
        'Для работы  в приложении вам необходимо ознакомиться  с  нашей политикой конфиденциальности и условиями использования,  и дать свое согласие.',
    },
    {
      // id: 5,
      title:
        'Даю свое согласие на обработку персональных данных,  а также согласие с:',
      politice: 'политикой конфиденциальности ',
      conditions: 'условиями использования приложения',
    },
  ]
  const swiperRef = useRef<Swiper | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  // const [modalVisible, setModalVisible] = useState(true)

  const next = () => {
    if (currentPage === data.length) {
      console.log('====================================')
      console.log('asdads')
      console.log('====================================')
      return
    }
    swiperRef.current?.scrollBy(+1)
  }

  // onPressNext = () => {
  //   if (currentPage < 5) {
  //     //@ts-ignore
  //     swiperRef.current?.scrollBy(1)
  //   }
  // }

  return (
    <View style={styles.main}>
      <Swiper
        loop={false}
        showsHorizontalScrollIndicator={false}
        ref={swiperRef}
        paginationStyle={{ position: 'absolute', bottom: '30%' }}
        activeDotColor="blue"
        dotStyle={styles.dod}
        activeDotStyle={styles.dod}
        index={0}
        onIndexChanged={index => setCurrentPage(index + 1)}
        nextButton={true}>
        {data.map((i, index) => (
          <View style={styles.card} key={index}>
            <Typo.Body type="regular22" center={true}>
              {i.title}
            </Typo.Body>
          </View>
        ))}
      </Swiper>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn} onPress={next}>
          <Text>{currentPage === data.length ? 'aaaaa' : 'bbbbb'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default StartIntro
const styles = StyleSheet.create({
  wrapper: {},
  main: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 100,
  },
  card: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    paddingHorizontal: 20,
    paddingBottom: 120,
    borderWidth: 1,
  },
  footer: {
    position: 'absolute',
    bottom: '20%',
    left: 0,

    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderRadius: 20,
  },
  dod: {
    width: 30,
    height: 3,
  },
})
