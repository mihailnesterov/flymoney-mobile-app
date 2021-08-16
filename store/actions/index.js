import {
    FETCH_LOADER_OPEN,
    FETCH_LOADER_CLOSE,
    FETCH_MODAL_OPEN,
    FETCH_MODAL_CLOSE,
    FETCH_AMOUNT_SEND,
    FETCH_AMOUNT_SEND_SUCCESS,
    FETCH_AMOUNT_RECEIVE,
    FETCH_AMOUNT_RECEIVE_SUCCESS,
    FETCH_ORDER,
    FETCH_ORDER_SUCCESS,
    FETCH_CUSTOMER,
    FETCH_CUSTOMER_SUCCESS,
    BANK_SEND,
    BANK_SEND_SUCCESS,
    BANK_SEND_ERROR,
    BANK_RECEIVE,
    BANK_RECEIVE_SUCCESS,
    BANK_RECEIVE_ERROR,
    FETCH_EXCHANGE,
    FETCH_EXCHANGE_SUCCESS,
    FETCH_EXCHANGE_ERROR,
    FETCH_TAX,
    FETCH_TAX_SUCCESS,
    FETCH_TAX_ERROR,
    FETCH_USER_STATUS,
    FETCH_USER_STATUS_SUCCESS,
    FETCH_USER_STATUS_ERROR
} from '../constants';

// Loader
export const actionLoaderOpen = () => ({
    type: FETCH_LOADER_OPEN
});
export const actionLoaderClose = () => ({
    type: FETCH_LOADER_CLOSE
});

// Modal
export const actionModalOpen = () => ({
    type: FETCH_MODAL_OPEN
});
export const actionModalClose = () => ({
    type: FETCH_MODAL_CLOSE
});

// AmountSend
export const actionAmountSend = () => ({
    type: FETCH_AMOUNT_SEND
});
export const actionAmountSendSuccess = payload => ({
    type: FETCH_AMOUNT_SEND_SUCCESS, 
    payload: payload
});

// AmountReceive
export const actionAmountReceive = () => ({
    type: FETCH_AMOUNT_RECEIVE
});
export const actionAmountReceiveSuccess = payload => ({
    type: FETCH_AMOUNT_RECEIVE_SUCCESS, 
    payload: payload
});

// Order
export const actionOrder = () => ({
    type: FETCH_ORDER
});
export const actionOrderSuccess = payload => ({
    type: FETCH_ORDER_SUCCESS, 
    payload
});

// Customer
export const actionCustomer = () => ({
    type: FETCH_CUSTOMER
});
export const actionCustomerSuccess = payload => ({
    type: FETCH_CUSTOMER_SUCCESS, 
    payload
});

// Bank Send
export const actionBankSend = () => ({
    type: BANK_SEND
});
export const actionBankSendSuccess = payload => ({
    type: BANK_SEND_SUCCESS, 
    payload
});
export const actionBankSendError = payload => ({
    type: BANK_SEND_ERROR, 
    payload
});

// Bank Receive
export const actionBankReceive = () => ({
    type: BANK_RECEIVE
});
export const actionBankReceiveSuccess = payload => ({
    type: BANK_RECEIVE_SUCCESS, 
    payload
})
export const actionBankReceiveError = payload => ({
    type: BANK_RECEIVE_ERROR, 
    payload
});

// Exchange Rate
export const actionExchangeRate = () => ({
    type: FETCH_EXCHANGE
});
export const actionExchangeRateSuccess = payload => ({
    type: FETCH_EXCHANGE_SUCCESS, 
    payload
});
export const actionExchangeRateError = payload => ({
    type: FETCH_EXCHANGE_ERROR, 
    payload
});

// Tax (Selected Bank Tax)
export const actionTax = () => ({
    type: FETCH_TAX
});
export const actionTaxSuccess = payload => ({
    type: FETCH_TAX_SUCCESS, 
    payload
});
export const actionTaxError = payload => ({
    type: FETCH_TAX_ERROR, 
    payload
});

// User Status
export const actionUserStatus = () => ({
    type: FETCH_USER_STATUS
});
export const actionUserStatusSuccess = payload => ({
    type: FETCH_USER_STATUS_SUCCESS, 
    payload
});
export const actionUserStatusError = payload => ({
    type: FETCH_USER_STATUS_ERROR, 
    payload
});