import { combineReducers, configureStore } from '@reduxjs/toolkit'
import OnboardingReducer from './reducers/OnboardingReducer'
import ActionsReducer from './reducers/ActionsReducer'
import TodayReducer from './reducers/TodayReducer'
import { FLUSH, REGISTER, PAUSE, REHYDRATE, PERSIST, PURGE, persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const reducer = combineReducers({
  OnboardingReducer,
  ActionsReducer,
  TodayReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }).concat(logger)
})
export const persistor = persistStore(store)
