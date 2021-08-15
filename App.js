import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
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
import { getAllProducts } from './api/products';
import { getAllFlymoneyExchange } from './api/posts';


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
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
});
