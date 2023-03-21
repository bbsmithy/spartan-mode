import { RootState } from "../store"

export const actionsList = (state: RootState) => {
    return state.ActionsReducer.actionKeys.map(key => state.ActionsReducer.actions[key]).filter(a => a !== undefined)
}