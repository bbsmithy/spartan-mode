import { RootState } from "../store"


export const dailyReportsList = (state: RootState) => {
    return state.SpartanReducer.dailyReports
}

export const averageScore = (state: RootState) => {
    return state.SpartanReducer.averageScore
}