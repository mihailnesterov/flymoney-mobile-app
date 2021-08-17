import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { 
    StyleSheet, 
    Text, 
    Image,
    View, 
    Button, 
    TextInput, 
    FlatList, 
    ActivityIndicator 
} from 'react-native';
import theme from './themes/default';
import { getAllProducts, getProductVariations } from './api/products';
import { getAllFlymoneyExchange } from './api/posts';
import Customer from './components/Customer';


const ToolBar = () => {
    
    return (
        <View style={styles.toolbar}>
            
            <Image
                    style={styles.logo}
                    source={require('./assets/flymoney/flymoney.biz-logo-300x69.png')}
                    onLoad={() => console.log('image')}
                    
                />
            
            {/**/}
            <View style={styles.menu}>
                <Text style={styles.menuItem}>&#128100; выйти</Text>
            </View>
            
        </View>
    );
}

export default function App() {

    const [exchangeRates, setExchangeRates] = useState([]);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [searchString, setSearchString] = useState(null);
    

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

    useEffect(() => {
        
        
        if( products.length > 0 ) {
            setProduct(products.filter((item) => item.id === 69)[0]);
            
        }

    }, [products]);
    
    console.log('setProduct', product);

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <ToolBar />
                <Customer />
                {
                    product && 
                        <Text>Продукт: {product.id} {product.name} {product.variations.length}</Text>
                }
                
                <Text style={{marginTop:10,marginBottom:3, fontSize:20}}>Отдаете:</Text>
                <TextInput
                    //defaultValue={'0,00'}
                    value={searchString}
                    keyboardType='number-pad'
                    style={{marginTop:5,marginBottom:0, padding:10, fontSize:20,borderWidth: 1,
                    borderColor: '#f0f0f0'}}
                    placeholder="0,00"
                    onChangeText={(text) => setSearchString((text === '0' || text === '0.00') ? '' : text)}
                />
                
                {isLoading ? <ActivityIndicator animating={true} size="large" /> : (
                    <FlatList
                        style={{padding:0}}
                        data={products}
                        keyExtractor={({ id }, index) => index.toString()}
                        renderItem={({ item }) => (
                            
                            <Text style={{fontSize:20, padding:8, paddingTop:12, paddingBottom:12, borderTopWidth: 1,
                                borderTopColor: '#f0f0f0'}}
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
                                <Text style={{marginLeft:15, color: "blue"}}>{`${item.name} ${item.variations.length}`}</Text>
                            </Text>
                        )}
                    />
                )}
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
            </View>
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
        padding: small,
        margin: none,
        marginTop: ( xlarge * 1.6 ),
        backgroundColor: white
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
        height:50,
    },
    menu: {
        flex: 1,
        padding: 5,
        backgroundColor: '#c5f6e3',
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
        color:'blue'
        //textDecorationLine: 'underline'
    }
});
