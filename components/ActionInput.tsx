import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Text, Pressable } from "react-native"
import { useDispatch } from "react-redux";
import { actionsSlice } from "../state/reducers/ActionsReducer";
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
        dispatch(actionsSlice.actions.updateAction({ key: 'title', value: title, id }))
    }

    const onChangeScore = (score: string) => {
        dispatch(actionsSlice.actions.updateAction({ key: 'score', value: score, id }))
    }

    const onChangeSign = (positive: boolean) => {
        dispatch(actionsSlice.actions.updateAction({ key: 'positive', value: positive, id }))
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
                    <SignToggle positive={positive} onSwitch={onChangeSign}  />
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


export default ActionInput;