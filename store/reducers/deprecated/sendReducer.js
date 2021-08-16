import {
    FETCH_SEND,
    FETCH_SEND_SUCCESS,
    FETCH_SEND_ERROR
} from '../constants';

const initialState = {
    send: '',
    loading: false,
    error: null
};

export const sendReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEND:
            return {
                send: '',
                loading: true,
                error: null
            }
        case FETCH_SEND_SUCCESS:
            return {
                send: action.payload,
                loading: false,
                error: null
            }
        case FETCH_SEND_ERROR:
            return {
                send: '',
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}