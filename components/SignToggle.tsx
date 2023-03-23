import { Pressable, Text } from "react-native"

const SignToggle = ({ positive, onSwitch, disabled }) => {
    return (
        <Pressable 
            android_ripple={{ color: 'light-grey' }} 
            style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: positive ? "green" : "red",
                borderRadius: 5
            }}
            disabled={disabled}
            onPress={() => {onSwitch(!positive)}}
        >
            <Text style={{fontSize: 25, color: "white"}}>
                {positive ? "+":"-"}
            </Text>
        </Pressable>
    )
}

export default SignToggle