import {
    FETCH_EXCHANGE,
    FETCH_EXCHANGE_SUCCESS,
    FETCH_EXCHANGE_ERROR
} from '../constants';

const initialState = {
    rate: 0,
    error: null
};

export const exchangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EXCHANGE:
            return {
                rate: 0,
                error: null
            }
        case FETCH_EXCHANGE_SUCCESS:
            return {
                rate: action.payload,
                error: null
            }
        case FETCH_EXCHANGE_ERROR:
            return {
                rate: 0,
                error: action.payload
            }
        default:
            return state;
    }
}