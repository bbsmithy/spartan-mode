import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const generateKey = () => {
    return Math.random().toString(36).substr(2, 9)
}

export const actionsSlice = createSlice({
  name: 'actions',
  initialState: {
    actionKeys: [],
    actions: {}
  },
  reducers: {
    addAction: (state, action: PayloadAction<{title: string, score: number}>) => {
        const key = generateKey()
        state.actionKeys.push(key)
        state.actions[key] = { ...action.payload, key }
    },
    updateAction: (state, action: PayloadAction<{title: string, score: number, key: string}>) => {
        state.actions[action.payload.key] = action.payload
    },
    removeAction: (state, action: PayloadAction<string>) => {
        const key = action.payload
        state.actionKeys = state.actionKeys.filter(k => k !== key)
        delete state.actions[key]
    }
  },
})

// Action creators are generated for each case reducer function
export const {
    addAction,
    updateAction,
    removeAction
} = actionsSlice.actions

export default actionsSlice.reducer