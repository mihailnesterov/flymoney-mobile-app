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
import ToolBar from './components/ToolBar';

const Stack = createNativeStackNavigator();

export default App = () => {
    return (
        <Provider store={store}>
            <ToolBar />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Order" component={Order} />
                    <Stack.Screen name="Auth" component={Auth} />
                    <Stack.Screen name="Account" component={Account} />
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </Provider>
    );
}

