import { RootState } from "../store"

export const getScreenIndex = (state: RootState) => state.OnboardingReducer.screenIndex;
export const getActionOneTitle = (state: RootState) => state.OnboardingReducer.actionOneTitle;
export const getActionTwoTitle = (state: RootState) => state.OnboardingReducer.actionTwoTitle;
export const getActionOneScore = (state: RootState) => state.OnboardingReducer.actionOneScore;
export const getActionTwoScore = (state: RootState) => state.OnboardingReducer.actionTwoScore;
export const getNegativeActionTitle = (state: RootState) => state.OnboardingReducer.negativeActionTitle;
export const getNegativeActionScore = (state: RootState) => state.OnboardingReducer.negativeActionScore;
export const isOnboardingComplete = (state: RootState) => state.OnboardingReducer.complete; 
