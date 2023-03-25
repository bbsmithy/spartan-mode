import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Text, View, Image, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getDailyReports } from "../../state/thunks/SpartanThunks"
import { shadow5 } from "../../styles"
import { averageScore, dailyReportsList } from "../../state/selectors/SpartanSelectors"
import DailyReportItem from "../../components/DailyReportItem"


const Actions = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const dailyReports = useSelector(dailyReportsList)
    const average = useSelector(averageScore)


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
                    marginTop: 10,
                    marginBottom: 10,
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    backgroundColor: "white", 
                    // borderWidth: 1,
                    // borderColor: "#e0e0e0", 
                    borderRadius: 15, 
                    paddingVertical: 15, 
                    alignItems: "center"
                }}>
                    <View style={{flex: 2, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize: 35, fontWeight: "400"}}>
                            {average}/100
                        </Text>
                        <Text style={{fontSize: 10, fontWeight: "400"}}>
                            Avg Score (Last 10 days)
                        </Text>
                    </View>
                    <View style={{flex: 2, justifyContent: "center", alignItems: "center", ...shadow5, height: 100}}>
                        <Image source={require('../../assets/badges/95100.png')} resizeMode="contain" style={{height: 100 }} />
                        <Text style={{fontSize: 15, fontWeight: '600'}}>The Spartan</Text>
                    </View>
                </View>
                <View style={{flex: 8}}>
                    <FlatList
                        data={dailyReports}
                        automaticallyAdjustKeyboardInsets
                        keyExtractor={item => item.id}
                        contentContainerStyle={{ paddingBottom: 300, paddingHorizontal: 5}}
                        renderItem={({ item }) => {
                            console.log("ITEM: ", item)
                            return (
                                <DailyReportItem item={item} />
                            )}
                        }
                    />
                </View>
            </View>            
        </View>
        
    )
}

export default Actions;