import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    selectedActions: [],
    lastCompletedReportDate: null
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
    setLastCompletedReportDate: (state, action: PayloadAction<string>) => {
        state.lastCompletedReportDate = action.payload
    },
    reset: (state) => {
        state.lastCompletedReportDate = null
        state.selectedActions = []
    }
  },
})

export default todaySlice.reducer