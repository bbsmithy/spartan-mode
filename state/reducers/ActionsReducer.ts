import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const actionsSlice = createSlice({
  name: 'actions',
  initialState: {
    actionKeys: [],
    actions: {},
    hasEdits: false
  },
  reducers: {
    setActions: (state, action: PayloadAction<{title: string, score: number, id: number}[]>) => {
        const actions = action.payload
        state.actionKeys = actions.map(a => a.id)
        state.actions = actions.reduce((acc, a) => {
            acc[`${a.id}`] = a
            return acc
        }, {})
    },
    addAction: (state, action: PayloadAction<{title: string, score: number, id: number}>) => {
        state.actionKeys.push(action.payload.id)
        state.actions[`key`] = action.payload
        state.hasEdits = true
    },
    updateAction: (state, action: PayloadAction<{key: string, value: number | string | boolean, id: number}>) => {
        state.actions[action.payload.id][action.payload.key] = action.payload.value
        state.hasEdits = true
    },
    removeAction: (state, action: PayloadAction<string>) => {
        const key = action.payload
        state.actionKeys = state.actionKeys.filter(k => k !== key)
        delete state.actions[key]
        state.hasEdits = true
    }
  },
})

export default actionsSlice.reducer