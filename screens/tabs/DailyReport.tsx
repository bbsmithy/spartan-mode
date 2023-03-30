import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native"
import { displayDate } from "../../util";

const DailyReport = ({ route }) => {

    const { report } = route.params;
    const actions = JSON.parse(report.actions);
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
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
                    <Text style={{fontSize: 23, marginBottom: 20}}>{displayDate(report.created_at)}</Text>
                </View>
            </View>
            <View style={{paddingHorizontal: 20 }}>

                <Text style={{fontSize: 40, textAlign: 'center', marginBottom: 20, marginTop: 20}}>{report.total_score}/100</Text>
                <View style={{paddingHorizontal: 10}}>
                    {actions.map(action => {
                        return (
                            <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%", marginVertical: 2}}>
                                <Text style={{fontSize: 20}}>
                                    {action.title}
                                </Text>
                                <View style={{ justifyContent: "center", alignItems: "center"}}>
                                    <Text style={{fontSize: 20, color: action.positive ? "green" : "red", fontWeight: "bold"}}>
                                        {action.positive?"+":"-"}{action.score}
                                    </Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
                
            </View>
        </View>
    )
}

export default DailyReport;