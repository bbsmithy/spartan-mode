import { configureStore } from '@reduxjs/toolkit'
import OnboardingReducer from './reducers/OnboardingReducer'
import ActionsReducer from './reducers/ActionsReducer'
import TodayReducer from './reducers/TodayReducer'

const store = configureStore({
  reducer: {
    OnboardingReducer,
    ActionsReducer,
    TodayReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;

export default store