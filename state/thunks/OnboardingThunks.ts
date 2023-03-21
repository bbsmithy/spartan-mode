import Database from "../../database";
import { onboardingSlice } from "../reducers/OnboardingReducer";
import { addAction } from "./ActionsThunks";

export const completeOnboarding = () => async (dispatch, getState) => {
    try {
        const state = getState().OnboardingReducer;

        if (state.actionOneScore && state.actionOneTitle) {
            dispatch(addAction({ title: state.actionOneTitle, score: state.actionOneScore }));
        }
    
        if (state.actionTwoScore && state.actionTwoTitle) {
            dispatch(addAction({ title: state.actionTwoTitle, score: state.actionTwoScore }));
        }
    
        if (state.actionThreeScore && state.actionThreeTitle) {
            dispatch(addAction({ title: state.actionThreeTitle, score: state.actionThreeScore }));
        }
    
        dispatch(onboardingSlice.actions.setComplete());
    } catch (err) {
        console.log({ err })
    }
}


export const resetDB = () => async (dispatch) => {
    try {
        Database.db?.transaction(tx => {
            tx.executeSql('DROP TABLE actions');
            tx.executeSql('CREATE TABLE IF NOT EXISTS actions (id INTEGER PRIMARY KEY NOT NULL, title TEXT, score INTEGER)');
        })
    } catch (err) {
        console.log({ err })
    }
}