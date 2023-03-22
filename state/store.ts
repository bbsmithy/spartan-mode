import { configureStore } from '@reduxjs/toolkit'
import OnboardingReducer from './reducers/OnboardingReducer'
import ActionsReducer from './reducers/ActionsReducer'
import TodayReducer from './reducers/TodayReducer'

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const store = configureStore({
  reducer: {
    OnboardingReducer,
    ActionsReducer,
    TodayReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>;

export default store