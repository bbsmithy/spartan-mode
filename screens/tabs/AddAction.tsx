import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Pressable } from "react-native"
import { useDispatch } from "react-redux";
import ActionInput from "../../components/ActionInput";
import FullButton from "../../components/FullButton";
import { addAction } from "../../state/thunks/ActionsThunks";

const AddAction = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [score, setScore] = useState("");
    const [title, setTitle] = useState("");

    const onAdd = () => {
        dispatch(addAction({ title, score }))
    }

    const onBack = () => {
        navigation.goBack();
    }


    return (
        <View style={{paddingHorizontal: 20, paddingTop: 60, paddingBottom: 20, flex: 1, backgroundColor: "white", justifyContent: "space-between"}}>
            <View>
                <Pressable
                    android_ripple={{ color: 'darkgrey',  radius: 25 }} 
                    style={{ 
                        borderRadius: 25,
                        height: 50, 
                        width: 50,
                        justifyContent: "center",
                        alignItems: "center"
                    }} 
                    onPress={onBack}
                >
                    <MaterialCommunityIcons name="arrow-left" size={24} color="black"  />
                </Pressable>
                <Text style={{fontSize: 23, marginBottom: 20}}>Add Action</Text>
                <ActionInput 
                    placeholder="Title"
                    title={title}
                    score={score}
                    onChangeScore={(score) => {
                        setScore(score)
                    }}
                    onChangeTitle={(title) => {
                        setTitle(title)
                    }}
                />
            </View>
            
            <FullButton
                text={"Add"}
                onPress={onAdd}
            />
        </View>
    )
}

export default AddAction;