import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Text, Pressable } from "react-native"
import { useDispatch } from "react-redux";
import { shadow5 } from "../styles";


const SignToggle = ({ positive, onSwitch }) => {
    return (
        <Pressable 
            android_ripple={{ color: 'light-grey' }} 
            style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: positive ? "green" : "red",
                borderRadius: 5
            }}
            onPress={() => {onSwitch(!positive)}}
        >
            <Text style={{fontSize: 25, color: "white"}}>
                {positive ? "+":"-"}
            </Text>
        </Pressable>
    )
}


type ActionInputProps = { 
    onChangeTitle: (title: string, id: number) => void, 
    onChangeScore: (score: string, id: number) => void,
    onChangeSign?: (positive: boolean, id: number) => void,
    score: string, 
    title: string,
    id: number,
    positive: boolean, 
    placeholder?: string,
    canChangeSign?: boolean,
}
const ActionInput = ({ 
    score, 
    title,
    id,
    positive,
    placeholder = "Action Title" 
}: ActionInputProps) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();


    const onChangeTitle = (title: string) => {
        dispatch()
    }

    const onChangeScore = (score: string) => {

    }

    const onChangeSign = (positive: boolean) => {

    }

    return (
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
                    <SignToggle positive={positive} onSwitch={onChangeSign}  />
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
}


export default ActionInput;