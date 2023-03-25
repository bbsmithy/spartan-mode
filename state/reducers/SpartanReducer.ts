import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type SpartanState = { dailyReports: any[], averageScore: number }
const initialState: SpartanState = {
    dailyReports: [],
    averageScore: 0
}

export const spartanSlice = createSlice({
  name: 'spartan',
  initialState,
  reducers: {
    setDailyReports: (state, action: PayloadAction<any[]>) => {
        state.dailyReports = action.payload
    },
    setAverageScore: (state, score: PayloadAction<number>) => {
        state.averageScore = score.payload
    }
  },
})

export default spartanSlice.reducer