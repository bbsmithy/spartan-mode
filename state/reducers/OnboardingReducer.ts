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
    reminderHours: "",
    reminderMinutes: "",
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
    setReminderHours: (state, action: PayloadAction<string>) => {
        state.reminderHours = action.payload
    },
    setReminderMinutes: (state, action: PayloadAction<string>) => {
        state.reminderMinutes = action.payload
    },
    setComplete: (state) => {
        state.complete = true
    },
    reset: (state) => {
        state.screenIndex = 0
        state.actionOneTitle = ""
        state.actionTwoTitle = ""
        state.actionOneScore = ""
        state.actionTwoScore = ""
        state.negativeActionScore = ""
        state.negativeActionTitle = ""
        state.reminderHours = ""
        state.reminderMinutes = ""
        state.complete = false
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