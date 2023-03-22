import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Text, View, FlatList, Button, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import ActionInput from "../../components/ActionInput"
import FullButton from "../../components/FullButton"
import { actionsList } from "../../state/selectors/ActionsSelectors"
import { getAllActions } from "../../state/thunks/ActionsThunks"
import { shadow5 } from "../../styles"


const Actions = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const actions = useSelector(actionsList)

    console.log("actions: ", actions)



    useEffect(() => {
        dispatch(getAllActions())
    }, [])

    const onAdd = () => {
        navigation.navigate("AddAction")
    }

    return (
        <View style={{ padding: 20, marginTop: 40, height: "100%" }}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <Text style={{fontSize: 24, fontWeight: "400"}}>
                    Actions
                </Text>
                <Button title="Add" onPress={onAdd} />
            </View>
            <FlatList
                data={actions}
                contentContainerStyle={{paddingTop: 20, paddingBottom: 100}}
                renderItem={({ item }) => {
                    return (
                        <ActionInput 
                            title={item.title}
                            positive={item.positive}
                            score={item.score.toString()}
                            onChangeScore={() => {}}
                            onChangeTitle={() => {}}
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
                    text={"Save"} 
                    onPress={() => {
                        alert("SAVE")
                    }}

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