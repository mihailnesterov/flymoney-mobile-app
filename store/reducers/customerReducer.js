import {
    FETCH_CUSTOMER,
    FETCH_CUSTOMER_SUCCESS,
    FETCH_CUSTOMER_ERROR
} from '../constants';

const initialState = {
    data: {},
    loading: false,
    error: null
};

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CUSTOMER:
            return {
                data: {},
                loading: true,
                error: null
            }
        case FETCH_CUSTOMER_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                error: null
            }
        case FETCH_CUSTOMER_ERROR:
            return {
                data: {},
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}