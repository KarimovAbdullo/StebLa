import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useRef } from 'react'
import R from 'res'
import { TTheme } from 'res/theme'
import ChatsScreen from 'screens/Chats'
import CreateProfileScreen from 'screens/CreateProfileScreen/CreateProfileScreen'
import FirsStartScreen from 'screens/FirsStartScreen/FirsStartScreen'
import HomeScreen from 'screens/Home'
import ImportChatsScreen from 'screens/ImportChats'
import LoginScreen from 'screens/Login'
import OtpScreen from 'screens/Otp'
import StartScreen from 'screens/StartScreen/StartScreen'
import { TNavigationParams } from 'types/navigation'

const Navigator = ({ theme }: { theme: TTheme }) => {
  const RootStack = createStackNavigator()
  const navigationRef = useNavigationContainerRef<TNavigationParams>()
  const routeNameRef = useRef()

  return (
    <NavigationContainer
      theme={theme}
      ref={navigationRef}
      onReady={() => {
        // @ts-ignore
        routeNameRef.current = navigationRef.getCurrentRoute()?.name
      }}>
      <BottomSheetModalProvider>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen
            component={FirsStartScreen}
            name={R.routes.SCREEN_FIRS_START}
            options={{
              headerShown: false,
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            component={StartScreen}
            name={R.routes.SCREEN_START}
            options={{
              headerShown: false,
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            component={LoginScreen}
            name={R.routes.SCREEN_LOGIN}
            options={{
              headerShown: false,
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            component={OtpScreen}
            name={R.routes.SCREEN_OTP}
            options={{
              headerShown: false,
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            component={HomeScreen}
            name={R.routes.SCREEN_HOME}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            component={CreateProfileScreen}
            name={R.routes.SCREEN_CREATE_PROFILE}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            component={ImportChatsScreen}
            name={R.routes.SCREEN_IMPORT_CHATS}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            component={ChatsScreen}
            name={R.routes.SCREEN_CHATS}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />
        </RootStack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  )
}

export default Navigator
