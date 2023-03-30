import { View, Text, TextInput } from 'react-native'


const ReminderTime = ({ onChangeHours, onChangeMinutes, hours, minutes }) => {
    return (
        <View 
            style={{
                flexDirection: 'row', 
                width: "100%", 
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <View style={{flex: 1, height: 70}}>
                <Text style={{marginBottom: 10,  marginLeft: 3}}>Hours</Text>
                <TextInput 
                    keyboardType="number-pad" 
                    placeholder="Hours"
                    value={hours}
                    onChangeText={onChangeHours}
                    style={{
                        flex: 1, 
                        backgroundColor: "#efefef", 
                        padding: 10, 
                        marginRight: 5, 
                        borderRadius: 5
                    }} 
                />
            </View>
            <View>
                <Text style={{
                        fontSize: 30,
                        marginTop: 20,
                        fontWeight: "800"
                    }}>
                    :
                </Text>
            </View>
            
            <View style={{flex: 1}}>
                <Text style={{marginBottom: 10, marginLeft: 3}}>Minutes</Text>
                <TextInput 
                    keyboardType="number-pad" 
                    placeholder="Minutes" 
                    value={minutes}
                    onChangeText={onChangeMinutes}
                    style={{
                        flex: 1, 
                        backgroundColor: "#efefef", 
                        padding: 10, 
                        marginLeft: 5, 
                        borderRadius: 5
                    }}
                />
            </View>
        </View>
    )
}

export default ReminderTime;