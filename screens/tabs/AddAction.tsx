import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text } from "react-native"
import { useDispatch } from "react-redux";
import TouchRipple from "react-native-touch-ripple";
import FullButton from "../../components/FullButton";
import OnboardingActionInput from "../../components/OnboardingActionInput";
import { addAction } from "../../state/thunks/ActionsThunks";


const AddAction = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [score, setScore] = useState("");
    const [title, setTitle] = useState("");
    const [positive, setPositive] = useState(true);

    const onAdd = () => {
        dispatch(addAction({ title, score, positive }))
        navigation.goBack();
    }

    const onBack = () => {
        navigation.goBack();
    }


    return (
        <View style={{ paddingTop: "7%", paddingBottom: 20, flex: 1, backgroundColor: "white", justifyContent: "space-between"}}>
            <View>
                <TouchRipple
                    rippleColor="darkgrey"
                    rippleOpacity={1}
                    rippleDuration={500}
                    style={{ 
                        borderRadius: 25,
                        height: 50, 
                        width: 50,
                        marginLeft: 5,

                        justifyContent: "center",
                        alignItems: "center"
                    }} 
                    onPress={onBack}
                >
                    <MaterialCommunityIcons name="arrow-left" size={24} color="black"  />
                </TouchRipple>
                <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
                    <Text style={{fontSize: 23, marginBottom: 20}}>New Action</Text>
                    <OnboardingActionInput
                        placeholder="Title"
                        title={title}
                        score={score}
                        positive={positive}
                        onChangeTitle={setTitle}
                        onChangeScore={setScore}
                        onChangeSign={() => {
                            setPositive(!positive)
                        }}
                    />
                    
                </View>
            </View>
            <View style={{paddingHorizontal: 20}}>
            <FullButton
                        disabled={!title || !score}
                        text={"Add"}
                        onPress={onAdd}
                    />
            </View>
            
            
        </View>
    )
}

export default AddAction;