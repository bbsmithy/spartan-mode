import { Text, View } from "react-native"
import { p } from "../../styles";

const Welcome = () => {
    return (
        <View>
            <Text style={{ fontSize: 20 }}>Welcome to Spartan Mode</Text>
            <Text style={p}>
                This app is designed to help you do the things that you know are good for you, and avoid the things that you know are bad for you.
            </Text>
            <Text style={p}>
                Identify positive actions and assign a positive score to each.
                Then identify neagtive actions you want to avoid and assign negative scores to those.
            </Text>
            <Text style={p}>
                At the end of each day you'll select which actions you've taken. You can get a max score of 100pts each day.
            </Text>
            <Text style={p}>
                An average of 95pts over 10 days is SPARTAN MODE!!! 🤯🚀💪🥵🛀
            </Text>
        </View>
    )
}

export default Welcome;