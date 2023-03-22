import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Text, View, Image } from "react-native"
import { useDispatch } from "react-redux"
import { shadow5 } from "../../styles"


const Actions = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()


    useEffect(() => {
        // dispatch(selectActions())
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
                <View style={{flex: 2, alignItems: "center"}}>
                    <View style={{ justifyContent: "center", alignItems: "center", ...shadow5, borderRadius: 80, height: 160, width: 160, backgroundColor: "white" }}>
                        <Image source={require('../../assets/badges/4860.png')} resizeMode="contain" style={{height: 150, width: 150}} />
                    </View>
                </View>
                <View style={{flex: 8}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", padding: 20}}>
                    </View>
                </View>
            </View>            
        </View>
        
    )
}

export default Actions;