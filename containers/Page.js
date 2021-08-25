import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import theme from '../themes/default';
import Screen from '../containers/Screen';
import ToolBar from '../components/ToolBar';
import Block from '../containers/Block';

export default Page = ({ children, header }) => {
    return (
        <Screen>
            <ToolBar />
            <Block>
                <Text style={styles.header}>
                    {header}
                </Text>
                <ScrollView>
                    { children }
                </ScrollView>
            </Block>
        </Screen>
    );
};

const { none, small, large } = theme.sizes;
const { bolder } = theme.fontWeight;

const styles = StyleSheet.create({
    header: {
        marginTop: none,
        marginBottom: none,
        paddingBottom: small,
        fontSize: ( large * 1.1 ),
        borderBottomWidth: ( StyleSheet.hairlineWidth * 2 ),
        borderBottomColor: '#f0f0f0',
        fontWeight: bolder
    }
});