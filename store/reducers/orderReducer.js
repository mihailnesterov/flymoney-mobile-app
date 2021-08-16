import {
    FETCH_ORDER,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_ERROR
} from '../constants';

const initialState = {
    product: {},
    variation: {},
    nominal: 1, 
    value: 0, 
    tax: 0,
    tax_class: '',
    commission: 0,
    reserve: 0,
    sender: {},
    receiver: {},
    error: null
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDER:
            return {
                product: {},
                variation: {},
                nominal: 1, 
                value: 0, 
                tax: 0,
                tax_class: '',
                commission: 0,
                reserve: 0,
                sender: {},
                receiver: {},
                error: null
            }
        case FETCH_ORDER_SUCCESS:
            return {
                product: action.payload.product,
                variation: action.payload.variation,
                nominal: action.payload.nominal, 
                value: action.payload.value, 
                tax: action.payload.tax,
                tax_class: action.payload.tax_class,
                reserve: action.payload.reserve,
                commission: action.payload.commission,
                sender: action.payload.sender,
                receiver: action.payload.receiver,
                error: null
            }
        case FETCH_ORDER_ERROR:
            return {
                product: {},
                variation: {},
                nominal: 1, 
                value: 0, 
                tax: 0,
                tax_class: '',
                commission: 0,
                reserve: 0,
                sender: {},
                receiver: {},
                error: action.payload
            }
        default:
            return state;
    }
}