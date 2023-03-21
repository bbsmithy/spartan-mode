import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Text, View, FlatList, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import ActionInput from "../../components/ActionInput"
import FullButton from "../../components/FullButton"
import SelectActionBox from "../../components/SelectActionBox"
import { actionsList } from "../../state/selectors/ActionsSelectors"
import { selectActions } from "../../state/thunks/ActionsThunks"


const Actions = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const actions = useSelector(actionsList)


    useEffect(() => {
        // dispatch(selectActions({ title: "YOYO", score: '50' }))
    }, [])

    const onAdd = () => {
        navigation.navigate("AddAction")
    }

    return (
        <View style={{ padding: 20, marginTop: 40, height: "100%" }}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <Text style={{fontSize: 24, fontWeight: "400"}}>
                    Today
                </Text>
                <Button title="Add" onPress={onAdd} />
            </View>
            <View style={{flexDirection: "column", display: "flex", flex: 1}}>
                <View style={{ flex: 2 }}>
                    <View style={{justifyContent: "center", padding: 40 }}>
                        <Text style={{fontSize: 40, textAlign: "center"}}>30/100</Text>
                    </View>
                </View>
                <View style={{ flex: 8 }}>
                    <FlatList
                        data={actions}
                        contentContainerStyle={{ paddingHorizontal: 4, paddingBottom: 100}}
                        renderItem={({ item }) => {
                            return (
                                <SelectActionBox title={item.title} score={item.score} />
                            )
                        }}
                    />
                </View>
            </View>
        </View>
        
    )
}

export default Actions;