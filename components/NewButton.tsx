import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import { shadow5, red } from "../styles";

const NewButton = ({ onAdd, title = "New" }) => {
    return (
        <Pressable 
            onPress={onAdd}
            android_ripple={{color: "light-grey"}}
            style={{ 
                flexDirection: "row", 
                justifyContent: "center", 
                alignItems: "center",
                backgroundColor: red,
                padding: 5,
                borderRadius: 8,
                ...shadow5
            }}
        >
            <MaterialCommunityIcons name="plus-circle" size={16} color="white" />
            <Text style={{fontSize: 15, color: "white", marginLeft: 5}}>
                {title}
            </Text>
        </Pressable>
    )
}

export default NewButton

