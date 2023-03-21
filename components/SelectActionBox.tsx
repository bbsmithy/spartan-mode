import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { shadow5 } from "../styles";

type SelectActionBoxProps = { title: string, score: number, checked: boolean, id: number, onPress: (id: number) => void } 
const SelectActionBox = ({ title, score, onPress, id, checked }: SelectActionBoxProps) => {

    const press = () => onPress(id)

    const isPositive = score > 0;

    return (
        <View style={styles.container}>
            <Pressable style={styles.selectActionBox} android_ripple={{ color: isPositive ? 'green' : 'red'  }}  onPress={press}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 20, fontWeight: "600"}}>{score}</Text>
                </View>
                <View style={{flex: 4}}>
                    <Text style={{fontSize: 16, fontWeight: "600"}}>{title}</Text>
                </View>
                <View style={{flex: 1}}>
                    <BouncyCheckbox isChecked={checked} disableBuiltInState onPress={press} fillColor={isPositive ? "green" : "red"} />
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
        backgroundColor: 'white',
        flexDirection: "row"
    },
    container: {
        borderRadius: 15,
        marginVertical: 5,
        overflow: 'hidden',
        backgroundColor:"white",
        ...shadow5
    }
})

export default SelectActionBox;