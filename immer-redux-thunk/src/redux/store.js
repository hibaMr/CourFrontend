import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import articleReducer from "./reducers/articleReducer";
import { useReducer } from "react";
import { thunk } from "redux-thunk";


const reducers = combineReducers({
    articleReducer : articleReducer,
})

const store = legacy_createStore(reducers,applyMiddleware(thunk));

export default store