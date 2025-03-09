import { legacy_createStore } from "redux";
import reducerAnnance from "./reducer/reducerAnnance";

const store = legacy_createStore(reducerAnnance);

export default store