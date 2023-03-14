import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Text, View, FlatList, Button } from "react-native"
import { useDispatch } from "react-redux"
import ActionInput from "../../components/ActionInput"
import FullButton from "../../components/FullButton"
import { selectActions } from "../../state/thunks/ActionsThunks"


const Actions = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(selectActions({ title: "YOYO", score: '50' }))
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
                data={[
                    { title: "YOYO", score: '50' },
                    { title: "YOYO", score: '50' },
                    { title: "YOYO", score: '50' },
                    { title: "YOYO", score: '50' },
                    { title: "YOYO", score: '50' },
                ]}
                contentContainerStyle={{paddingTop: 20, paddingBottom: 100}}
                renderItem={({ item }) => {
                    return (
                        <ActionInput 
                            title={item.title} 
                            score={item.score}
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

export default Actions;