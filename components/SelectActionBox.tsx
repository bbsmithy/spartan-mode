import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { shadow5 } from "../styles";

type SelectActionBoxProps = { title: string, score: number, positive: number, checked: boolean, id: number, onPress: (id: number) => void } 
const SelectActionBox = ({ title, score, onPress, id, checked, positive }: SelectActionBoxProps) => {

    const press = () => onPress(id)

    return (
        <View style={styles.container}>
            <Pressable style={styles.selectActionBox} android_ripple={{ color: positive ? 'green' : 'red'  }}  onPress={press}>
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