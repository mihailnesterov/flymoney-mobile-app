import {
    FETCH_PRODUCT,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_ERROR
} from '../constants';

const initialState = {
    product: [],
    loading: false,
    error: null
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                product: [],
                loading: true,
                error: null
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                product: action.payload,
                loading: false,
                error: null
            }
        case FETCH_PRODUCT_ERROR:
            return {
                product: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}