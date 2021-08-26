import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import theme from '../themes/default';
import Page from '../containers/Page';

export default Account = () => {

    const [isUserLoggedIn, setUserLoggedIn] = useState(false);
    const [header, setHeader] = useState('Аккаунт');
    useEffect(() => {
        if( !isUserLoggedIn ) 
            setHeader('Авторизация');
    }, [isUserLoggedIn]);

    const [isRememberMe, setRememberMe] = useState(false);

    return (
        <Page header={header}>

            <Text style={styles.paragraph}>Имя пользователя или email</Text>
            <TextInput
                autoCompleteType='username'
                autoFocus={false}
                style={styles.textInput}
                placeholder="Введите логин"
                //onChangeText={ text => setAmountSendSuccess( text ) }
            />

            <Text style={styles.paragraph}>Пароль</Text>
            <TextInput
                autoCompleteType='off'
                autoFocus={false}
                style={styles.textInput}
                placeholder="Введите пароль"
                secureTextEntry={true}
            />

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isRememberMe}
                    onValueChange={setRememberMe}
                />
                <Text style={styles.checkboxLabel}>
                    Запомнить меня на этом устройстве
                </Text>
            </View>

            <Hyperlink linkDefault={true} onPress={ (url, text) => alert(url + ", " + text) }>
                <Text style={styles.enterButton}>Войти</Text>
            </Hyperlink>

            <Hyperlink linkDefault={true}>
                <Text style={styles.link}>Забыли свой пароль?</Text>
            </Hyperlink>

            <Hyperlink linkDefault={true}>
                <Text style={styles.link}>Создать аккаунт</Text>
            </Hyperlink>
        </Page>
    );
}

const { one } = theme.flex;
const { start } = theme.justifyContent;
const { row } = theme.flexDirection;
const { none, xsmall, small, medium, large, xlarge } = theme.sizes;
const { white } = theme.colors;
const { bolder } = theme.fontWeight;
const { center } = theme.alignItems;
const { alignCenter, alignLeft } = theme.textAlign;

const styles = StyleSheet.create({
    title: {
        marginTop: small,
        marginBottom: small,
        fontWeight: bolder
    },
    paragraph: {
        lineHeight: xlarge,
        textAlign: alignLeft,
        marginTop: xsmall
    },
    link: {
        fontSize: medium,
        lineHeight: xlarge,
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom: small
    },
    textInput: {
        marginTop: xsmall,
        marginBottom: none, 
        padding: small, 
        fontSize: large,
        borderWidth: ( StyleSheet.hairlineWidth * 2 ),
        borderColor: '#7854f7',
        borderRadius: 3,
        marginBottom: medium,
    },
    checkboxContainer: {
        flex: one,
        flexDirection: row,
        alignItems: center,
        justifyContent: start
    },
    checkboxLabel: {
        marginTop: xsmall,
        marginBottom: xsmall
    },
    enterButton: {
        width: 150,
        fontSize: large,
        textAlign: alignCenter,
        backgroundColor: "#7854f7",
        color: white,
        paddingTop: small,
        paddingBottom: small,
        paddingLeft: medium,
        paddingRight: medium,
        marginTop: small,
        marginBottom: small
    }
});