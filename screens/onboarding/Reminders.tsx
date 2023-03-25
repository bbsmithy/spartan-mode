import { View, Text, TextInput } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import { p } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { onboardingSlice } from "../../state/reducers/OnboardingReducer";
import { RootState } from "../../state/store";

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
            <View style={{flexDirection: 'row'}}>
                <TextInput 
                    keyboardType="number-pad" 
                    placeholder="Hours"
                    value={hours}
                    onChangeText={onChangeHours}
                    style={{
                        flex: 1, 
                        backgroundColor: "#efefef", 
                        padding: 10, 
                        marginRight: 5, 
                        borderRadius: 5
                    }} 
                />
                <Text style={{
                        fontSize: 30, 
                        fontWeight: "800"
                    }}>
                    :
                </Text>
                <TextInput 
                    keyboardType="number-pad" 
                    placeholder="Minutes" 
                    value={minutes}
                    onChangeText={onChangeMinutes}
                    style={{
                        flex: 1, 
                        backgroundColor: "#efefef", 
                        padding: 10, 
                        marginLeft: 5, 
                        borderRadius: 5
                    }}
                />
            </View>
        </View>
    )
}

export default Reminder;