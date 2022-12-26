import { createStackNavigator } from '@react-navigation/stack'
import { useColors } from 'hooks/useColors'
import React from 'react'
import R from 'res'
import HomeScreen from 'screens/Home'
import { getDefaultScreenOptions } from 'utils/navigation'

const HomeStack = () => {
  const Stack = createStackNavigator()
  const colors = useColors()

  return (
    <Stack.Navigator screenOptions={getDefaultScreenOptions(colors)}>
      <Stack.Screen
        component={HomeScreen}
        name={R.routes.SCREEN_HOME}
        options={{
          cardStyle: {
            backgroundColor: colors.backroundPrimary,
          },
          headerShown: false,
          headerTitleAlign: 'center',
          title: 'Mobile Market',
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
