import { configureStore } from '@reduxjs/toolkit'
import OnboardingReducer from './reducers/OnboardingReducer'
import ActionsReducer from './reducers/ActionsReducer'

const store = configureStore({
  reducer: {
    OnboardingReducer,
    ActionsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;

export default store