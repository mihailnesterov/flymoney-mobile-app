import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Order from './screens/Order';
import Account from './screens/Account';
import Auth from './screens/Auth';
import Agreement from './screens/Agreement';
import Faq from './screens/Faq';
import Safety from './screens/Safety';
import Howto from './screens/Howto';

const Stack = createNativeStackNavigator();

export default App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName="Home" 
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Order" component={Order} />
                    <Stack.Screen name="Auth" component={Auth} />
                    <Stack.Screen name="Account" component={Account} />
                    <Stack.Screen name="Agreement" component={Agreement} />
                    <Stack.Screen name="Faq" component={Faq} />
                    <Stack.Screen name="Safety" component={Safety} />
                    <Stack.Screen name="Howto" component={Howto} />
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </Provider>
    );
}

