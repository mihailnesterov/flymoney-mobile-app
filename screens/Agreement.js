import React from 'react';
import { 
    StyleSheet, 
    Text,
    View
} from 'react-native';
import theme from '../themes/default';
import ToolBar from '../components/ToolBar';

export default Agreement = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ToolBar navigation={navigation} />

            <Text>Agreement</Text>
        </View>
    );
}



const { one } = theme.flex;

const styles = StyleSheet.create({
    container: {
        flex: one,
    }
});