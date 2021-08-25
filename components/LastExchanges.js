import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { 
    StyleSheet, 
    Text,
    View,
    FlatList,
    TouchableHighlight
} from 'react-native';
import theme from '../themes/default';
import Block from '../containers/Block';
import BanksList from '../containers/BanksList';
import Empty from './Empty';
import { getOrders } from '../api/products';
import { getOrderDate } from '../api/order';

const getSender = (exchange) => {
    return exchange.line_items[0].name.split(' - ')[0];
}

const getReceiver = (exchange) => {
    return exchange.line_items[0].name.split(' - ')[1];
}

const LastExchanges = (props) => {

    const {isLoaderOpen} = props;
    const [emptyText, setEmptyText] = useState('');
    
    useEffect(() => {
        isLoaderOpen 
        ? 
        setEmptyText('Загружаются последние обмены...')
        :
        setEmptyText('Список пуст')
    }, [isLoaderOpen]);

    const [exchanges, setExchanges] = useState([]);

    useEffect(() => {
        getOrders()
            .then((response) => {
                setExchanges(
                    response
                        .filter( 
                            item => item.total !== '0.00' && 
                            item.total !== ''
                        ).sort(( a, b ) => 
                            ( a.date_created < b.date_created ) ? 
                            1 : 
                            (
                                ( b.date_created < a.date_created ) ? 
                                -1 : 0
                            )
                        ).slice(0, 5));
            })
            .catch(err => console.log('Get Orders error', err));
    },[]);

    
	return (
        <Block>
            <Text style={styles.header}>Последние обмены</Text>
            <BanksList>
            {
                exchanges && exchanges.length > 0 ?
                <FlatList
                    style={styles.list}
                    data={exchanges}
                    keyExtractor={({ id }, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableHighlight style={styles.listItem}>
                            <View style={styles.listItemView}>
                                
                                <View style={styles.listItemBlock}>
                                    <Text style={styles.textDate}>
                                        &#128197;
                                        &nbsp;
                                        { getOrderDate( item.date_created ) }
                                    </Text>
                                    <Text style={styles.textSum}>
                                        <Text style={styles.textBold}>{item.line_items[0].total}</Text>
                                        &nbsp;
                                        <Text style={styles.textColored}>{item.currency}</Text>
                                    </Text>
                                </View>
                                
                                <View style={styles.listItemBlock}>
                                    <Text style={styles.textSender}>{ getSender( item ) }</Text>
                                    <Text style={styles.textArrow}>&#10230;</Text>
                                    <Text style={styles.textReceiver}>{ getReceiver( item ) }</Text>
                                </View>
                                
                            </View>
                        </TouchableHighlight>
                    )}
                />
                :
                <Empty emptyText={emptyText} />
            }
            </BanksList>
        </Block>
        
	);
};

const { flex } = theme.display;
const { one, three } = theme.flex;
const { row, column } = theme.flexDirection;
const { start } = theme.alignItems;
const { between } = theme.justifyContent;
const { noWrap } = theme.flexWrap;
const { white, light } = theme.colors;
const { none, small, large } = theme.sizes;
const { bolder } = theme.fontWeight;
const { alignCenter, alignLeft, alignRight } = theme.textAlign;

const styles = StyleSheet.create({
    header: {
        marginTop: none,
        fontSize: ( large * 1.1 )
    },
    list: {
        flex: one,
        padding: none,
        margin: none
    },
    listItem: {
        flex: one,
        backgroundColor: white, // 'rgba(0,0,0,0.025)'
        borderBottomColor: light,
        borderBottomWidth: ( StyleSheet.hairlineWidth * 2 ),
        padding: small
    },
    listItemView: {
        display: flex, 
        flexDirection: column,
        flexWrap: noWrap,
        alignItems: start
    },
    listItemBlock: {
        flex: one,
        display: flex,
        flexDirection: row,
        flexWrap: noWrap,
        alignItems: start,
        justifyContent: between
    },
    textDate: {
        flex: one,
        marginBottom: ( small / 1.1 )
    },
    textSum: {
        flex: one,
        textAlign: alignRight
    },
    textBold: {
        fontWeight: bolder
    },
    textColored: {
        color: "#7854f7"
    },
    textSender: {
        flex: three,
        textAlign: alignLeft
    },
    textArrow: {
        flex: one,
        textAlign: alignCenter
    },
    textReceiver: {
        flex: three,
        textAlign: alignRight
    }
});

const mapStateToProps = (state) => {
    return {
        isLoaderOpen: state.loader.isOpen
    };
}

export default connect(mapStateToProps)(LastExchanges);