import { Text } from "react-native"
import TouchRipple  from 'react-native-touch-ripple'

const SignToggle = ({ positive, onSwitch, disabled }) => {
    return (
        <TouchRipple
            rippleDuration={350}
            ripleColor={'light-grey'}
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
        </TouchRipple>
    )
}

export default SignToggle