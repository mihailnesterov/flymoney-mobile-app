import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { 
    StyleSheet, 
    Text, 
    ScrollView,
    View, 
    Button, 
    TextInput, 
    FlatList, 
    ActivityIndicator 
} from 'react-native';
import theme from './themes/default';
import { getAllProducts } from './api/products';
import { getAllFlymoneyExchange } from './api/posts';
/*import Send from './components/Send';
import Receive from './components/Receive';
import Reserve from './components/Reserve';
import Loader from './components/Loader';
import Modal from './containers/Modal';
import Order from './components/Order';
import Pannel from './containers/Pannel';*/
//import Customer from './components/Customer';
//import LastExchanges from './components/LastExchanges';


export default function App() {

    const [exchangeRates, setExchangeRates] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getAllFlymoneyExchange(100)
            .then((response) => response.json())
            .then((json) => setExchangeRates(json))
            .catch((error) => {
                console.error(error);
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

    //console.log(theme, store.getState());

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Text>Банки:</Text>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        style={{padding:10}}
                        data={products}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text style={{fontSize:16, marginBottom:10}}>{item.id}  {item.name} {item.variations.length}</Text>
                        )}
                    />
                )}
                <Text>Курсы валют:</Text>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        style={{padding:10}}
                        data={exchangeRates}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text style={{fontSize:16, marginBottom:10}}>
                                {item.id} {item.title.rendered}  {item.meta.flymoney_exchange_meta_base_name}
                            </Text>
                        )}
                    />
                )}
                <StatusBar style="auto" />
            </View>
        </Provider>
    );
}

const { light, white } = theme.colors;
const { none, small, xlarge } = theme.sizes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: light,
        borderTopWidth: ( StyleSheet.hairlineWidth * 2 ),
        padding: small,
        margin: none,
        marginTop: ( xlarge * 1.6 ),
        backgroundColor: white
    },
});
