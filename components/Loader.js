import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import theme from '../themes/default';

export default Loader = () => {
	return(
        <View style={[styles.container]}>
            <ActivityIndicator size="large" color="#4B40A8" />
        </View>
    );
};

const { one } = theme.flex;

const styles = StyleSheet.create({
    container: {
        flex: one
    }
});