import { configureStore } from "@reduxjs/toolkit";
import produitSlice from '../features/counter/produitSlice';

const store = configureStore({
    reducer:{
        counter:produitSlice
    }
})

export default store