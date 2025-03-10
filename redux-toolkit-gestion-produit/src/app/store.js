import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../features/achats/achatsSlice'

const store = configureStore({
    reducer:{
        counter : counterReducer
    }
})

export default store