import React from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import theme from '../../themes/default';

const screens = [
    {
        screen: 'Home',
        title: 'Обмен',
    },
    {
        screen: 'Agreement',
        title: 'Соглашение',
    },
    {
        screen: 'Faq',
        title: 'FAQ',
    },
    {
        screen: 'Safety',
        title: 'Безопасность',
    },
    {
        screen: 'Howto',
        title: 'Как создать?',
    },
    {
        screen: 'Account',
        title: 'Аккаунт',
    }
];

export default TopMenu = ({ isHidden, navigation }) => {

    return(
        isHidden !== false &&
        <View style={styles.container}>
            {
                screens.map((item, index) => (
                    <TouchableOpacity 
                        key={index} 
                        onPress={() => navigation.push(item.screen)}
                    >
                        <Text style={styles.menuItem}>{item.title}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

const { one } = theme.flex;
const { white, layout, darkblue } = theme.colors;
const { none, xsmall, small, large, xlarge } = theme.sizes;

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
        borderWidth: ( StyleSheet.hairlineWidth * 4 )
    },
    menuItem: {
        fontSize: large,
        color: white,
        padding: small,
        textDecorationLine: 'underline'
    }
});