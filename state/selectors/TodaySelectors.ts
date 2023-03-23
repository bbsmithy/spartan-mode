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

export const hasCompletedTodaysReport = (state: RootState) => {
    if (state.TodayReducer.lastCompletedReportDate) {
        const todaysDate = new Date();
        const lastCompletedReportDate = new Date(state.TodayReducer.lastCompletedReportDate)
        if (todaysDate.getDate() === lastCompletedReportDate.getDate() && todaysDate.getMonth() === lastCompletedReportDate.getMonth() && todaysDate.getFullYear() === lastCompletedReportDate.getFullYear()) {
            return true
        } else {
            return false
        }
    }
    return false
}