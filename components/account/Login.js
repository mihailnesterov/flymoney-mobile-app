import React, { useState, useEffect, useCallback } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    CheckBox,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Hyperlink from 'react-native-hyperlink';
import theme from '../../themes/default';
import Loader from '../Loader';

const saveToStorage = async ( userData ) => {
    if (userData) {
        await AsyncStorage.setItem('user', JSON.stringify({
                isLoggedIn: true,
                authToken: userData.auth_token,
                id: userData.user_id,
                name: userData.user_login
            })
        );
        return true;
    }

    return false;
}

const logInButtonDisabledStyle = isDisabled => isDisabled && styles.logInDisabled;


export default Login = () => {

    const [validating, setValidating] = useState(false);
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    //const [isRememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        setButtonDisabled(login && password ? false : true);
    }, [login, password]);

    const handleOnLoginButton = useCallback(() => {
        if( login && password ) {
            validateUser();
        }
        
    }, [login, password]);

    const validateUser = async () => {
		
        setValidating(true);

		const formData = new FormData();
            formData.append('type', 'login');
            formData.append('login', login);
            formData.append('password', password);

		return fetch('https://flymoney.biz/authentication.php', {
                method: 'POST',
                body: formData
		    })
			.then((response) => response.json())
            /*.then(response => {
                console.log(JSON.stringify(response, null, 4))
                //return response.json()
            })*/
			.then((json) => {
				
                const data = json.data;
                //console.log('data', data);
				if ( saveToStorage(data) ) {
                    setValidating(false);
                } else {
                    console.log('Failed to store auth');
                }
                    
			})
			.catch(error => console.log('fetch', error));
	}

	return(
        validating ?
        <Loader />
        :
        <View>
            
            <Text style={styles.title}>Вы не авторизованы на этом устройстве</Text>

            <Text style={styles.paragraph}>Логин</Text>
            <TextInput
                defaultValue={login ? login : ''}
                autoCompleteType='username'
                autoFocus={false}
                style={styles.textInput}
                placeholderTextColor='#FF7373'
                placeholder="Введите логин"
                onChangeText={ text => setLogin( text ) }
            />

            <Text style={styles.paragraph}>Пароль</Text>
            <TextInput
                defaultValue={password ? password : ''}
                autoCompleteType='off'
                autoFocus={false}
                style={styles.textInput}
                placeholderTextColor='#FF7373'
                placeholder="Введите пароль"
                secureTextEntry={true}
                onChangeText={ text => setPassword( text ) }
            />

            {/*<View style={styles.checkboxContainer}>
                <CheckBox
                    value={isRememberMe}
                    onValueChange={setRememberMe}
                />
                <Text style={styles.checkboxLabel}>
                    Запомнить меня на этом устройстве
                </Text>
            </View>*/}

            <TouchableOpacity
                disabled={isButtonDisabled}
                onPress={() => handleOnLoginButton()}
            >
                
                <Text style={[
                    styles.logInButton,
                    logInButtonDisabledStyle(isButtonDisabled)
                ]}>Войти</Text>

            </TouchableOpacity>

            <Hyperlink linkDefault={true}>
                <Text style={styles.link}>Забыли свой пароль?</Text>
            </Hyperlink>

            <Hyperlink linkDefault={true}>
                <Text style={styles.link}>Создать аккаунт</Text>
            </Hyperlink>

        </View>
    );
};

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
    logInButton: {
        fontSize: large,
        textAlign: alignCenter,
        backgroundColor: "#7854f7",
        color: white,
        paddingTop: small,
        paddingBottom: small,
        paddingLeft: medium,
        paddingRight: medium,
        marginTop: small,
        marginBottom: xlarge
    },
    logInDisabled: {
        opacity: 0.6
    }
});