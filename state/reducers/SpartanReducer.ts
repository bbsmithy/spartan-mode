import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type SpartanState = { dailyReports: any[] }
const initialState: SpartanState = {
    dailyReports: []
}

export const spartanSlice = createSlice({
  name: 'spartan',
  initialState,
  reducers: {
    setDailyReports: (state, action: PayloadAction<any[]>) => {
        state.dailyReports = action.payload
    }
  },
})

export default spartanSlice.reducer