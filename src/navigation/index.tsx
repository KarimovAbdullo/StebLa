import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useRef } from 'react'
import R from 'res'
import { TTheme } from 'res/theme'
import AccountsScreen from 'screens/Accounts'
import { AddTelegramCodeScreen } from 'screens/AddTelegramCodeScreen/AddTelegramCodeScreen'
import { AddTelegramNumScreen } from 'screens/AddTelegramNumScreen/AddTelegramNumScreen'
import ChatsScreen from 'screens/Chats'
import CreateProfileScreen from 'screens/CreateProfileScreen/CreateProfileScreen'
import CreateRuleScreen from 'screens/CreateRuleScreen/CreateRuleScreen'
import FirsStartScreen from 'screens/FirsStartScreen/FirsStartScreen'
import HomeScreen from 'screens/Home'
import ImportChatsScreen from 'screens/ImportChats'
import ListUsersScreen from 'screens/ListUsers'
import LoginScreen from 'screens/Login'
import { MyProfileScreen } from 'screens/MyProfileScreen/MyProfileScreen'
import NotificationsScreen from 'screens/Notifications'
import OtpScreen from 'screens/Otp'
import { RatesScreen } from 'screens/RatesScreen/RatesScreen'
// import StartIntro from 'screens/StartIntro/StartIntro'
import StartScreen from 'screens/StartScreen/StartScreen'
import YourListsScreen from 'screens/YourLists'
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
        <RootStack.Navigator
          initialRouteName={R.routes.SCREEN_ACCOUNTS}
          screenOptions={{ headerShown: false }}>
          {/* <RootStack.Screen
            component={StartIntro}
            name={R.routes.START_INTRO}
            options={{
              headerShown: false,
              headerBackTitleVisible: false,
            }}
          /> */}

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
            component={AddTelegramNumScreen}
            name={R.routes.SCREEN_ADD_TELEGRAM_NUM}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />
          <RootStack.Screen
            component={AddTelegramCodeScreen}
            name={R.routes.SCREEN_ADD_TELEGRAM_CODE}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />
          <RootStack.Screen
            component={MyProfileScreen}
            name={R.routes.MY_PROFILE_SCREEN}
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

          <RootStack.Screen
            component={CreateRuleScreen}
            name={R.routes.CREATE_RULE_SCREEN}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            component={YourListsScreen}
            name={R.routes.SCREEN_YOUR_LIST}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            component={ListUsersScreen}
            name={R.routes.SCREEN_LIST_USERS}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            component={NotificationsScreen}
            name={R.routes.SCREEN_NOTIFICATIONS}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
            }}
          />

          <RootStack.Screen
            component={RatesScreen}
            name={R.routes.RATES_SCREEN}
            options={{
              headerShown: false,
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            component={AccountsScreen}
            name={R.routes.SCREEN_ACCOUNTS}
            options={{
              headerShown: false,
              headerBackTitleVisible: false,
            }}
          />
        </RootStack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  )
}

export default Navigator
