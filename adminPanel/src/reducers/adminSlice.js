import { createSlice } from "@reduxjs/toolkit"
import {  GetColors, GetMyProducts, GetProducts } from "../api/apiAsyncThunk"
 

const initialState = {
    products:[],
    myProducts:null,
    colors:[],
    
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
        .addCase(GetColors.fulfilled,(state,actions)=>{
            state.colors = actions.payload
        })

        
    }
    

})

export const { } = adminReducer .actions
export default adminReducer .reducer