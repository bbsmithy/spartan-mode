import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Text, View, FlatList, StyleSheet, Pressable } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import ActionInput from "../../components/ActionInput"
import FullButton from "../../components/FullButton"
import { actionsList, hasEdits } from "../../state/selectors/ActionsSelectors"
import { getAllActions, saveChanges } from "../../state/thunks/ActionsThunks"
import { red, shadow5 } from "../../styles"


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
                <Pressable 
                    onPress={onAdd}
                    android_ripple={{color: "light-grey"}}
                    style={{ 
                        flexDirection: "row", 
                        justifyContent: "center", 
                        alignItems: "center",
                        backgroundColor: red,
                        padding: 5,
                        borderRadius: 8,
                        ...shadow5
                    }}
                >
                    <MaterialCommunityIcons name="plus-circle" size={16} color="white" />
                    <Text style={{fontSize: 15, color: "white", marginLeft: 5}}>
                        New
                    </Text>
                </Pressable>
            </View>
            <FlatList
                data={actions}
                automaticallyAdjustKeyboardInsets
                keyExtractor={item => item.id}
                contentContainerStyle={{paddingTop: 20, paddingBottom: 500}}
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
            <View style={{
                position: "absolute", 
                bottom:60, 
                width: "100%", 
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