import {
    FETCH_AMOUNT_SEND,
    FETCH_AMOUNT_SEND_SUCCESS,
    FETCH_AMOUNT_SEND_ERROR
} from '../constants';

const initialState = {
    amount: 0.00,
    loading: false,
    error: null
};

export const amountSendReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AMOUNT_SEND:
            return {
                amount: 0.00,
                loading: true,
                error: null
            }
        case FETCH_AMOUNT_SEND_SUCCESS:
            return {
                amount: action.payload,
                loading: false,
                error: null
            }
        case FETCH_AMOUNT_SEND_ERROR:
            return {
                amount: 0.00,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}