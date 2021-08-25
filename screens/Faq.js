import React from 'react';
import { 
    StyleSheet, 
    Text,
    View
} from 'react-native';
import theme from '../themes/default';
import ToolBar from '../components/ToolBar';

export default Faq = () => {
    return (
        <View style={styles.container}>
            <ToolBar />
            
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