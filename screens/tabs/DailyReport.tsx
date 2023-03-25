import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Pressable } from "react-native"
import { useDispatch } from "react-redux";
import ActionInput from "../../components/ActionInput";
import FullButton from "../../components/FullButton";
import OnboardingActionInput from "../../components/OnboardingActionInput";
import { addAction } from "../../state/thunks/ActionsThunks";
import { displayDate } from "../../util";

const DailyReport = ({ route }) => {

    const { report } = route.params;

    console.log(report.actions)

    // const actions = JSON.parse(report?.actions)

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
        <View style={{ paddingTop: 40, paddingBottom: 20, flex: 1, backgroundColor: "white", justifyContent: "space-between"}}>
            <View>
                <Pressable
                    android_ripple={{ color: 'darkgrey',  radius: 25 }} 
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
                </Pressable>
                <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
                    <Text style={{fontSize: 23, marginBottom: 20}}>{displayDate(report.created_at)}</Text>
                </View>
            </View>
            <View>
                {/* {actions.map(action => {
                    return (
                        <Text>
                            {action.title}
                        </Text>
                    )
                })} */}
            </View>
            <View style={{paddingHorizontal: 20}}>
                <FullButton    
                    text={"Add"}
                    onPress={onAdd}
                />
            </View>
            
            
        </View>
    )
}

export default DailyReport;