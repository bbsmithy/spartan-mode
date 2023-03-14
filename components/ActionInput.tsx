import { View, TextInput, Text } from "react-native"


type ActionInputProps = { 
    onChangeTitle: (title: string) => void, 
    onChangeScore: (score: string) => void, 
    score: string, 
    title: string, 
    minus: boolean, 
    placeholder: string
}
const ActionInput = ({ onChangeTitle, onChangeScore, score, title, minus, placeholder = "Action Title" }: ActionInputProps) => (
    <View style={{ flexDirection: "row", marginVertical: 5 }}>
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
            borderRadius: 5,
            backgroundColor: "#efefef", 
            marginLeft: 5, 
            flex: 2,
            padding: 10,
            flexDirection: 'row',
            alignItems: "center"
        }}>
            <Text style={{ marginRight: 5, fontSize: 16 }}>
                {minus ? "-" : "+"}
            </Text>
            <TextInput 
                keyboardType="number-pad" 
                value={score} 
                onChangeText={onChangeScore} 
                placeholder="Score"
            />
        </View>
    </View>
)


export default ActionInput;