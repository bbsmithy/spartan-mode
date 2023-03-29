import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Pressable } from "react-native"
import { useSelector } from "react-redux";
import ReminderTime from "../../components/ReminderTime";

const Reminder = () => {


    const navigation = useNavigation();
    const reminder = useSelector((state: any) => state.TodayReducer.reminder)

    const [hours, setHours] = useState(reminder.hours)
    const [minutes, setMinutes] = useState(reminder.hours)

    console.log(reminder)

    const onBack = () => {
        navigation.goBack();
    }

    const onChangeHours = (hours: string) => {
        setHours(hours)
    }

    const onChangeMinutes = (minutes: string) => {
        setMinutes(minutes)
    }




    return (
        <View style={{ paddingTop: 40, paddingBottom: 20, flex: 1, backgroundColor: "white"}}>
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
        </View>
    )
}

export default Reminder;