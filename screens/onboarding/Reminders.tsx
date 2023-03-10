import { View, Text, TextInput } from "react-native"
import { p } from "../../styles";


const Reminder = () => {
    return (
        <View>
            <Text style={[p, {marginBottom: 25}]}>
                Set your daily reminder to check off your actions.
            </Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput keyboardType="number-pad" placeholder="Hours" style={{flex: 1, backgroundColor: "#efefef", padding: 10, marginRight: 5, borderRadius: 5}} />
                <Text style={{fontSize: 30, fontWeight: "800"}}>:</Text>
                <TextInput keyboardType="number-pad" placeholder="Minutes" style={{flex: 1, backgroundColor: "#efefef", padding: 10, marginLeft: 5, borderRadius: 5}} />
            </View>
        </View>
    )
}

export default Reminder;