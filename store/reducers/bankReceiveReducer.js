import {
    BANK_RECEIVE,
    BANK_RECEIVE_SUCCESS,
    BANK_RECEIVE_ERROR
} from '../constants';

const initialState = {
    bank: null,
    loading: false,
    error: null
};

export const bankReceiveReducer = (state = initialState, action) => {
    switch (action.type) {
        case BANK_RECEIVE:
            return {
                bank: null,
                loading: true,
                error: null
            }
        case BANK_RECEIVE_SUCCESS:
            return {
                bank: action.payload,
                loading: false,
                error: null
            }
        case BANK_RECEIVE_ERROR:
            return {
                bank: null,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}