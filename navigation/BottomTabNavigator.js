import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Account from '../screens/Account';
import Agreement from '../screens/Agreement';
import Faq from '../screens/Faq';
import Howto from '../screens/Howto';

const Tab = createBottomTabNavigator();

const getTabBarIcons = (route, focused, color, size) => {
    let iconName;

    switch (route.name) {
        case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            break;
        case 'Account':
            iconName = focused ? 'person-circle' : 'person-circle-outline';
            break;
        case 'Agreement':
            iconName = focused ? 'document-text' : 'document-text-outline';
            break;
        case 'Faq':
            iconName = focused ? 'frequently-asked-questions' : 'frequently-asked-questions';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        case 'Howto':
            iconName = focused ? 'question' : 'question';
            return <Octicons name={iconName} size={size} color={color} />;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
}

const TabScreen = (name, component, label) => {
    return(
        <Tab.Screen 
            name = {name} 
            component = {component} 
            options = {{ tabBarLabel: label }} 
        />
    );
}

const TintColors = {
    active: '#7854f7',
    inactive: '#666666',
}

export default BottomTabNavigator = () => {
    return(
        <Tab.Navigator 
            initialRouteName="Home" 
            screenOptions={({ route }) => ({ 
                headerShown: false,
                tabBarActiveTintColor: TintColors.active,
                tabBarInactiveTintColor: TintColors.inactive,
                tabBarIcon: ({ 
                    focused, 
                    color, 
                    size 
                }) => getTabBarIcons(route, focused, color, size),
            })}
        >
            { TabScreen("Home", Home, 'В начало') }
            { TabScreen("Account", Account, 'Аккаунт') }
            { TabScreen("Agreement", Agreement, 'Соглашение') }
            { TabScreen("Faq", Faq, 'FAQ') }
            { TabScreen("Howto", Howto, 'Как создать?') }
           
        </Tab.Navigator>
    );
}