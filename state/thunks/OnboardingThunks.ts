import Database from "../../database";
import { onboardingSlice } from "../reducers/OnboardingReducer";
import { addAction } from "./ActionsThunks";

export const completeOnboarding = () => async (dispatch, getState) => {
    try {
        const state = getState().OnboardingReducer;

        if (state.actionOneScore && state.actionOneTitle) {
            dispatch(addAction({ title: state.actionOneTitle, score: state.actionOneScore, positive: true }));
        }
    
        if (state.actionTwoScore && state.actionTwoTitle) {
            dispatch(addAction({ title: state.actionTwoTitle, score: state.actionTwoScore, positive: true }));
        }
    
        if (state.negativeActionScore && state.negativeActionTitle) {
            dispatch(addAction({ title: state.negativeActionTitle, score: state.negativeActionScore, positive: false }));
        }
    
        dispatch(onboardingSlice.actions.setComplete());
    } catch (err) {
        console.log({ err })
    }
}