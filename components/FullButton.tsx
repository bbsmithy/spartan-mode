import { View, Pressable, Text, StyleSheet, Platform } from "react-native"
import { red, shadow5 } from "../styles"


const FullButton = ({ text, onPress, disabled }) => {
    return (
        <View style={styles.nextBtn}>
            <Pressable
                style={{
                    backgroundColor: disabled ? "#efefef" : red,
                    width: "100%",
                    justifyContent: "center",
                    borderRadius: 15,
                    padding: 20,
                    alignItems: "center"
                }}
                disabled={disabled}
                android_ripple={{
                    color: 'light-grey',
                }}
                onPress={onPress}
            >
                <Text style={{color: disabled ? "gray" : "white", fontWeight: "500", fontSize: 15}}>
                    {text}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    nextBtn: {
        borderRadius: 15,
        overflow: Platform.OS === 'android' ? 'hidden' : "visible",
        width: "100%",
        ...shadow5
    }
})

export default FullButton;

