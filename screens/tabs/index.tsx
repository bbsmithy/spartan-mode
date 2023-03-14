import {View, Text, ScrollView, FlatList, Button} from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { red } from "../../styles";
import ActionInput from "../../components/ActionInput";
import FullButton from "../../components/FullButton";
import { useNavigation } from "@react-navigation/native";
import Actions from "./Actions";

const Tabs = createBottomTabNavigator();

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