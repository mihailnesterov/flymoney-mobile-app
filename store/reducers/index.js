import { combineReducers } from "redux";

import { amountSendReducer } from "./amountSendReducer";
import { amountReceiveReducer } from "./amountReceiveReducer";
import { loaderReducer } from "./loaderReducer";
import { modalReducer } from "./modalReducer";
import { orderReducer } from "./orderReducer";
import { customerReducer } from "./customerReducer";
import { bankSendReducer } from "./bankSendReducer";
import { bankReceiveReducer } from "./bankReceiveReducer";
import { exchangeReducer } from "./exchangeReducer";
import { taxReducer } from "./taxReducer";
import { userStatusReducer } from "./userStatusReducer";

export const rootReduser = combineReducers({
    amountSend: amountSendReducer,
    amountReceive: amountReceiveReducer,
    loader: loaderReducer,
    modal: modalReducer,
    order: orderReducer,
    customer: customerReducer,
    bankSend: bankSendReducer,
    bankReceive: bankReceiveReducer,
    exchangeRate: exchangeReducer,
    tax: taxReducer,
    userStatus: userStatusReducer
});