import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Text, Pressable } from "react-native"
import { useDispatch } from "react-redux";
import { actionsSlice } from "../state/reducers/ActionsReducer";
import { shadow5 } from "../styles";
import SignToggle from "./SignToggle";


type OnboardingActionInputProps = { 
    score: string, 
    title: string,
    positive: boolean, 
    placeholder?: string,
    onChangeScore,
    onChangeTitle,
    onChangeSign
}
const OnboardingActionInput = ({ 
    score, 
    title,
    positive,
    placeholder = "Action Title",
    onChangeScore,
    onChangeTitle,
    onChangeSign
}: OnboardingActionInputProps) => {

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
                    padding: 10,
                    fontSize: 15
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
                    <SignToggle positive={positive} onSwitch={onChangeSign || null} disabled={!onChangeSign}  />
                </View>
                <TextInput 
                    style={{flex: 6, fontSize: 15}}
                    keyboardType="numeric"
                    value={score}
                    onChangeText={onChangeScore} 
                    placeholder="Score"
                />
            </View>
        </View>
    )
}


export default OnboardingActionInput;