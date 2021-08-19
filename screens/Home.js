import React from 'react';
import { StyleSheet, SafeAreaView, useColorScheme } from 'react-native';
import theme from '../themes/default';
import ToolBar from '../components/ToolBar';
import Customer from '../components/Customer';
import Send from '../components/Send';

export default Home = ({ navigation }) => {

    const colorScheme = useColorScheme();
    
    const themeContainerStyle = 
        colorScheme === 'dark' ? 
        styles.containerLightTheme : 
        styles.containerDarkTheme;

    return (
        <SafeAreaView style={ [ styles.container, themeContainerStyle ] }>            
            <ToolBar navigation={ navigation } />
            <Customer />
            <Send />           
        </SafeAreaView>
    );
}

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