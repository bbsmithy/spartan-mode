import { RootState } from "../store"

export const actionsList = (state: RootState) => {
    return state.ActionsReducer.actionKeys.map(key => state.ActionsReducer.actions[key]).filter(a => a !== undefined)
}

export const hasEdits = (state: RootState) => {
    return state.ActionsReducer.actionIdsWithEdits.length > 0
}