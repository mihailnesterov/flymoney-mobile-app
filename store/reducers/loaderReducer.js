import {
    FETCH_LOADER_OPEN,
    FETCH_LOADER_CLOSE,
    FETCH_LOADER_ERROR
} from '../constants';

const initialState = {
    isOpen: false,
    error: null
};

export const loaderReducer = (state = initialState, action) => {
    //console.log(action.payload);
    switch (action.type) {
        case FETCH_LOADER_OPEN:
            return {
                isOpen: true,
                error: null
            }
        case FETCH_LOADER_CLOSE:
            return {
                isOpen: false,
                error: null
            }
        case FETCH_LOADER_ERROR:
            return {
                isOpen: false,
                error: true
            }
        default:
            return state;
    }
}