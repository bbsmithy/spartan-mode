import { View, TextInput } from "react-native"

const ActionInput = ({ onChangeTitle, onChangeScore, score, title }) => (
    <View style={{ flexDirection: "row", marginVertical: 5 }}>
        <TextInput 
            onChangeText={onChangeTitle} 
            placeholder="Action Title" 
            value={title} 
            style={{ 
                borderRadius: 5,
                backgroundColor: "#efefef",
                marginRight: 5,
                flex: 7,
                padding: 10
            }}
        />
        <TextInput 
            keyboardType="number-pad" 
            value={score} 
            onChangeText={onChangeScore} 
            placeholder="Score" 
            style={{ 
                borderRadius: 5,
                backgroundColor: "#efefef", 
                marginLeft: 5, 
                flex: 2,
                padding: 10
            }}
        />
    </View>
)


export default ActionInput;