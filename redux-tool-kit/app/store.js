import {configureStore} from "@reduxjs/toolkit"

import counterReducer from "../features/counter/countSlice.js"
import formReducer from "../features/form/formSlice.js"

const store = configureStore({
    reducer:{
        counter:counterReducer,
        form:formReducer
    }
})

export default store