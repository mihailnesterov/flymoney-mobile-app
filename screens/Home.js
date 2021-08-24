import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, useColorScheme, ScrollView, LogBox } from 'react-native';
import theme from '../themes/default';
import ToolBar from '../components/ToolBar';
import Customer from '../components/Customer';
import Send from '../components/Send';
import Reserve from '../components/Reserve';

export default Home = ({ navigation }) => {

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    const colorScheme = useColorScheme();
    
    const themeContainerStyle = 
        colorScheme === 'dark' ? 
        styles.containerLightTheme : 
        styles.containerDarkTheme;

    return (
        <SafeAreaView style={ [ styles.container, themeContainerStyle ] }>
            <ToolBar navigation={ navigation } />
            <Customer />
            <ScrollView>
                <Send />
                <Reserve />
            </ScrollView>
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