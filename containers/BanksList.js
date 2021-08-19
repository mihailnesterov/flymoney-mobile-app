import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import theme from '../themes/default';

export default BanksList = ({ children }) => (
    <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

const { one } = theme.flex;
const { none, xsmall } = theme.sizes;

const styles = StyleSheet.create({
    container: {
        flex: one,
        paddingRight: xsmall,
        margin: none
    },
});