import { RootState } from "../store"

export const selectedActionsList = (state: RootState) => {
    return state.TodayReducer.selectedActions
}

export const todaysScore = (state: RootState) => {
    const actions = state.TodayReducer.selectedActions.map(id => state.ActionsReducer.actions[id])
    return actions.reduce((acc, a) => {
        if (a.positive) {
            return acc + parseInt(a.score)
        } else {
            return acc - parseInt(a.score)
        }
    }, 0)
}