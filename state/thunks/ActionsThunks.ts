import Database from "../../database";
import { actionsSlice } from "../reducers/ActionsReducer";


const spartan = new Database('spartan');


export const selectActions = (action: { title: string, score: string }) => async (dispatch, getState) => {
    spartan.db?.transaction(tx => {
        tx.executeSql('SELECT * FROM actions', [], (_, { rows: { _array } }) => {})
    })
}

export const addAction = (action: { title: string, score: number }) => async (dispatch) => {
    spartan.db?.transaction(tx => {
        tx.executeSql('INSERT INTO actions (title, score) VALUES (?, ?)', [action.title, action.score], (_, { rows: { _array } }) => {
            const id = _array[0].id
            dispatch(actionsSlice.actions.addAction({ ...action, id }))
        })
    })
}