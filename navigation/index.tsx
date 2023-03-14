import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { Text } from "react-native"
import OnboardingScreen from '../screens/onboarding';
import TabNavigator from '../screens/tabs';
import { isOnboardingComplete } from '../state/selectors/OnboardingSelectors';
import AddAction from '../screens/tabs/AddAction';

const Stack = createNativeStackNavigator();

const Navigation = () => {

    const onboardingComplete = useSelector(isOnboardingComplete);

    return (
        <NavigationContainer>
            <Stack.Navigator>
            {!onboardingComplete && (
                <Stack.Screen 
                    name="Onboarding" 
                    component={OnboardingScreen} 
                    options={{ headerShown: false }}
                />
            )}
            {onboardingComplete && (
                <>
                    <Stack.Screen
                        name="Main" 
                        component={TabNavigator} 
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name='AddAction'
                        component={AddAction}
                        options={{
                            headerShown: false,
                            presentation: "modal"
                        }}
                    />
                </>
            )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;