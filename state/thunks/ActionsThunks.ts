import Database from "../../database";
import { actionsSlice } from "../reducers/ActionsReducer";


export const getAllActions = () => async (dispatch, getState) => {
    Database.db?.transaction(tx => {
        tx.executeSql('SELECT * FROM actions', [], (_, { rows: { _array } }) => {
            console.log("get", _array)
            dispatch(actionsSlice.actions.setActions(_array))
        })
    })
}

export const addAction = (action: { title: string, score: string, positive: boolean }) => async (dispatch) => {
    Database.db?.transaction(tx => {
        const positive = action.positive ? 1 : 0;
        tx.executeSql('INSERT INTO actions (title, score, positive) VALUES (?, ?, ?) ', [action.title, parseInt(action.score), positive])
        tx.executeSql('SELECT * FROM actions WHERE rowid = last_insert_rowid()', [], (_, {rows: { _array }}) => {
            console.log("add", _array[0])
            dispatch(actionsSlice.actions.addAction(_array[0]))
            dispatch(getAllActions())
        })
    }, (err) => {
        console.log({ err })
    })
}

export const updateAction = (action: { id: number, title: string, score: string, positive: boolean }) => async (dispatch) => {
    Database.db?.transaction(tx => {
        const positive = action.positive ? 1 : 0;
        tx.executeSql('UPDATE actions SET title = ?, score = ?, positive = ? WHERE id = ?', [action.title, parseInt(action.score), positive, action.id])
        tx.executeSql('SELECT * FROM actions WHERE id = ?', [action.id], (_, {rows: { _array }}) => {
            console.log("update", _array[0])
            dispatch(actionsSlice.actions.updateAction(_array[0]))
            dispatch(getAllActions())
        })
    }, (err) => {
        console.log({ err })
    })
}