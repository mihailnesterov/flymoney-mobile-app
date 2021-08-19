import React from 'react';
import { 
    StyleSheet, 
    Text,
    View
} from 'react-native';
import theme from '../themes/default';
import ToolBar from '../components/ToolBar';

export default Faq = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ToolBar navigation={navigation} />
            
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