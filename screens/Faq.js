import React from 'react';
import { 
    StyleSheet, 
    Text,
    View
} from 'react-native';
import theme from '../themes/default';

export default Faq = () => {
    return (
        <View style={styles.container}>
            <Text>FAQ</Text>
        </View>
    );
}



const { one } = theme.flex;

const styles = StyleSheet.create({
    container: {
        flex: one,
    }
});