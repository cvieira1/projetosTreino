import { createStore, combineReducers } from "redux";
import { reducer as form } from "redux-form";


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;

const reducer = combineReducers({ form });
export default createStore( reducer, devTools && devTools() );