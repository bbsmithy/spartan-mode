import Database from "../../database";
import { spartanSlice } from "../reducers/SpartanReducer";


export const getDailyReports = () => async (dispatch, getState) => {
    Database.db.transaction(tx => {
        tx.executeSql('SELECT * FROM daily_reports ORDER BY created_at DESC LIMIT 10', [], (_, {rows: { _array }}) => {
            const recentDays = _array
            const dayCountUsedForAvg = recentDays.length
            const averageScore = Math.round(recentDays.reduce((acc, curr) => acc + curr.total_score, 0) / dayCountUsedForAvg)
            dispatch(spartanSlice.actions.setAverageScore({ score: averageScore, days: dayCountUsedForAvg }))
            dispatch(spartanSlice.actions.setDailyReports(_array))
        })
    }, (err) => {
        console.log({ err })
    })
}

