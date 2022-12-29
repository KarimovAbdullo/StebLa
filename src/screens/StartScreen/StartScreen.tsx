import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import { OnboardFlow } from 'components/OnBoard'
import React from 'react'
import { View } from 'react-native'
import { vs } from 'react-native-size-matters'
import R from 'res'

const data = [
  // {
  //   title: 'Получайте только важную информацию ',
  //   logo: <R.icons.LogoIcon />,
  //   logoTitle: <R.icons.LogoTitle />,
  // },
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
  return (
    <View>
      <FocusAwareStatusBar
        backgroundColor={R.colors.white}
        barStyle={'dark-content'}
      />
      <OnboardFlow pages={data} style={{ marginTop: vs(150) }} />
    </View>
  )
}

export default StartScreen
