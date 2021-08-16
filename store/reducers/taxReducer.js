import {
    FETCH_TAX,
    FETCH_TAX_SUCCESS,
    FETCH_TAX_ERROR
} from '../constants';

const initialState = {
    tax: 0,
    error: null
};

export const taxReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TAX:
            return {
                tax: 0,
                error: null
            }
        case FETCH_TAX_SUCCESS:
            return {
                tax: action.payload,
                error: null
            }
        case FETCH_TAX_ERROR:
            return {
                tax: 0,
                error: action.payload
            }
        default:
            return state;
    }
}