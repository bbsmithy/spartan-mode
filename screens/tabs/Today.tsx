import { useEffect } from "react"
import { Text, View, FlatList, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import FullButton from "../../components/FullButton"
import SelectActionBox from "../../components/SelectActionBox"
import { todaySlice } from "../../state/reducers/TodayReducer"
import { actionsList } from "../../state/selectors/ActionsSelectors"
import { hasCompletedTodaysReport, selectedActionsList, todaysScore } from "../../state/selectors/TodaySelectors"
import { completeToday } from "../../state/thunks/TodayThunks"
import Database from "../../database";
import { onboardingSlice } from "../../state/reducers/OnboardingReducer"
import { actionsSlice } from "../../state/reducers/ActionsReducer"


const Actions = () => {

    const dispatch = useDispatch()
    const actions = useSelector(actionsList)
    const selectedActions = useSelector(selectedActionsList)
    const currentScore = useSelector(todaysScore)
    const isComplete = useSelector(hasCompletedTodaysReport)

    console.log("")


    useEffect(() => {
        Database.logTableSchema('daily_reports')
        // dispatch(selectActions({ title: "YOYO", score: '50' }))
    }, [])

    const onSave = () => {
        dispatch(
            completeToday({ 
                actions: selectedActions, 
                total_score: currentScore 
            })
        )
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
                </View>
                <View style={{flexDirection: "column", display: "flex", flex: 1}}>
                    <View style={{ flex: 2 }}>
                        <View style={{justifyContent: "center", padding: 40 }}>
                            <Text style={{fontSize: 40, textAlign: "center"}}>{currentScore}/100</Text>
                        </View>
                    </View>
                    <View style={{ flex: 8 }}>
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
                                        checked={selected}
                                        id={item.id} 
                                        onPress={onSelect}
                                    />
                                )
                            }}
                        />
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
                    text={"Complete Day"}
                    disabled={isComplete || actions.length === 0}
                    onPress={onSave}
                />
            </View>
        </View>
        
    )
}

export default Actions;