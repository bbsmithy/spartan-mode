import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux'
import store from './state/store';
import { Text } from "react-native";

import OnboardingScreen from './screens/onboarding';
import TabNavigator from './screens/tabs';
import { isOnboardingComplete } from './state/selectors/OnboardingSelectors';
import Navigation from './navigation';


function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App