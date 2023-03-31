import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Pressable } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import FullButton from "../../components/FullButton";
import ReminderTime from "../../components/ReminderTime";
import { createReminderNotification } from "../../state/thunks/OnboardingThunks";

const Reminder = () => {


    const navigation = useNavigation();
    const dispatch = useDispatch();
    const reminder = useSelector((state: any) => state.TodayReducer.reminder)

    const [hours, setHours] = useState<string>(reminder?.hours)
    const [minutes, setMinutes] = useState<string>(reminder?.minutes)
    const [saveEnabled, setSaveEnabled] = useState(false)

    const onBack = () => {
        navigation.goBack();
    }

    const onChangeHours = (hours: string) => {
        setSaveEnabled(true)
        setHours(hours)
    }

    const onChangeMinutes = (minutes: string) => {
        setSaveEnabled(true)
        setMinutes(minutes)
    }


    const onSave = () => {
        dispatch(createReminderNotification(hours, minutes))
    }


    return (
        <View style={{ paddingTop: "7%", paddingBottom: 20, flex: 1, backgroundColor: "white"}}>
            <View>
                <Pressable
                    android_ripple={{ color: 'darkgrey',  radius: 25 }} 
                    style={{ 
                        borderRadius: 25,
                        height: 50, 
                        width: 50,
                        marginLeft: 5,

                        justifyContent: "center",
                        alignItems: "center"
                    }} 
                    onPress={onBack}
                >
                    <MaterialCommunityIcons name="arrow-left" size={24} color="black"  />
                </Pressable>
                <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
                    <Text style={{fontSize: 23, marginBottom: 20}}>Reminder</Text>
                </View>
            </View>
            <View style={{paddingHorizontal: 20}}>
                <ReminderTime 
                    onChangeHours={onChangeHours} 
                    onChangeMinutes={onChangeMinutes}
                    minutes={minutes}
                    hours={hours}
                />
            </View>
            <View style={{ paddingHorizontal: 20, position: "absolute", bottom: 20, width: "100%" }}>
                <FullButton 
                    text={"Save"} 
                    onPress={onSave} 
                    disabled={!saveEnabled}
                />
            </View>
        </View>
    )
}

export default Reminder;