import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import Container from 'components/Container'
import { CreateRuleItems } from 'components/CreateRuleItems/CreateRuleItems'
import { CustomButton } from 'components/CustomButton/CustomButton'
import Typo from 'components/typo'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { ReactElement, useState } from 'react'
import {
  FlatList,
  SafeAreaView,
  // TouchableOpacity,
  View,
} from 'react-native'
import R from 'res'

import styleConfig from './CreateRule.style'

export interface IData {
  id: number
  text?: string
  icon?: ReactElement
}

const CreateRuleScreen = () => {
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()

  const onYourList = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_YOUR_LIST)
  }

  const [state, setState] = useState<IData[]>([
    { id: 1, text: 'Огонь.' },
    { id: 2, text: 'Ведро' },
    { id: 3, text: 'Фабрикант' },
    { id: 4, text: 'Молоко' },
    { id: 5, text: 'Абрикос' },
    { id: 6, icon: <R.icons.PlusCardIcon /> },
    { id: 7, icon: <R.icons.PlusCardIcon /> },
    { id: 8, icon: <R.icons.PlusCardIcon /> },
    { id: 9, icon: <R.icons.PlusCardIcon /> },
    { id: 10, icon: <R.icons.PlusCardIcon /> },
  ])

  return (
    <Container>
      <FocusAwareStatusBar
        backgroundColor={R.colors.white}
        barStyle={'dark-content'}
      />
      <View style={styles.header}>
        <Typo.Title type="regular18bold" center={true}>
          Создание правила
        </Typo.Title>
        <View style={styles.icon}>
          <R.icons.HamburgerIcon />
        </View>
      </View>
      <View />

      <SafeAreaView>
        <FlatList
          data={state}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={styles.itemContent}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <CreateRuleItems item={item} state={state} setState={setState} />
          )}
        />

        <CustomButton text={'Далее'} style={styles.btn} onPress={onYourList} />
      </SafeAreaView>
    </Container>
  )
}

export default CreateRuleScreen
