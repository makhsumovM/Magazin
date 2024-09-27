import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";
import { GetToken } from "../utils/token";

export const GetProducts = createAsyncThunk('admin/GetProducts',async()=>{
    try {
        const {data} = await axiosRequest.get("/Product/get-products")
        return data.data.products
    } catch (error) {
        console.error(error);
    }
})

export const GetMyProducts = createAsyncThunk('admin/GetMyProducts',async(id)=>{
    console.log(id)
    try {
        const {data} = await axiosRequest(`/Product/get-products?UserId=${id}`)
        console.log(data.data,"siioo")
        return data.data.products
    } catch (error) {
        console.error(error);
    }
})

