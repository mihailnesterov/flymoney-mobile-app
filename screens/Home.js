import React from 'react';
import { ScrollView } from 'react-native';
import Screen from '../containers/Screen';
import ToolBar from '../components/ToolBar';
import Customer from '../components/Customer';
import Send from '../components/Send';
import Reserve from '../components/Reserve';

export default Home = ({ navigation }) => {
    return (
        <Screen>
            <ToolBar navigation={ navigation } />
            <Customer />
            <ScrollView>
                <Send />
                <Reserve />
            </ScrollView>
        </Screen>
    );
}