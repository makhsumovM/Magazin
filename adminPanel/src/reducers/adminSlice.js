import { createSlice } from "@reduxjs/toolkit"
import {  GetMyProducts, GetProducts } from "../api/apiAsyncThunk"
 

const initialState = {
    products:[],
    myProducts:null,
    
}

export const adminReducer  = createSlice({
    name: 'admin',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(GetProducts.fulfilled,(state,action)=>{
            state.products = action.payload
        })

        .addCase(GetMyProducts.fulfilled,(state,action)=>{
            console.log(action.payload,"myProducts")
            state.myProducts = action.payload
        })

        
    }
    

})

export const { } = adminReducer .actions
export default adminReducer .reducer