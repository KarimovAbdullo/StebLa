import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import R from 'res'

export const SLIDER_WIDTH = Dimensions.get('window').width + 30
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)
interface IProps {
  id: number
  name: string
  icon?: any
  iconText?: any
}
interface IData {
  item: IProps
}

const data = [
  {
    id: 1,
    name: 'React JS',
    icon: <R.icons.LogoIcon />,
    iconText: <R.icons.LogoTitle />,
  },
  {
    id: 2,
    name: 'JavaScript',
  },
  {
    id: 3,
    name: 'Node JS',
  },
]

const renderItem = ({ item }: IData) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <R.icons.LogoIcon />
      <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}>
        {item.name}
      </Text>
    </View>
  )
}

const App = () => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
    </View>
  )
}
export default App

// import Container from 'components/Container'
// import { CustomButton } from 'components/CustomButton/CustomButton'
// import Typo from 'components/typo'
// import { useStyles } from 'hooks/useStyles'
// import React from 'react'
// import { SafeAreaView, View } from 'react-native'
// import R from 'res'

// // import R from 'res'
// import stylesConfig from './StartScreen.style'

// const StartScreen = () => {
//   const styles = useStyles(stylesConfig)

//   return (
//     <SafeAreaView>
//       <Container>
//         <View style={styles.main}>
//           <R.icons.LogoIcon />
//           <View style={styles.logo}>
//             <R.icons.LogoTitle />
//           </View>
//           <View style={styles.card}>
//             <Typo.Title type="regular19" color="black" style={styles.re}>
//               Получайте только важную информацию
//             </Typo.Title>
//             <CustomButton text={'Ознакомиться с сервисом'} />
//           </View>
//         </View>
//       </Container>
//     </SafeAreaView>
//   )
// }

// export default StartScreen
