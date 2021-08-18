import React from 'react';
import { 
    StyleSheet, 
    Text,
    View
} from 'react-native';
import theme from '../themes/default';

export default Howto = () => {
    return (
        <View style={styles.container}>
            <Text>Howto</Text>
        </View>
    );
}



const { one } = theme.flex;

const styles = StyleSheet.create({
    container: {
        flex: one,
    }
});