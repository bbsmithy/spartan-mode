import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const todaySlice = createSlice({
  name: 'today',
  initialState: {
    selectedActions: []
  },
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
    }
  },
})

export default todaySlice.reducer