import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type SpartanState = { dailyReports: any[], averageScore: number, daysUsedForAverage: number }
const initialState: SpartanState = {
    dailyReports: [],
    averageScore: 0,
    daysUsedForAverage: 0
}

export const spartanSlice = createSlice({
  name: 'spartan',
  initialState,
  reducers: {
    setDailyReports: (state, action: PayloadAction<any[]>) => {
        state.dailyReports = action.payload
    },
    setAverageScore: (state, avg: PayloadAction<{score: number, days: number}>) => {
        state.averageScore = avg.payload.score
        state.daysUsedForAverage = avg.payload.days
    }
  },
})

export default spartanSlice.reducer