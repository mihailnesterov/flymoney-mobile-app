import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { 
    StyleSheet, 
    Text, 
    Image,
    View, 
    ScrollView,
    SafeAreaView,
    Button, 
    TextInput, 
    FlatList, 
    ActivityIndicator,
    useColorScheme,
    TouchableOpacity
} from 'react-native';
/*import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';*/
import theme from './themes/default';
import { getAllProducts, getProductVariations } from './api/products';
import { getAllFlymoneyExchange } from './api/posts';
import ToolBar from './components/ToolBar';
import Customer from './components/Customer';


/*const ToolBar = () => {
    
    return (
        <View style={styles.toolbar}>
            
            <Image
                    style={styles.logo}
                    source={require('./assets/flymoney/xlogo.png.pagespeed.ic.HXO2Kydk5b.png')}
                    onLoad={() => console.log('image')}
                    
                />
            
            <View style={styles.menu}>
                <Text style={styles.menuItem}>&#128100; выйти</Text>
            </View>
            
        </View>
    );
}*/

export default function App() {

    const [exchangeRates, setExchangeRates] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchString, setSearchString] = useState(null);
    const colorScheme = useColorScheme();
    
    const themeContainerStyle = 
        colorScheme === 'dark' ? 
        styles.containerLightTheme : 
        styles.containerDarkTheme;
    

    useEffect(() => {
        getAllFlymoneyExchange(100)
            .then((response) => response.json())
            .then((json) => setExchangeRates(json))
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        getAllProducts()
            .then((data) => setProducts(data))
            .catch(error => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, []);
    
    console.log('colorScheme', colorScheme);

    return (
        <Provider store={store}>
            <ToolBar />
            <SafeAreaView style={[styles.container, themeContainerStyle]}>
                
                <Customer />
                {/*<Text>{colorScheme}</Text>*/}
                <SafeAreaView style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    borderWidth: 2,
                    borderColor: '#f0f0f0',
                    padding:15,
                    borderRadius: 10,
                }}>
                <Text style={{marginTop:0,marginBottom:3, fontSize:20}}>Отдаете:</Text>
                <TextInput
                    //defaultValue={'0,00'}
                    value={searchString}
                    keyboardType='number-pad'
                    style={{
                        marginTop:5,
                        marginBottom:0, 
                        padding:10, 
                        fontSize:20,
                        borderWidth: 1,
                        borderColor: '#9977F6',
                        borderRadius: 3,
                        marginBottom: 10,
                    }}
                    placeholder="0,00"
                    onChangeText={(text) => setSearchString((text === '0' || text === '0.00') ? '' : text)}
                />
                
                {isLoading ? <ActivityIndicator animating={true} size="large" /> : (
                    <FlatList
                        style={{padding:0}}
                        data={products.filter((item) => item.variations.length > 0)}
                        keyExtractor={({ id }, index) => index.toString()}
                        renderItem={({ item }) => (
                            
                            <Text style={{fontSize:18, padding:8, paddingTop:12, paddingBottom:12, borderWidth: 1,
                                borderColor: '#f0f0f0', marginBottom: 10, borderRadius: 3,}}
                                onPress = { (e) => {console.log('text bank:', e)} }
                                >
                                    {
                                        (item.images && item.images.length > 0) ?
                                        <Image
                                            style={{width:20,height:20}}
                                            source={{uri: item.images[0].src}}
                                        />
                                        :
                                        '    '
                                    }
                                {'    '}
                                <Text style={{marginLeft:15, color: "#222222"}}>{item.name}</Text>
                            </Text>
                        )}
                    />
                )}
                </SafeAreaView>
                <Text>Курсы валют:</Text>
                {/*isLoading ? <ActivityIndicator animating={true} size="large" /> : (
                    <FlatList
                        style={{padding:10}}
                        data={exchangeRates}
                        keyExtractor={({ id }, index) => index.toString()}
                        renderItem={({ item }) => (
                            <Text style={{fontSize:18, marginTop:5, marginBottom:5, color: "blue", borderWidth: 1,
                                borderColor: '#f0f0f0'}}>
                                <Button 
                                    style={{fontSize:18, marginTop:5, marginBottom:5, padding:15, backgroundColor: "green", borderWidth: 1,
                                    borderColor: '#f0f0f0'}}
                                    title={`${item.id} ${item.title.rendered} ${item.meta.flymoney_exchange_meta_base_name}`}
                                    onPress={(e) => console.log('button exchange rate:',e)}
                                />
                            </Text>
                        )}
                    />
                )*/}
                <StatusBar style="auto" />
            </SafeAreaView>
        </Provider>
    );
}

const { one } = theme.flex;
const { light, white, dark } = theme.colors;
const { none, xsmall, small, medium, large, xlarge } = theme.sizes;
const { start, center } = theme.alignItems;
const { wrap, noWrap } = theme.flexWrap;
const { alignCenter, alignRight } = theme.textAlign;

const styles = StyleSheet.create({
    container: {
        flex: one,
        borderTopColor: light,
        borderTopWidth: ( StyleSheet.hairlineWidth * 2 ),
        padding: none,
        margin: none,
        //marginTop: ( xlarge * 1.6 ),
        backgroundColor: white,
        backgroundColor: '#c5f6e3'
    },
    containerLightTheme: {
        backgroundColor: '#F3F8FB',
    },
    containerDarkTheme: {
        backgroundColor: '#F3F8FB',
    },
    toolbar: {
        flex: none,
        alignSelf: start,
        flexDirection: "row",
        flexWrap: wrap,
        /*paddingHorizontal: 8,
        paddingVertical: 60,
        marginHorizontal: 20,
        marginBottom: 6,*/
        marginBottom: xlarge,
        /*backgroundColor: 'aliceblue',
        borderWidth: 0,
        borderColor: '#f0f0f0',
        borderStyle: 'solid',*/
        //padding: 10,
    },
    logo: {
        flex:2,
        height:55,
    },
    menu: {
        flex: 1,
        padding: 5,
        //backgroundColor: '#c5f6e3',
        /*borderWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'solid',*/
        //color: dark,
        marginLeft:large,
        justifyContent:center,
        alignItems: center,
        flexDirection: 'row',
        
    },
    menuItem: {
        flex: 1,
        color: dark,
        fontSize: 18,
        textAlign: alignCenter,
        marginLeft: 5,
        marginRight: 5,
        //color:'blue'
        //textDecorationLine: 'underline'
    }
});
