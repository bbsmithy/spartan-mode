import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type TodayState = { 
    selectedActions: number[], 
    lastCompletedReport: any | null,
    reminder: {
        hours: string,
        minutes: string,
        identifier: string
    } | null
}
const initialState: TodayState = {
    selectedActions: [],
    lastCompletedReport: null,
    reminder: null
}

export const todaySlice = createSlice({
  name: 'today',
  initialState,
  reducers: {
    setSelectedActions: (state, action: PayloadAction<number[]>) => {
        state.selectedActions = action.payload
    },
    toggleAction: (state, action: PayloadAction<number>) => {
        const isChecked = state.selectedActions.find((id) => action.payload === id)
        if (isChecked) {
            state.selectedActions = state.selectedActions.filter((id) => id !== action.payload)
        } else {
            state.selectedActions.push(action.payload)
        }
    },
    setLastCompletedReport: (state, action: PayloadAction<any>) => {
        state.lastCompletedReport = action.payload
    },
    reset: (state) => {
        state.lastCompletedReport = null
        state.selectedActions = []
    },
    setReminder: (state, action: PayloadAction<{hours: string, minutes: string, identifier: string}>) => {
        state.reminder = action.payload
    }
  },
})

export default todaySlice.reducer