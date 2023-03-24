import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

const initialState = {
    screenIndex: 0,
    actionOneTitle: "",
    actionTwoTitle: "",
    actionOneScore: "",
    actionTwoScore: "",
    negativeActionScore: "",
    negativeActionTitle: "",
    complete: false
  }

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setScreenIndex: (state, action: PayloadAction<number>) => {
        state.screenIndex = action.payload
    },
    setActionOneTitle: (state, action: PayloadAction<string>) => {
        state.actionOneTitle = action.payload
    },
    setActionTwoTitle: (state, action: PayloadAction<string>) => {
        state.actionTwoTitle = action.payload
    },
    setActionOneScore: (state, action: PayloadAction<string>) => {
        state.actionOneScore = action.payload
    },
    setActionTwoScore: (state, action: PayloadAction<string>) => {
        state.actionTwoScore = action.payload
    },
    setNegativeActionScore: (state, action: PayloadAction<string>) => {
        state.negativeActionScore = action.payload
    },
    setNegativeActionTitle: (state, action: PayloadAction<string>) => {
        state.negativeActionTitle = action.payload
    },
    setComplete: (state) => {
        state.complete = true
    },
    reset: (state) => {
        state = initialState
    }
  },
})

// Action creators are generated for each case reducer function
export const {
    setScreenIndex,
    setActionOneScore,
    setActionOneTitle,
    setActionTwoScore,
    setActionTwoTitle,
    setNegativeActionScore,
    setNegativeActionTitle,
    setComplete
} = onboardingSlice.actions

export default onboardingSlice.reducer