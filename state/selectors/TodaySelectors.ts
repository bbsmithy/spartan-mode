import { RootState } from "../store"

export const selectedActionsList = (state: RootState) => {
    return state.TodayReducer.selectedActions
}

export const todaysScore = (state: RootState) => {
    const actions = state.TodayReducer.selectedActions.map(id => state.ActionsReducer.actions[id])
    return actions.reduce((acc, a) => {
        return acc + a.score
    }, 0)
}