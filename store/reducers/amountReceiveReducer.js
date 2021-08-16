import {
    FETCH_AMOUNT_RECEIVE,
    FETCH_AMOUNT_RECEIVE_SUCCESS,
    FETCH_AMOUNT_RECEIVE_ERROR
} from '../constants';

const initialState = {
    amount: 0.00,
    loading: false,
    error: null
};

export const amountReceiveReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AMOUNT_RECEIVE:
            return {
                amount: 0.00,
                loading: true,
                error: null
            }
        case FETCH_AMOUNT_RECEIVE_SUCCESS:
            return {
                amount: action.payload,
                loading: false,
                error: null
            }
        case FETCH_AMOUNT_RECEIVE_ERROR:
            return {
                amount: 0.00,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}