import {
    FETCH_RECEIVE,
    FETCH_RECEIVE_SUCCESS,
    FETCH_RECEIVE_ERROR
} from '../constants';

const initialState = {
    receive: [],
    loading: false,
    error: null
};

export const receiveReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECEIVE:
            return {
                receive: [],
                loading: true,
                error: null
            }
        case FETCH_RECEIVE_SUCCESS:
            return {
                receive: action.payload,
                loading: false,
                error: null
            }
        case FETCH_RECEIVE_ERROR:
            return {
                receive: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}