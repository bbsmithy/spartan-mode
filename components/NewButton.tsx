import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import TouchRipple  from 'react-native-touch-ripple'
import { shadow5, red } from "../styles";

const NewButton = ({ onAdd, title = "New", icon = "plus-circle" }) => {
    return (
        <TouchRipple
            onPress={onAdd}
            rippleColor='white'
            rippleDuration={350}
            rippleContainerBorderRadius={8}
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
            <MaterialCommunityIcons name={icon} size={16} color="white" />
            <Text style={{fontSize: 15, color: "white", marginLeft: 5}}>
                {title}
            </Text>
        </TouchRipple>
    )
}

export default NewButton

