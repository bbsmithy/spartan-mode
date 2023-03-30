import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Text, View, Image, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getDailyReports } from "../../state/thunks/SpartanThunks"
import { shadow5 } from "../../styles"
import { averageScore, dailyReportsList, daysUsedForAverage, spartanRank } from "../../state/selectors/SpartanSelectors"
import DailyReportItem from "../../components/DailyReportItem"
import NewButton from "../../components/NewButton"
import { getSpartanLogo } from "../../util"


const Spartan = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const dailyReports = useSelector(dailyReportsList)
    const average = useSelector(averageScore)
    const daysUsedForAvg = useSelector(daysUsedForAverage)
    const rank = useSelector(spartanRank)
    const logo = getSpartanLogo(rank?.key)

    useEffect(() => {
        dispatch(getDailyReports(10))
    }, [])

    return (
        <View style={{ padding: 20, marginTop: 40, height: "100%" }}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontSize: 24, fontWeight: "400"}}>
                    Spartan
                </Text>
                <NewButton 
                    onAdd={() => {
                        navigation.navigate("Rank")
                    }} 
                    title="Rank" 
                    icon="police-badge-outline"
                />
            </View>
            {rank && (
                <View style={{flexDirection: "column", display: "flex", flex: 1}}>
                <View style={{
                    flex: 2,
                    marginTop: 10,
                    marginBottom: 10,
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    backgroundColor: "white",
                    borderRadius: 15, 
                    paddingVertical: 15, 
                    alignItems: "center"
                }}>
                    <View style={{flex: 2, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize: 35, fontWeight: "400"}}>
                            {average}/100
                        </Text>
                        <Text style={{fontSize: 10, fontWeight: "400"}}>
                            Avg Score (Last {daysUsedForAvg} days)
                        </Text>
                    </View>
                    <View style={{flex: 2, justifyContent: "center", alignItems: "center", ...shadow5, height: 100}}>
                        {rank && (
                            <>
                                <Image source={logo} resizeMode="contain" style={{height: 100 }} />
                                <Text style={{fontSize: 15, fontWeight: '600', marginTop: 5}}>{rank.rank}</Text>
                            </>
                        )}
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
                                <DailyReportItem item={item} />
                            )}
                        }
                    />
                </View>
            </View>  
            )}
            {!rank && (
                <View style={{justifyContent: "center", padding: 40, marginTop: "35%" }}>
                    <Text style={{fontSize: 20, textAlign: "center", color: "gray"}}>
                        You have not completed any daily reports yet .
                        Once you do you will get an average score over a maximum of 10 days.
                        The aim to to reach the highest rank of spartan Polemarch, which is 90/100 avg score.
                        Check out the ranks below 👇
                    </Text>
                    <View style={{ width: "100%", marginTop: 10, justifyContent: "center", alignItems: "center", }}>
                        <NewButton 
                            onAdd={() => {
                                navigation.navigate("Rank")
                            }} 
                            title="View Ranks" 
                            icon="police-badge-outline"
                        />
                    </View>
                </View>
            )}       
        </View>
        
    )
}

export default Spartan;