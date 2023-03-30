import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Pressable, FlatList, Image } from "react-native"
import { useSelector } from "react-redux";
import ReminderTime from "../../components/ReminderTime";
import { shadow5 } from "../../styles";
import { getSpartanLogo, spartanRanking } from "../../util";

const Reminder = () => {


    const navigation = useNavigation();
    const reminder = useSelector((state: any) => state.TodayReducer.reminder)

    const [hours, setHours] = useState(reminder.hours)
    const [minutes, setMinutes] = useState(reminder.hours)

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
                    <Text style={{fontSize: 23, marginBottom: 20}}>Badges</Text>
                </View>
            </View>
            <View style={{paddingHorizontal: 10}}>
                <FlatList
                    data={Object.keys(spartanRanking).reverse()}
                    automaticallyAdjustKeyboardInsets
                    contentContainerStyle={{ paddingBottom: 300, paddingHorizontal: 5}}
                    renderItem={({ item }) => {

                        if (item === "10") {
                            return null
                        }

                        const logo = getSpartanLogo(item)
                        const rankData = spartanRanking[item]

                        return (
                            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginVertical: 5, backgroundColor: "white", padding: 15, borderRadius: 10  }}>
                                <View style={{flex: 1}}>
                                    <Image source={logo}  style={{height: 70, width: 70}}/>
                                </View>
                                <View style={{flex: 3, paddingLeft: 12}}>
                                    <Text style={{fontSize: 18, fontWeight: '500'}}>{rankData.rank}</Text>
                                    <Text>{rankData.description}</Text>
                                    <Text>Avg. {rankData.average}/100 (over 10 days)</Text>

                                </View>
                            </View>
                        )}
                    }
                />
            </View>
        </View>
    )
}

export default Reminder;