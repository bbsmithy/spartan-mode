import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native"
import { red, shadow5 } from "../../styles"
import Welcome from "./Welcome"
import PositiveActions from "./PositiveActions"
import NegativeActions from "./NegativeActions"
import Reminder from "./Reminders"
import { AntDesign } from "@expo/vector-icons"
import { useDispatch, useSelector } from "react-redux"
import { setScreenIndex, setComplete } from "../../state/reducers/OnboardingReducer"
import { getScreenIndex } from "../../state/selectors/OnboardingSelectors"
import { useNavigation } from "@react-navigation/native"
import FullButton from "../../components/FullButton"

export default function OnboardingScreen() {

    const dispatch = useDispatch()
    const screenIndex = useSelector(getScreenIndex)

    const navigation = useNavigation()


    const back = () => {
        dispatch(setScreenIndex(screenIndex - 1))
    }


    const next = () => {
        if (screenIndex === 3) {
            dispatch(setComplete())
        } else {
            dispatch(setScreenIndex(screenIndex + 1))
        }

    }

    const skip = () => {
        // set onbaording complete
        // dispatch()
    }

    const isWelcome = screenIndex === 0

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: 20 }}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
                {!isWelcome && (
                    <Pressable
                        android_ripple={{ color: 'darkgrey',  radius: 25 }} 
                        style={{ 
                            borderRadius: 25,
                            height: 50, 
                            width: 50,
                            justifyContent: "center",
                            alignItems: "center"
                        }} 
                        onPress={back}
                    >
                        <AntDesign name="left" size={20} />
                    </Pressable>
                )}
            </View>
            <View style={{flex: 8, justifyContent: "center", alignItems: "center"}}>
                {!isWelcome && (<Text style={{ fontWeight:"600" }}>{screenIndex}/3</Text>)}
            </View>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Pressable 
                    android_ripple={{ color: 'grey', radius: 25 }} 
                    style={{
                        height: 50, 
                        width: 50, 
                        borderRadius: 25, 
                        justifyContent: "center", 
                        alignItems: "center"
                    }} 
                    onPress={next}
                >
                    <Text>Skip</Text>
                </Pressable> 
            </View> 
        </View>
        <ScrollView style={{ marginTop: "10%" }} contentContainerStyle={{ paddingBottom: 100 }}>
            {screenIndex === 0 && <Welcome />}
            {screenIndex === 1 && (
                <PositiveActions />
            )}
            {screenIndex === 2 && (
                <NegativeActions />
             )}
            {screenIndex === 3 && <Reminder />}
        </ScrollView>
        <FullButton 
            text={screenIndex === 3 ? "Done": "Next"}
            onPress={next}
        />
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    }
});
  