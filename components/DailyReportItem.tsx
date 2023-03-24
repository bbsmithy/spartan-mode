import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Text } from "react-native"
import { Pressable, View } from "react-native"
import { shadow5 } from "../styles"
import { isToday } from "../util"



const displayDate = (date: string) => {
    if (isToday(date)) {
        return "Today"
    }
    return new Date(date).toDateString()
}

const DailyReportItem = ({ item }) => {
    return (
        <View style={{
            ...shadow5,
            backgroundColor: "white",
            borderRadius: 15,
            marginTop: 25, overflow: "hidden",
        }}>
            <Pressable android_ripple={{color: "light-gray"}} style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 20
            }}>
                <View>
                    <Text style={{fontSize: 15, fontWeight: "400"}}>
                        {displayDate(item.created_at)}
                    </Text>
                </View>
                <View>
                    <Text style={{fontSize: 15, fontWeight: "500"}}>
                        {item.total_score}/100
                    </Text>
                    <View style={{height: 10, borderRadius: 5, backgroundColor: "gray", marginTop: 3}}>
                        <View style={{height: 10, borderRadius: 5, backgroundColor: "green", width: `${item.total_score}%`}} />
                    </View>
                </View>
                <View>
                    <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
                </View>
            </Pressable>
        </View>
    )
}

export default DailyReportItem