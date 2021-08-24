import React from 'react';
import { StyleSheet, SafeAreaView, useColorScheme } from 'react-native';
import theme from '../themes/default';

export default Screen = ({ children }) => {
    
    const colorScheme = useColorScheme();
    
    const themeContainerStyle = 
        colorScheme === 'dark' ? 
        styles.containerLightTheme : 
        styles.containerDarkTheme;

    return (
        <SafeAreaView style={[ 
            styles.container, 
            themeContainerStyle 
        ]}>
            {children}
        </SafeAreaView>
    );
};


const { one } = theme.flex;
const { light, white } = theme.colors;
const { none } = theme.sizes;

const styles = StyleSheet.create({
    container: {
        flex: one,
        borderTopColor: light,
        borderTopWidth: ( StyleSheet.hairlineWidth * 2 ),
        padding: none,
        margin: none,
        backgroundColor: white,
        backgroundColor: '#F3F8FB'
    },
    containerLightTheme: {
        backgroundColor: '#F3F8FB',
    },
    containerDarkTheme: {
        backgroundColor: '#F3F8FB',
    }
});