import {
    FETCH_BANKS,
    FETCH_BANKS_SUCCESS,
    FETCH_BANKS_ERROR
} from '../constants';

const initialState = {
    banks: [],
    error: null
};

export const banksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BANKS:
            return {
                banks: [],
                error: null
            }
        case FETCH_BANKS_SUCCESS:
            return {
                banks: action.payload,
                error: null
            }
        case FETCH_BANKS_ERROR:
            return {
                banks: [],
                error: action.payload
            }
        default:
            return state;
    }
}