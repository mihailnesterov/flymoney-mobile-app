import React from 'react';
import { 
    StyleSheet, 
    Text, 
    Image,
    View
} from 'react-native';
import theme from '../../themes/default';

export default TopMenu = ({ isHidden }) => {
    return(
        isHidden !== false &&
        <View style={styles.container}>
            <Text style={styles.menuItem}>Обмен</Text>
            <Text style={styles.menuItem}>Соглашение</Text>
            <Text style={styles.menuItem}>FAQ</Text>
            <Text style={styles.menuItem}>Безопасность</Text>
            <Text style={styles.menuItem}t>Как создать?</Text>
            <Text style={styles.menuItem}>Аккаунт</Text>
        </View>
    );
}

const { flex } = theme.display;
const { one, two } = theme.flex;
const { row } = theme.flexDirection;
const { light, white, layout, darkblue } = theme.colors;
const { none, xsmall, small, medium, large, xlarge } = theme.sizes;
const { center } = theme.alignItems;
const { alignCenter, alignLeft, alignRight } = theme.textAlign;

const styles = StyleSheet.create({
    container: {
        flex: one,
        top: xlarge * 1.8,
        left: none,
        position: 'absolute',
        zIndex: 999,
        elevation: 999,
        backgroundColor: darkblue,
        
        padding: small,
        borderColor: layout,
        borderWidth: ( StyleSheet.hairlineWidth * 4 ),
    },
    menuItem: {
        fontSize: large,
        color: white,
        margin: xsmall,
        textDecorationLine: 'underline',
    }
});