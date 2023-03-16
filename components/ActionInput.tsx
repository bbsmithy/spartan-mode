import { View, TextInput, Text, Button } from "react-native"


type ActionInputProps = { 
    onChangeTitle: (title: string) => void, 
    onChangeScore: (score: string) => void, 
    score: string, 
    title: string, 
    minus: boolean, 
    placeholder: string,
    canChangeSign: boolean,
}
const ActionInput = ({ onChangeTitle, onChangeScore, score, title, minus, canChangeSign = true, placeholder = "Action Title" }: ActionInputProps) => (
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
            backgroundColor: "#efefef",
            flex: 3,
            padding: 5,
            flexDirection: 'row',
            alignItems: "center"
        }}>
            <View style={{ backgroundColor: "#efefef", justifyContent: "center", marginRight: 10, flex: 4, marginLeft: 1 }}>
                <Button title={minus ? "-" : "+"} disabled={!canChangeSign} />
            </View>
            <TextInput 
                style={{flex: 6}}
                keyboardType="numeric"
                value={score} 
                onChangeText={onChangeScore} 
                placeholder="Score"
            />
        </View>
    </View>
)


export default ActionInput;