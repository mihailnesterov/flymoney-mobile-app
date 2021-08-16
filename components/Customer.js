import React, { useState, useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
import theme from '../themes/default';
import Pannel from '../containers/Pannel';
import { getCustomerById, getOrders } from '../api/products';
import { getCurrentUser } from '../api/user';
import { getOrderDate } from '../api/order';
import { toFloat } from '../api/exchange';
import { 
    actionCustomer, 
    actionCustomerSuccess,
    actionUserStatus,
    actionUserStatusSuccess
} from '../store/actions';

const Customer = (props) => {

    const {
        actionCustomer: setDefaultCustomer, 
        actionCustomerSuccess: setCustomerSuccess,
        actionUserStatus: setDefaultUserStatus,
        actionUserStatusSuccess: setUserStatusSuccess
    } = props;
    
    // constants
    const [user_id] = useState(5);
    const [user_status] = useState({
        ID:5,
        status:"Fly Staff",
        quantity:99999,
        discount:6,
        color:"#0baf13",
        description:""
    });
    const [user_orders_count] = useState(1);
    //

    const [user, setUser] = useState(null);
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        
        if( user_id > 0 ) {
            getCurrentUser( user_id )
                .then(response => setUser(response))
                .catch(error => console.log("Error Getting WP User", error));
        }
        
    },[user_id]);

    useEffect(() => {
             
        if( user ) {
            getCustomerById(user.id)
                .then(response => {
                    setCustomer(response)
                    console.log('getCustomerById',user_id,response)
                })
                .catch(error => console.log("Error Getting WC Customer by ID", error));
        }
        
    },[user, user_id]);

    useEffect(() => {
        
        if( customer ) {
            setCustomerSuccess(customer);
            console.log('setCustomerSuccess',customer)
        } 
        
        return () => {
            setDefaultCustomer();
        }
    },[customer]);

    const [customerOrders, setCustomerOrders] = useState([]);
    
    useEffect(() => {
        customer &&
        getOrders()
            .then((response) => {
                setCustomerOrders(
                    response.sort((a,b) => 
                    (a.date_created < b.date_created) ? 
                    1 : 
                        (
                            (b.date_created < a.date_created) ? 
                            -1 : 0
                        )
                    )
                    .filter(
                        item => 
                        item.customer_id === customer.id && 
                        item.status === 'on-hold'
                    )
                );
            })
            .catch(error => console.log('Get Orders error', error));
    },[customer]);

    const [isCustomerHasOrders, setIsCustomerHasOrders] = useState(false);
    useEffect(() => {
        customerOrders.length > 0 && setIsCustomerHasOrders(true);
    }, [customerOrders]);

    useEffect(() => {
        if( user_status ) {
            setUserStatusSuccess(user_status);
        } 
        
        return () => {
            setDefaultUserStatus();
        }
    },[user_status]);

    
	return(
        !isCustomerHasOrders &&
        <View style={styles.container}>
            <Pannel>
                <Text>Неоплаченные заявки</Text>
                <FlatList
                    style={{padding:10, margin:0}}
                    data={customerOrders}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text style={{display:'flex',justifyContent:"space-between",textAlign:'left'}}>
                            {item.id} {item.title.rendered}  {item.meta.flymoney_exchange_meta_base_name}
                            <Text style={{flex:1}}>{index+1}. № <Text>{item.id}</Text></Text>
                            <Text style={{flex:2}}>{item.line_items[0].name}</Text>
                            <Text style={{flex:1,textAlign:'right'}}>{toFloat(item.meta_data[0].value)} <Text>{item.meta_data[4].value}</Text></Text>
                            <Text style={{flex:2,textAlign:'right'}}>{getOrderDate(item.date_created)}</Text>
                        </Text>
                    )}
                />
            </Pannel>
        </View>
    );
};

const { light } = theme.colors;
const { xlarge } = theme.sizes;

const styles = StyleSheet.create({
    container: {
        marginTop: ( xlarge * 1.6 ),
        borderTopColor: light,
        borderTopWidth: ( StyleSheet.hairlineWidth * 2 )
    },
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch, 
        ...bindActionCreators(
            { 
                actionCustomer, 
                actionCustomerSuccess,
                actionUserStatus,
                actionUserStatusSuccess
            }, 
            dispatch
        )
    }
};

export default connect(null, mapDispatchToProps)(Customer);