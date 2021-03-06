import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../themes/default';

export default Pannel = ({ children }) => (
    children &&
    <View style={styles.container}>{children}</View>
);


const { one } = theme.flex;
const { white } = theme.colors;
const { none, medium } = theme.sizes;

const styles = StyleSheet.create({
    container: {
        flex: one,
        padding: medium,
        margin: none,
        backgroundColor: white,
        shadowColor: '#d8dde5',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
});