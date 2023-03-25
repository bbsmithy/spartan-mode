import Database from "../../database";
import { spartanSlice } from "../reducers/SpartanReducer";


export const getDailyReports = (days: number) => async (dispatch, getState) => {
    Database.db.transaction(tx => {
        tx.executeSql('SELECT * FROM daily_reports', [], (_, {rows: { _array }}) => {
            const last10Days = _array.slice(-10)
            const averageScore = Math.round(last10Days.reduce((acc, curr) => acc + curr.total_score, 0) / last10Days.length)
            dispatch(spartanSlice.actions.setAverageScore(averageScore))
            dispatch(spartanSlice.actions.setDailyReports(_array))
        })
    }, (err) => {
        console.log({ err })
    })
}

