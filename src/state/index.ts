import { combineReducers, configureStore } from '@reduxjs/toolkit'
import Reactotron from 'reactotron'
import { persistStore } from 'redux-persist'

import { accountReducer } from './accounts/slice'
import { addTelegramReducer } from './addTelegramAcaunt/slice'
import { adminReducer } from './admin.tsx/slice'
import { chatReducer } from './chats/slice'
import { NotificationReducer } from './notification/slice'
import { userReducer } from './user/slice'

const rootReducer = combineReducers({
  user: userReducer,
  chats: chatReducer,
  addTelegram: addTelegramReducer,
  Notification: NotificationReducer,
  accounts: accountReducer,
  admin: adminReducer,
})

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    enhancers: [
      // @ts-ignore
      Reactotron.createEnhancer(),
    ],
  })
}

const store = setupStore()

const persistor = persistStore(store)

export { persistor, store }

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
