import { View, Text, TextInput } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import { p } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { onboardingSlice } from "../../state/reducers/OnboardingReducer";
import { RootState } from "../../state/store";
import ReminderTime from "../../components/ReminderTime";

const Reminder = () => {

    const dispatch = useDispatch()

    const minutes = useSelector((state: RootState) => state.OnboardingReducer.reminderMinutes)
    const hours = useSelector((state: RootState) => state.OnboardingReducer.reminderHours)

    const onChangeHours = (hours: string) => {
        dispatch(onboardingSlice.actions.setReminderHours(hours))
    }

    const onChangeMinutes = (minutes: string) => {
        dispatch(onboardingSlice.actions.setReminderMinutes(minutes))
    }


    return (
        <View>
            <Text style={[p, {marginBottom: 25}]}>
                Set your daily reminder to check off your actions (24hr format)
            </Text>
            <ReminderTime 
                onChangeHours={onChangeHours} 
                onChangeMinutes={onChangeMinutes} 
                hours={hours} 
                minutes={minutes}
            />
        </View>
    )
}

export default Reminder;