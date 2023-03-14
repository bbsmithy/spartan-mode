import {View, Text, ScrollView, FlatList, Button} from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { red } from "../../styles";
import ActionInput from "../../components/ActionInput";
import FullButton from "../../components/FullButton";

const Tabs = createBottomTabNavigator();


const Actions = () => {
    return (
        <View style={{ padding: 20, marginTop: 40 }}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <Text style={{fontSize: 22}}>
                    Actions
                </Text>
                <Button title="Add" />
            </View>
            <FlatList
                data={[
                    { title: "YOYO", score: '50' },
                    { title: "YOYO", score: '50' },
                    { title: "YOYO", score: '50' },
                    { title: "YOYO", score: '50' },
                    { title: "YOYO", score: '50' },
                ]}
                contentContainerStyle={{paddingTop: 20, paddingBottom: 100}}
                renderItem={({ item }) => {
                    return (
                        <ActionInput 
                            title={item.title} 
                            score={item.score}
                            onChangeScore={() => {

                            }}
                            onChangeTitle={() => {

                            }}
                        />
                    )
                }}
            />
            <View style={{position: "absolute", bottom: 20}}>
                <FullButton 
                    text={"Save"} 
                    onPress={() => {
                        alert("SAVE")
                    }}

                />
            </View>
            
            
        </View>
        
    )
}

const Today = () => {
    return (
        <View>
            <Text>TODAY</Text>
        </View>
    )
}

function TabBarIcon(props: {
    name: string;
    color: string;
  }) {
    return (
      <MaterialCommunityIcons size={30} style={{ marginBottom: 0 }} {...props} />
    );
  }

const TabNavigator = () => {
    return (
        <Tabs.Navigator sceneContainerStyle={{backgroundColor: "white"}}>
            <Tabs.Screen 
                name="Actions" 
                component={Actions}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="target" color={color} />
                    ),
                    tabBarActiveTintColor: red 
                }}
            />
            <Tabs.Screen 
                name="Today" 
                component={Today}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="format-list-checks" color={color} />
                    ),
                    tabBarActiveTintColor: red
                }}
            />
            <Tabs.Screen 
                name="Stats" 
                component={Today}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="chart-timeline-variant" color={color} />
                    ),
                    tabBarActiveTintColor: red 
                }}
            />
        </Tabs.Navigator>
    )
}

export default TabNavigator;