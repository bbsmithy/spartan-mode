import { View, TextInput, Text, Button, Pressable } from "react-native"
import { shadow5 } from "../styles";


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


type ActionInputProps = { 
    onChangeTitle: (title: string) => void, 
    onChangeScore: (score: string) => void,
    onChangeSign?: (positive: boolean) => void,
    score: string, 
    title: string, 
    positive: boolean, 
    placeholder?: string,
    canChangeSign?: boolean,
}
const ActionInput = ({ onChangeTitle, onChangeScore, onChangeSign, score, title, positive, canChangeSign = true, placeholder = "Action Title" }: ActionInputProps) => (
    <View style={{ flexDirection: "row", marginVertical: 5, ...shadow5 }}>
        <TextInput 
            onChangeText={onChangeTitle} 
            placeholder={placeholder} 
            value={title} 
            style={{ 
                borderRadius: 5,
                backgroundColor: "#efefef",
                marginRight: 5,
                flex: 7,
                padding: 10
            }}
        />
        
        <View 
        style={{ 
            backgroundColor: "#efefef",
            flex: 3,
            padding: 5,
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: "center"
        }}>
            <View style={{ backgroundColor: "#efefef", justifyContent: "center", marginRight: 10, flex: 4, marginLeft: 1 }}>
                <SignToggle positive={positive} onSwitch={onChangeSign} disabled={!canChangeSign}  />
            </View>
            <TextInput 
                style={{flex: 6}}
                keyboardType="numeric"
                value={score} 
                onChangeText={onChangeScore} 
                placeholder="Score"
            />
        </View>
    </View>
)


export default ActionInput;