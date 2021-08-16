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
import styled from 'styled-components/native';
import Theme from './themes/default';
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

    console.log(products, exchangeRates);

return (
    <Provider store={store}>
        <Theme>
            
            <Wrapper>
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
            </Wrapper>
        </Theme>
    </Provider>
);
}

const Wrapper = styled.View`
    /*display: ${({ theme: { display } }) => display.flex};
    align-items: ${({ theme: { alignItems } }) => alignItems.start};
    justify-content: ${({ theme: { justifyContent } }) => justifyContent.between};
    gap: ${({ theme: { sizes } }) => sizes.xlarge};*/
    padding: 0;
    margin: ${({ theme: { sizes } }) => sizes.small} 0;
    margin-top: 60;
    background-color: ${({ theme: { colors } }) => colors.transparent};
    /*@media (max-width: 1199.98px) {
        display: ${({ theme: { display } }) => display.flex};
        align-items: ${({ theme: { alignItems } }) => alignItems.start};
        justify-content: ${({ theme: { justifyContent } }) => justifyContent.between};
    }
    @media (max-width: 767.98px) {
        display: ${({ theme: { display } }) => display.block};
    }*/
`;

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
});*/
