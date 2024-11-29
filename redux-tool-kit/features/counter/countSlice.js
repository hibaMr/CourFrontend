import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:"counter",
    initialState:{
        nombre:0
    },

    reducers:{
        increment : (state,action)=>{
            state.nombre += 1
        },

        decrement : (state,action)=>{
            state.nombre -= 1
        },

        incrementByAmount : (state,action)=>{
            state.nombre += action.payload
        }
    }
})

export const {increment , decrement , incrementByAmount} = countSlice.actions
export default countSlice.reducer