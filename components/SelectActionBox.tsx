import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { shadow5 } from "../styles";

type SelectActionBoxProps = { 
    title: string, 
    score: number, 
    positive: number, 
    checked: boolean, 
    disabled: boolean,
    id: number, 
    onPress: (id: number) => void 
} 
const SelectActionBox = ({ title, score, onPress, id, checked, positive, disabled }: SelectActionBoxProps) => {

    const press = () => {
        if (!disabled) onPress(id)
    }

    const disabledStyle = disabled ? {backgroundColor: "#efefef"}:{}

    return (
        <View style={styles.container}>
            <Pressable style={[styles.selectActionBox, disabledStyle]} android_ripple={{ color: positive ? 'green' : 'red'  }} disabled={disabled}  onPress={press}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 20, fontWeight: "600"}}>{!positive && "-"}{score}</Text>
                </View>
                <View style={{flex: 4}}>
                    <Text style={{fontSize: 16, fontWeight: "600"}}>{title}</Text>
                </View>
                <View style={{flex: 1}}>
                    <BouncyCheckbox isChecked={checked} disableBuiltInState onPress={press} fillColor={positive ? "green" : "red"} />
                </View>
            </Pressable>
        </View>
        
    )
}

const styles = StyleSheet.create({
    selectActionBox: {
        alignItems: "center",
        width: "100%",
        padding: 20,
        borderRadius: 15,
        backgroundColor: 'white',
        flexDirection: "row"
    },
    container: {
        borderRadius: 15,
        marginVertical: 5,
        // overflow: 'hidden',
        backgroundColor:"white",
        ...shadow5
    }
})

export default SelectActionBox;