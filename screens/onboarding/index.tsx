import { createContext, useState } from "react"
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native"
import { shadow5 } from "../../styles"
import Welcome from "./Welcome"
import PositiveActions from "./PositiveActions"
import NegativeActions from "./NegativeActions"
import Reminder from "./Reminders"
import { AntDesign } from "@expo/vector-icons"


const OnboardingContext = createContext({
    pActionOneScore: null,
    pActionTwoScore: null,
    reminder: null
});


export default function OnboardingScreen() {

    const [screenIndex, setScreenIndex] = useState<number>(0);


    const back = () => {
        setScreenIndex(screenIndex -1)
    }


    const next = () => {
        setScreenIndex(screenIndex + 1)
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
            {screenIndex === 1 && <PositiveActions />}
            {screenIndex === 2 && <NegativeActions />}
            {screenIndex === 3 && <Reminder />}
        </ScrollView>
        
        <View style={styles.nextBtn}>
                <Pressable
                    style={{
                        backgroundColor: "#C24641",
                        width: "100%",
                        justifyContent: "center",
                        padding: 20,
                        alignItems: "center"
                    }}
                    android_ripple={{
                        color: 'light-grey',
                    }}
                    onPress={() => {
                        if (screenIndex === 3) {
                            setScreenIndex(0)
                        } else {
                            setScreenIndex(screenIndex+1)
                        }
                    }}
                >
                    <Text style={{color: "white", fontWeight: "500", fontSize: 15}}>
                        Next
                    </Text>
                </Pressable>
            </View>
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        padding: 20
    },
    nextBtn: {
        position: "absolute",
        bottom: 25,
        borderRadius: 15,
        overflow: 'hidden',
        width: "100%",
        ...shadow5
    }
});
  