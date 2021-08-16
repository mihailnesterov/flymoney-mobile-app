import {
    BANK_SEND,
    BANK_SEND_SUCCESS,
    BANK_SEND_ERROR
} from '../constants';

const initialState = {
    bank: null,
    loading: false,
    error: null
};

export const bankSendReducer = (state = initialState, action) => {
    switch (action.type) {
        case BANK_SEND:
            return {
                bank: null,
                loading: true,
                error: null
            }
        case BANK_SEND_SUCCESS:
            return {
                bank: action.payload,
                loading: false,
                error: null
            }
        case BANK_SEND_ERROR:
            return {
                bank: null,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}