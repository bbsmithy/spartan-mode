import { isToday } from "../../util"
import { RootState } from "../store"

export const selectedActionsList = (state: RootState) => {
    return state.TodayReducer.selectedActions
}

export const todaysScore = (state: RootState) => {
    const actions = state.TodayReducer.selectedActions.map(id => state.ActionsReducer.actions[id])
    const totalScore = actions.reduce((acc, a) => {
        if (a.positive) {
            return acc + parseInt(a.score)
        } else {
            return acc - parseInt(a.score)
        }
    }, 0)

    if (totalScore > 100) {
        return 100
    }
    return totalScore
}

export const lastCompletedReport = (state: RootState) => {
    return state.TodayReducer.lastCompletedReport
}

export const hasCompletedToday = (state: RootState) => {

    console.log({ lastCompletedReport: state.TodayReducer.lastCompletedReport })

    return isToday(state.TodayReducer.lastCompletedReport?.created_at)
}