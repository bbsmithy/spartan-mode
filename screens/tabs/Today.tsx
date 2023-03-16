import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Text, View, FlatList, Button } from "react-native"
import { useDispatch } from "react-redux"
import ActionInput from "../../components/ActionInput"
import FullButton from "../../components/FullButton"
import SelectActionBox from "../../components/SelectActionBox"
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
                    Today
                </Text>
                <Button title="Add" onPress={onAdd} />
            </View>
            <View style={{flexDirection: "column", display: "flex", flex: 1}}>
                <View style={{flex: 2}}>
                    <View style={{justifyContent: "center", padding: 40 }}>
                        <Text style={{fontSize: 40, textAlign: "center"}}>30/100</Text>
                    </View>
                </View>
                <View style={{flex: 8}}>
                    <FlatList
                        data={[
                            { title: "YOYO", score: 50 },
                            { title: "YOYO", score: -40 },
                            { title: "YOYO", score: 10 },
                            { title: "YOYO", score: 10 },
                            { title: "YOYO", score: 30 },
                        ]}
                        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 100}}
                        renderItem={({ item }) => {
                            return (
                                <SelectActionBox title={item.title} score={item.score} />
                            )
                        }}
                    />
                </View>
                
            </View>
            
           
            
            
            {/* <View style={{
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
            </View> */}
            
            
        </View>
        
    )
}

export default Actions;