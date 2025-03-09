import { legacy_createStore } from "redux";
import reducerProduit from "./reducer/reducerproduit";

const store = legacy_createStore(reducerProduit);

export default store