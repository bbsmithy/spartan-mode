import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { red } from "../../styles";
import Actions from "./Actions";
import Today from "./Today";
import Spartan from "./Spartan";

const Tabs = createBottomTabNavigator();

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
        <Tabs.Navigator initialRouteName="Today" sceneContainerStyle={{backgroundColor: "white"}}>
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
                component={Spartan}
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