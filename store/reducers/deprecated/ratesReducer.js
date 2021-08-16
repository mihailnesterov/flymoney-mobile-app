import {
    FETCH_RATES,
    FETCH_RATES_SUCCESS,
    FETCH_RATES_ERROR
} from '../constants';

const initialState = {
    rates: [],
    error: null
};

export const ratesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RATES:
            return {
                rates: [],
                error: null
            }
        case FETCH_RATES_SUCCESS:
            return {
                rates: action.payload,
                error: null
            }
        case FETCH_RATES_ERROR:
            return {
                rates: [],
                error: action.payload
            }
        default:
            return state;
    }
}