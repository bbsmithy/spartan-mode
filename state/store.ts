import { configureStore } from '@reduxjs/toolkit'
import OnboardingReducer from './reducers/OnboardingReducer'

const store = configureStore({
  reducer: {
    OnboardingReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;

export default store