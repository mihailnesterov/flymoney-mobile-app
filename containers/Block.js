import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import theme from '../themes/default';

export default Block = ({ children }) => (
    <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

const { one } = theme.flex;
const { white } = theme.colors;
const { xsmall, medium } = theme.sizes;

const styles = StyleSheet.create({
    container: {
        flex: one,
        position: 'relative',
        padding: medium,
        margin: medium,
        backgroundColor: white,
        shadowColor: '#d8dde5',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderWidth: ( StyleSheet.hairlineWidth * 2 ),
        borderColor: '#f0f0f0',
        borderRadius: xsmall,
    },
});