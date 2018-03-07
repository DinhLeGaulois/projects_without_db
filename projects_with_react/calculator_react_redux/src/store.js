import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import calcBtnReducers from './reducers/calcBtnReducers'

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(combineReducers({
    calc: calcBtnReducers,
}), middleware);