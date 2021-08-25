import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Order from './screens/Order';
import Account from './screens/Account';
import Auth from './screens/Auth';
import Agreement from './screens/Agreement';
import Faq from './screens/Faq';
import Safety from './screens/Safety';
import Howto from './screens/Howto';

const Tab = createBottomTabNavigator();

export default App = () => {

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator 
                    initialRouteName="Home" 
                    screenOptions={{ headerShown: false }}
                >
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Order" component={Order} />
                    <Tab.Screen name="Auth" component={Auth} />
                    <Tab.Screen name="Account" component={Account} />
                    <Tab.Screen name="Agreement" component={Agreement} />
                    <Tab.Screen name="Faq" component={Faq} />
                    <Tab.Screen name="Safety" component={Safety} />
                    <Tab.Screen name="Howto" component={Howto} />
                </Tab.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </Provider>
    );
}

