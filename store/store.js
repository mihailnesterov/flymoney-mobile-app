import { createStore } from 'redux';
import { rootReduser } from "./reducers";

export default createStore( rootReduser );