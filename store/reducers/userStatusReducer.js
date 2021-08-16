import {
    FETCH_USER_STATUS,
    FETCH_USER_STATUS_SUCCESS,
    FETCH_USER_STATUS_ERROR
} from '../constants';

const initialState = {
    status: {},
    loading: false,
    error: null
};

export const userStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_STATUS:
            return {
                status: {},
                loading: true,
                error: null
            }
        case FETCH_USER_STATUS_SUCCESS:
            return {
                status: action.payload,
                loading: false,
                error: null
            }
        case FETCH_USER_STATUS_ERROR:
            return {
                status: {},
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}