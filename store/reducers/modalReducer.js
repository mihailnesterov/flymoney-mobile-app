import {
    FETCH_MODAL_OPEN,
    FETCH_MODAL_CLOSE,
    FETCH_MODAL_ERROR
} from '../constants';

const initialState = {
    isOpen: false,
    error: null
};

export const modalReducer = (state = initialState, action) => {
    //console.log(action.payload);
    switch (action.type) {
        case FETCH_MODAL_OPEN:
            return {
                isOpen: true,
                error: null
            }
        case FETCH_MODAL_CLOSE:
            return {
                isOpen: false,
                error: null
            }
        case FETCH_MODAL_ERROR:
            return {
                isOpen: false,
                error: true
            }
        default:
            return state;
    }
}