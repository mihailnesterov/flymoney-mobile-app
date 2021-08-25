import React, { useState, useEffect } from 'react';
import { 
    Dimensions,
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Image, 
    FlatList,
    SectionList
} from 'react-native';
import theme from '../themes/default';
import { connect } from 'react-redux';
import Block from '../containers/Block';
import BanksList from '../containers/BanksList';
import Empty from '../components/Empty';
import { getAllProducts } from '../api/products';
import { toFloat } from '../api/exchange';

const selectedReserveItemStyle = ( bankReceive, item ) => {
    return bankReceive && bankReceive.name.split(' - ')[1] === item.name ? 
        styles.selectedBankItem : 
        {};
}

const Reserve = (props) => {

    const {isLoaderOpen, bankReceive} = props;

    const [emptyText, setEmptyText] = useState('');
    useEffect(() => {
        isLoaderOpen 
        ? 
        setEmptyText('Загружается список резервов...')
        :
        setEmptyText('Список резервов')
    }, [isLoaderOpen]);

    const [reserves, setReserves] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((data) => setReserves(
                data.filter(
                    (item) => 
                        item.variations.length > 0 && 
                        item.stock_quantity > 0 && 
                        item.tax_status !== 'none' 
                    )
                )
            )
            .catch(error => console.log(error));
    }, []);

	return (
        <Block>
            <Text style={styles.header}>Резерв</Text>
            <BanksList>
                {   
                    reserves.length > 0
                    ?
                    <FlatList 
                        style={styles.banksList}
                        data={reserves}
                        keyExtractor={({ id }, index) => index.toString()}
                        renderItem={({ item }) => (
                            <Text style={[
                                styles.bankItem, 
                                selectedReserveItemStyle( bankReceive, item )
                            ]}>
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

                                <Text style={styles.itemTextReserve}>{toFloat(item.stock_quantity)}</Text>
                                
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

const { flex } = theme.display;
const { one } = theme.flex;
const { row } = theme.flexDirection;
const { center } = theme.alignItems;
const { between } = theme.justifyContent;
const { light, white, dark } = theme.colors;
const { none, xsmall, small, medium, large } = theme.sizes;
const { alignCenter, alignLeft, alignRight } = theme.textAlign;

const styles = StyleSheet.create({
    header: {
        marginTop: none,
        marginBottom: small,
        fontSize: ( large * 1.1 )
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
        backgroundColor: light
    },
    itemImage: {
        width: 20,
        height: 20
    },
    itemTextName: {
        fontSize: large,
        color: "#222222" 
    },
    itemTextReserve: {
        color: "#7854f7" 
    }
});

const mapStateToProps = (state) => {
    return {
        isLoaderOpen: state.loader.isOpen,
        bankReceive: state.bankReceive.bank
    };
}

export default connect(mapStateToProps)(Reserve);