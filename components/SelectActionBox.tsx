import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { shadow5 } from "../styles";

type SelectActionBoxProps = { title: string, score: number, checked: boolean } 
const SelectActionBox = ({ title, score }: SelectActionBoxProps) => {

    const [check, setChecked] = useState(false)

    const press = () => {setChecked(!check)}

    return (
        <Pressable style={styles.selectActionBox} onPress={press}>
            
            <View style={{flex: 1}}>
                <Text style={{fontSize: 20, fontWeight: "600"}}>{score}</Text>
            </View>
            <View style={{flex: 4}}>
                <Text style={{fontSize: 16, fontWeight: "600"}}>{title}</Text>
            </View>
            <View style={{flex: 1}}>
                <BouncyCheckbox isChecked={check} disableBuiltInState onPress={press} fillColor={score < 0 ? "red" : "green"} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    selectActionBox: {
        borderRadius: 5,
        marginVertical: 5,
        overflow: 'hidden',
        alignItems: "center",
        width: "100%",
        padding: 20,
        backgroundColor: 'white',
        flexDirection: "row",
        ...shadow5
    }
})

export default SelectActionBox;