import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../themes/default';

export default BanksList = ({ children }) => (
    <View style={styles.container}>{children}</View>
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