import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Text, View, Image, FlatList, Pressable } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getDailyReports } from "../../state/thunks/SpartanThunks"
import { shadow5 } from "../../styles"
import { dailyReportsList } from "../../state/selectors/SpartanSelectors"
import { MaterialCommunityIcons } from "@expo/vector-icons"


const Actions = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const dailyReports = useSelector(dailyReportsList)


    useEffect(() => {
        dispatch(getDailyReports(10))
    }, [])

    const onAdd = () => {
        navigation.navigate("AddAction")
    }

    return (
        <View style={{ padding: 20, marginTop: 40, height: "100%" }}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <Text style={{fontSize: 24, fontWeight: "400"}}>
                    Spartan
                </Text>
            </View>
            <View style={{flexDirection: "column", display: "flex", flex: 1}}>
                <View style={{
                    flex: 2,
                    marginTop: 25,
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    backgroundColor: "white", 
                    borderWidth: 1,
                    borderColor: "#e0e0e0", 
                    borderRadius: 15, 
                    paddingVertical: 15, 
                    alignItems: "center"
                }}>
                    <View style={{flex: 2, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize: 35, fontWeight: "400"}}>
                            85/100
                        </Text>
                        <Text style={{fontSize: 10, fontWeight: "400"}}>
                            Avg Score (Last 10 days)
                        </Text>
                    </View>
                    <View style={{flex: 2, justifyContent: "center", alignItems: "center", ...shadow5, height: 120}}>
                        <Image source={require('../../assets/badges/95100.png')} resizeMode="contain" style={{height: 120 }} />
                    </View>
                </View>
                <View style={{flex: 8}}>
                    <FlatList
                        data={dailyReports}
                        automaticallyAdjustKeyboardInsets
                        keyExtractor={item => item.id}
                        contentContainerStyle={{ paddingBottom: 300, paddingHorizontal: 5}}
                        renderItem={({ item }) => {
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
                                            {new Date(item.created_at).toDateString()}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 15, fontWeight: "500"}}>
                                            {item.total_score}/100
                                        </Text>
                                        <View style={{height: 10, borderRadius: 5, backgroundColor: "light-gray", marginTop: 3}}>
                                            <View style={{height: 10, borderRadius: 5, backgroundColor: "green", width: `${item.total_score}%`}} />
                                        </View>
                                    </View>
                                    <View>
                                        <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
                                    </View>
                                </Pressable>
                                </View>
                            )}
                        }
                    />
                </View>
            </View>            
        </View>
        
    )
}

export default Actions;