import { OnboardFlow } from 'components/OnBoard'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { vs } from 'react-native-size-matters'
import R from 'res'

import stylesConfig from './StartScreen.style'
const data = [
  {
    title: 'Получайте только важную информацию ',
    url: require('../../assets/images/t.png'),
    logo: require('../../assets/images/t.png'),
    logoTitle: <R.icons.LogoTitle />,
  },
  {
    title:
      'Теперь вам не нужно самостоятельно искать нужную вам информацию в чатах телеграмм',
  },
  {
    title:
      'Вы устанавливаете чаты и  слова, которые хотите отслеживать в телеграмм или в whatapp',
  },
  {
    title:
      'Приложение находит упоминание слов в чатах  и направляет  вам оповещение с ссылкой на сообщение в телеграм или в WhatsApp',
  },
  {
    title:
      'Для работы  в приложении вам необходимо ознакомиться  с  нашей политикой конфиденциальности и условиями использования,  и дать свое согласие.',
  },
  {
    title:
      'Даю свое согласие на обработку персональных данных,  а также согласие с:',
    politice: 'политикой конфиденциальности ',
    conditions: 'условиями использования приложения',
  },
]
const StartScreen = () => {
  const styles = useStyles(stylesConfig)

  return (
    <View>
      <StatusBar />
      <OnboardFlow pages={data} style={{ marginTop: vs(150) }} />
    </View>
  )
}

export default StartScreen
