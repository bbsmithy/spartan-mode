import Database from "../../database";
import { spartanSlice } from "../reducers/SpartanReducer";


export const getDailyReports = (days: number) => async (dispatch, getState) => {
    Database.db.transaction(tx => {
        tx.executeSql('SELECT * FROM daily_reports', [], (_, {rows: { _array }}) => {
            dispatch(spartanSlice.actions.setDailyReports(_array))
        })
    }, (err) => {
        console.log({ err })
    })
}

