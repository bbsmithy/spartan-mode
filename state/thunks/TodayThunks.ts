import Database from "../../database";
import { todaySlice } from "../reducers/TodayReducer";
import { getDailyReports } from "./SpartanThunks";


export const completeToday = ({ actions, total_score }:{ actions:[], total_score }) => async (dispatch) => {
    Database.db.transaction(tx => {
        tx.executeSql('INSERT INTO daily_reports (actions, total_score) VALUES (?, ?)', [JSON.stringify(actions), total_score])
        tx.executeSql('SELECT * FROM daily_reports WHERE rowid = last_insert_rowid()', [], (_, {rows: { _array }}) => {
            dispatch(todaySlice.actions.setLastCompletedReport(_array[0]))
            dispatch(getDailyReports(10))
        })
    }, (err) => {
        console.log({ err })
    })
}

export const updateToday = ({ actions, total_score, id } : { actions:[], total_score: number, id:number }) => async (dispatch) => {
    Database.db.transaction(tx => {
        tx.executeSql('UPDATE daily_reports SET actions=?, total_score=? WHERE id=?', [JSON.stringify(actions), total_score, id])
        tx.executeSql('SELECT * FROM daily_reports WHERE id=?', [id], (_, {rows: { _array }}) => {
            dispatch(todaySlice.actions.setLastCompletedReport(_array[0]))
            dispatch(getDailyReports(10))
        })
    }, (err) => {
        console.log({ err })
    })
}

