import { spartanRanking } from "../../util"
import { RootState } from "../store"


export const dailyReportsList = (state: RootState) => {
    return state.SpartanReducer.dailyReports
}

export const averageScore = (state: RootState) => {
    return state.SpartanReducer.averageScore
}

export const daysUsedForAverage = (state: RootState) => {
    return state.SpartanReducer.daysUsedForAverage
}

export const spartanRank = (state: RootState) => {
    const averageScore = state.SpartanReducer.averageScore
    if (averageScore <=0 || !averageScore) {
        return spartanRanking['0']
    } else {
        return spartanRanking[`${Math.floor(averageScore / 10)}`]
    }
}