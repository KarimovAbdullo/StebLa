import React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import R from 'res'
const data = [
  {
    id: '1',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: <R.icons.LogoIcon />,
    bg: '#59b2ab',
  },
  {
    id: '2',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./../../assets/images/t.png'),
    bg: '#febe29',
  },
  {
    id: '3',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('./../../assets/images/t.png'),
    bg: '#22bcb5',
  },
]

const StartScreen = () => {
  
  const renderBottomSection = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 2,
            paddingVertical: 2,
            borderWidth: 1,
          }}>
          {[...Array(data.length)].map((_, index) => (
            <View
              key={index}
              style={{
                width: 80,
                height: 10,
                borderRadius: 10,
                backgroundColor: 'red',
                marginRight: 10,
              }}
            />
          ))}
        </View>
      </SafeAreaView>
    )
  }

  const renderFlatlistItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: 100,
        }}>
        <View>
          {item.}
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', borderWidth: 1 }}>
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderFlatlistItem}
      />
      <View>{renderBottomSection()}</View>
    </SafeAreaView>
  )
}

// import Container from 'components/Container'
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

//           <Typo.Title type="regular19" color="black" style={styles.re}>
//             Получайте только важную информацию{' '}
//           </Typo.Title>
//         </View>
//       </Container>
//     </SafeAreaView>
//   )
// }

export default StartScreen
