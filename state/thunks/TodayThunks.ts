import Database from "../../database";
import { todaySlice } from "../reducers/TodayReducer";
import { getDailyReports } from "./SpartanThunks";


export const completeToday = ({ actions, total_score }:{ actions:[], total_score }) => async (dispatch, getState) => {
    Database.db.transaction(tx => {
        tx.executeSql('INSERT INTO daily_reports (actions, total_score) VALUES (?, ?)', [JSON.stringify(actions), total_score])
        tx.executeSql('SELECT * FROM daily_reports WHERE rowid = last_insert_rowid()', [], (_, {rows: { _array }}) => {
            const date = _array[0].created_at
            dispatch(todaySlice.actions.setLastCompletedReportDate(date))
            dispatch(getDailyReports(10))
        })
    }, (err) => {
        console.log({ err })
    })
}

