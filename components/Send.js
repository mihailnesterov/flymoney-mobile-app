import React, { useState, useEffect, useMemo } from 'react';
import { 
    StyleSheet,
    Text, 
    TextInput, 
    Image, 
    FlatList
} from 'react-native';
import theme from '../themes/default';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Block from '../containers/Block';
import BanksList from '../containers/BanksList';
import Empty from '../components/Empty';
import { getAllProducts } from '../api/products';
import { toFloat, calcAmountSend } from '../api/exchange';
import {
    actionAmountSend,
    actionAmountSendSuccess,
    actionAmountReceive,
    actionBankSendSuccess,
    actionBankReceive
} from '../store/actions';


const selectedBankItemStyle = ( selected, id ) => 
    selected === id ? 
    styles.selectedBankItem : 
    {};

const Send = (props) => {

    const {
        amountSend, 
        amountReceive, 
        isLoaderOpen, 
        exchangeRate, 
        tax,
        userStatus,
        actionAmountSend: setAmountSend,
        actionAmountSendSuccess: setAmountSendSuccess,
        actionAmountReceive: setAmountReceive,
        actionBankSendSuccess: setBankSendSuccess,
        actionBankReceive: setBankReceive,
    } = props;

    const [emptyText, setEmptyText] = useState('');
    
    useEffect(() => {
        isLoaderOpen 
        ? 
        setEmptyText('Загружается список банков...')
        :
        setEmptyText('Список банков с которых отдаете средства')
    }, [isLoaderOpen]);

    const [banksSend, setBanksSend] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((data) => setBanksSend(
                data.filter(
                    (item) => 
                        item.variations.length > 0 && 
                        item.stock_quantity > 0 && 
                        item.tax_status !== 'none' 
                    )
                )
            )
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    const [selectedBankID, setSelectedBankID] = useState(null);
    const [selectedBank, setSelectedBank] = useState({});
    
    useEffect(() => {
        if(selectedBankID) {
            setSelectedBank(banksSend.filter(item => item.id === selectedBankID)[0]);
        }
        setBankReceive();
    }, [selectedBankID]);
    
    useEffect(() => {
        if(selectedBank.id) {
            
            setBankSendSuccess(selectedBank);            
            setAmountReceive();
console.log('selectedBank', selectedBank);
        }
    }, [selectedBank]);
    

    const [discount, setDiscount] = useState(0);
    useMemo(() => {
        if(userStatus.discount) {
            setDiscount(userStatus.discount);
        }
    }, [userStatus]);

    useMemo(() => {
            
        setAmountSendSuccess(
            calcAmountSend( 
                amountReceive, 
                exchangeRate, 
                tax,
                discount
            )
        );

        return () => {
            setAmountSend();
        }

    }, [amountReceive, exchangeRate, tax]);

	return (
        <Block>
            <Text style={styles.header}>Отдаете</Text>
            <TextInput
                defaultValue={amountSend > 0 ? amountSend : ''}
                keyboardType='number-pad'
                style={styles.textInput}
                placeholder="Сумма к выдаче"
                onChangeText={ text => setAmountSendSuccess( text ) }
            />
            <Text style={styles.selectedCurrencyName}>
                { !selectedBankID ? 'Валюта не выбрана' : selectedBank.name }
            </Text>

            <BanksList>
                { 
                    banksSend.length > 0 ? 
                    <FlatList
                        style={styles.banksList}
                        data={banksSend}
                        keyExtractor={({ id }, index) => index.toString()}
                        renderItem={({ item }) => (
                            <Text 
                                style={[
                                    styles.bankItem, 
                                    selectedBankItemStyle( selectedBankID, item.id )
                                ]}
                                onPress = {() => setSelectedBankID(item.id)}
                                >
                                    {
                                        (item.images && item.images.length > 0) ?
                                        <Image
                                            style={styles.itemImage}
                                            source={{uri: item.images[0].src}}
                                        />
                                        :
                                        '    '
                                    }
                                {'    '}
                                <Text style={styles.itemTextName}>{item.name}</Text>
                                <Text style={styles.itemTextReserve}> Резерв {toFloat(item.stock_quantity)}</Text>
                            </Text>
                        )}
                    />
                    :
                    <Empty emptyText={emptyText} />
                }
            </BanksList>
        </Block>
        
	);
};

const { one } = theme.flex;
const { white, dark } = theme.colors;
const { none, xsmall, small, medium, large } = theme.sizes;

const styles = StyleSheet.create({
    header: {
        marginTop: none,
        marginBottom: xsmall, 
        fontSize: ( large * 1.1 )
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
    selectedCurrencyName: {
        position: 'absolute',
        right: 25,
        top: 72,
        color: "#7854f7"
    },
    banksList: {
        padding: none
    },
    bankItem: {
        flex: one,
        backgroundColor: white,
        color: dark,
        padding: xsmall,
        margin: none,
        padding: small, 
        paddingTop: medium, 
        paddingBottom: medium, 
        borderWidth: ( StyleSheet.hairlineWidth * 2 ),
        borderColor: '#f0f0f0', 
        marginBottom: medium, 
        borderRadius: 3,
    },
    selectedBankItem: {
        backgroundColor: '#7854f7',
        color: white,
    },
    itemImage: {
        width: 20,
        height: 20
    },
    itemTextName: {
        fontSize: large,
        marginLeft: large, 
        color: "#222222",
    },
    itemTextReserve: {
        fontSize: medium,
        color: "#7854f7",
    }
});

const mapStateToProps = (state) => {
    return {
        amountSend: state.amountSend.amount,
        amountReceive: state.amountReceive.amount,
        isLoaderOpen: state.loader.isOpen,
        bankSend: state.bankSend.bank,
        exchangeRate: state.exchangeRate.rate,
        tax: state.tax.tax,
        userStatus: state.userStatus.status
    };
}

const mapDispatchToProps = dispatch => {
    return {
            dispatch, 
            ...bindActionCreators(
            { 
                actionAmountSend,
                actionAmountSendSuccess,
                actionAmountReceive,
                actionBankSendSuccess,
                actionBankReceive
            }, 
            dispatch
        )
    }
};

export default connect( mapStateToProps, mapDispatchToProps )(Send);