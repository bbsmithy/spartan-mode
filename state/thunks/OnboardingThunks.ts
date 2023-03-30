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

export const createReminderNotification = (hours: string, minutes: string) => async (dispatch, getState) => {
    const currentReminder = getState().TodayReducer.reminder
    if (currentReminder && currentReminder.identifier) {
        await Notifications.cancelScheduledNotificationAsync(currentReminder.identifier)
    }
    const identifier = await  Notifications.scheduleNotificationAsync({
        content: {
          title: "Complete your daily report pal 💪",
          body: "God bless the work 🙏🫡",
        },
        trigger: {
          hour: parseInt(hours),
          minute: parseInt(minutes),
          repeats: true,
        },
    })
    dispatch(todaySlice.actions.setReminder({ hours, minutes, identifier }))
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
            dispatch(createReminderNotification(state.reminderHours, state.reminderMinutes))
        }
    
        dispatch(onboardingSlice.actions.setComplete());
    } catch (err) {
        console.log({ err })
    }
}