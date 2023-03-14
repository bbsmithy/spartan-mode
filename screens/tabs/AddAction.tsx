import { View, Text } from "react-native"
import ActionInput from "../../components/ActionInput";
import FullButton from "../../components/FullButton";

const AddAction = () => {
    return (
        <View style={{paddingHorizontal: 20, paddingTop: 60, paddingBottom: 20, flex: 1, backgroundColor: "white", justifyContent: "space-between"}}>
            <View>
                <Text style={{fontSize: 23, marginBottom: 20}}>Add Action</Text>
                <ActionInput placeholder="Title" />
            </View>
            
            <FullButton
                text={"Add"}
                onPress={() => {

                }}
            />
        </View>
    )
}

export default AddAction;