import Database from "../../database";
import { todaySlice } from "../reducers/TodayReducer";


export const getDailyReports = (days: number) => async (dispatch, getState) => {
    Database.db.transaction(tx => {
        tx.executeSql('SELECT * FROM daily_reports', [], (_, {rows: { _array }}) => {
            dispatch()
            console.log('reports: ', _array[0])
        })
    }, (err) => {
        console.log({ err })
    })
}

