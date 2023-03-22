import { View, Pressable, Text, StyleSheet } from "react-native"
import { red, shadow5 } from "../styles"


const FullButton = ({ text, onPress, disabled }) => {
    return (
        <View style={styles.nextBtn}>
            <Pressable
                style={{
                    backgroundColor: red,
                    width: "100%",
                    justifyContent: "center",
                    padding: 20,
                    alignItems: "center"
                }}
                disabled={disabled}
                android_ripple={{
                    color: 'light-grey',
                }}
                onPress={onPress}
            >
                <Text style={{color: "white", fontWeight: "500", fontSize: 15}}>
                    {text}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    nextBtn: {
        borderRadius: 15,
        overflow: 'hidden',
        width: "100%",
        ...shadow5
    }
})

export default FullButton;

