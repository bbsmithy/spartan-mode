import { useEffect } from "react"
import { Text, View, FlatList, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import FullButton from "../../components/FullButton"
import SelectActionBox from "../../components/SelectActionBox"
import { todaySlice } from "../../state/reducers/TodayReducer"
import { actionsList } from "../../state/selectors/ActionsSelectors"
import { hasCompletedToday, lastCompletedReport, selectedActionsList, todaysScore } from "../../state/selectors/TodaySelectors"
import { completeToday, updateToday } from "../../state/thunks/TodayThunks"
import Database from "../../database";
import { onboardingSlice } from "../../state/reducers/OnboardingReducer"
import { actionsSlice } from "../../state/reducers/ActionsReducer"
import NewButton from "../../components/NewButton"


const Today = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const actions = useSelector(actionsList)
    const selectedActions = useSelector(selectedActionsList)
    const currentScore = useSelector(todaysScore)
    const completedReport = useSelector(lastCompletedReport)
    const completedReportToday = useSelector(hasCompletedToday)

    console.log("completedReportToday", completedReportToday)



    useEffect(() => {
        Database.logTableSchema('daily_reports')
        // dispatch(selectActions({ title: "YOYO", score: '50' }))
    }, [])

    const onSave = () => {
        const selectedActionData = selectedActions.map((id) => actions.find((action) => action.id === id))
        
        if (completedReportToday) {
            dispatch(updateToday({
                actions: selectedActionData,
                total_score: currentScore,
                id: completedReport.id
            }))
        } else {
            dispatch(completeToday({ 
                actions: selectedActionData,  
                total_score: currentScore
            }))
        }
    }

    const onReset = () => {
        dispatch(todaySlice.actions.reset())
        dispatch(onboardingSlice.actions.reset())
        dispatch(actionsSlice.actions.reset())
        Database.resetDatabase()
    }

    const onSelect = (id: number) => {
        dispatch(todaySlice.actions.toggleAction(id))
    }

    return (
        <View style={{ marginTop: 40, height: "100%" }}>

            <View style={{padding: 20, flex: 1}}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{fontSize: 24, fontWeight: "400"}}>
                        Today
                    </Text>
                    {process.env.NODE_ENV === "development" && (
                        <Button
                            title="Reset"
                            onPress={onReset}
                        />
                    )}
                    <NewButton title="Reminder" icon="clock" onAdd={() => {
                        navigation.navigate("Reminder")
                    }} />
                </View>
                <View style={{flexDirection: "column", display: "flex", flex: 1}}>
                    <View style={{ flex: 2 }}>
                        <View style={{justifyContent: "center", padding: 40 }}>
                            <Text style={{fontSize: 40, textAlign: "center"}}>{currentScore}/100</Text>
                        </View>
                    </View>
                    <View style={{ flex: 8 }}>
                        {actions.length > 0 && (
                            <FlatList
                                data={actions}
                                contentContainerStyle={{ paddingHorizontal: 4, paddingBottom: 200}}
                                renderItem={({ item }) => {
                                    const selected = selectedActions.find((id) => id === item.id)
                                    return (
                                        <SelectActionBox 
                                            title={item.title} 
                                            score={item.score}
                                            positive={item.positive}
                                            // disabled={isComplete}
                                            checked={selected}
                                            id={item.id} 
                                            onPress={onSelect}
                                        />
                                    )
                                }}
                            />
                        )}
                        {actions.length === 0 && (
                            <View style={{justifyContent: "center", padding: 40 }}>
                                <Text style={{fontSize: 20, textAlign: "center", color: "gray"}}>
                                    You have no actions yet 
                                </Text>
                                <View style={{width: "100%", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                                    <NewButton 
                                        title="Create Action" 
                                        onAdd={() => {
                                            navigation.navigate("AddAction")
                                        }} 
                                    />
                                </View>
                            </View>
                        )}
                        
                    </View>
                </View>
            </View>
            <View style={{
                position: "absolute", 
                bottom: 0,
                paddingBottom: 60,
                paddingTop: 10,
                paddingHorizontal: 20,
                width: "100%",
                backgroundColor: 'white',
            }}>
                <FullButton 
                    text={completedReportToday ? "Update": "Complete Day"}
                    disabled={actions.length === 0}
                    onPress={onSave}
                />
            </View>
        </View>
        
    )
}

export default Today;