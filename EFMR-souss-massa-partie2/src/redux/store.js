import { legacy_createStore } from "redux";
import produitsReducer from "./reducers/produitsReducer";



const store = legacy_createStore(produitsReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store