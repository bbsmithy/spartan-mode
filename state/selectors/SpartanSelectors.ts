import { RootState } from "../store"


export const dailyReportsList = (state: RootState) => {
    return state.SpartanReducer.dailyReports
}