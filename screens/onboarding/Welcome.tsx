import { Text, View } from "react-native"
import { p } from "../../styles";

const Welcome = () => {
    return (
        <View>
            <Text style={{ fontSize: 20 }}>Welcome to Spartan Mode</Text>
            <Text style={p}>
                This app is designed to help you do the things you know you should be doing, and avoid the things you know you shouldn't be doing.
            </Text>
            <Text style={p}>
                Identify positive actions and assign a positive score to each.
                Then identify negative actions you want to avoid and assign negative scores to those.
            </Text>
            <Text style={p}>
                At the end of each day you'll select which actions you've taken. You can get a max score of 100pts each day.
            </Text>
            <Text style={p}>
                The aim is to reach the highest spartan soldier ranking of Polemarch, which is 90/100 average score 🤯🚀💪🥵🛀
            </Text>
        </View>
    )
}

export default Welcome;