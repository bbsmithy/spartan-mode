import Database from "../../database";
import { onboardingSlice } from "../reducers/OnboardingReducer";
import { addAction } from "./ActionsThunks";
import * as Notifications from "expo-notifications";
import { todaySlice } from "../reducers/TodayReducer";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

const createReminderNotification = async (hours: number, minutes: number) => {
    return Notifications.scheduleNotificationAsync({
        content: {
          title: "Complete your daily report pal 💪",
          body: "God bless the work 🙏🫡",
        },
        trigger: {
          hour: hours,
          minute: minutes,
          repeats: true,
        },
    })
}

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

        console.log("STATE HERE ", state)

        if (state.reminderHours && state.reminderMinutes) {
            const identifier = await createReminderNotification(parseInt(state.reminderHours), parseInt(state.reminderMinutes))
            dispatch(todaySlice.actions.setReminder({ hours: state.reminderHours, minutes: state.reminderMinutes, identifier }))
        }
    
        dispatch(onboardingSlice.actions.setComplete());
    } catch (err) {
        console.log({ err })
    }
}