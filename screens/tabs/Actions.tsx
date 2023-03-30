import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Text, View, FlatList, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import ActionInput from "../../components/ActionInput"
import FullButton from "../../components/FullButton"
import NewButton from "../../components/NewButton"
import { actionsList, hasEdits } from "../../state/selectors/ActionsSelectors"
import { getAllActions, saveChanges } from "../../state/thunks/ActionsThunks"


const Actions = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const actions = useSelector(actionsList)
    const saveEnabled = useSelector(hasEdits)

    useEffect(() => {
        dispatch(getAllActions())
    }, [])

    const onAdd = () => {
        navigation.navigate("AddAction")
    }

    const onSave = () => {
        dispatch(saveChanges())
    }

    return (
        <View style={{ padding: 20, marginTop: 40, height: "100%" }}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <Text style={{fontSize: 24, fontWeight: "400"}}>
                    Actions
                </Text>
                <NewButton onAdd={onAdd} />
            </View>
            {actions.length > 0 && (
                <FlatList
                    data={actions}
                    automaticallyAdjustKeyboardInsets
                    keyExtractor={item => item.id}
                    contentContainerStyle={{paddingTop: 20, paddingBottom: 300}}
                    renderItem={({ item }) => {
                        return (
                            <ActionInput
                                key={item.id} 
                                id={item.id}
                                title={item.title}
                                positive={item.positive}
                                score={item.score.toString()}
                            />
                        )
                    }}
                />
            )}
            {actions.length === 0 && (
               <View style={{justifyContent: "center", padding: 40, marginTop: "35%" }}>
                    <Text style={{fontSize: 20, textAlign: "center", color: "gray"}}>
                        You have no actions yet 😐
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
            <View style={{
                position: "absolute", 
                bottom: 0,
                paddingBottom: 60,
                paddingTop: 20,
                width: "100%",
                backgroundColor: 'white',
                left: 20
            }}>
                <FullButton 
                    text={"Save Changes"}
                    disabled={!saveEnabled}
                    onPress={onSave}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    actionInput: {
        borderRadius: 5,
        margin: 5,
    }
})

export default Actions;