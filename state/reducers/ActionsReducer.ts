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
    },
    updateAction: (state, action: PayloadAction<{title: string, score: number, id: number}>) => {
        state.actions[action.payload.id] = action.payload
    },
    removeAction: (state, action: PayloadAction<string>) => {
        const key = action.payload
        state.actionKeys = state.actionKeys.filter(k => k !== key)
        delete state.actions[key]
    }
  },
})

export default actionsSlice.reducer