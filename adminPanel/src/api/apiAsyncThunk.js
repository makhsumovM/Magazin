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

export const GetColors = createAsyncThunk('admin/GetColors',async()=>{
    try {
        const {data} = await axiosRequest.get("/Color/get-colors")
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const GetCategories = createAsyncThunk('admin/GetCategories',async()=>{
    try {
        const {data} = await axiosRequest.get("/Category/get-categories")
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const GetBrands = createAsyncThunk('admin/GetBrands',async()=>{
    try {
        const {data} = await axiosRequest.get("/Brand/get-brands")
        return data.data
    } catch (error) {
        console.error(error);
    }
}
)

export const GetSubCategories = createAsyncThunk('admin/GetSubCategories',async()=>{
    try {
        const {data} = await axiosRequest.get('/SubCategory/get-sub-category')
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const ForPostProduct = createAsyncThunk('admin/ForPostProduct',async(products,{dispatch})=>{
    console.log(products)
    const formdata = new FormData();
    const files = products.images
    if(files){
        for(let i = 0; i<files.length; i++){
            console.log(files[i].file)
            formdata.append('Images', files[i].file)
        }
        formdata.append('BrandId', products.selectedBrandID)
        formdata.append('ColorId', products.selectedColorID)
        formdata.append('SubcategoryId', products.selectedSubcategoryID)
        formdata.append('ProductName', products.productName)
        formdata.append('Code', products.code)
        formdata.append('Price', products.price)
        formdata.append('Quantity', products.quantity)
        formdata.append('HasDiscount', products.discount)
        formdata.append('Description', products.descripdion)

    }
    try {
        const {data} = await axiosRequest.post("/Product/add-product",formdata)
        console.log(data)
        dispatch(GetProducts())
    } catch (error) {
        console.error(error);
    }
})

export const GetProductByid = createAsyncThunk('admin/GetProductByid',async(id)=>{
    try {
        const {data} = await axiosRequest.get(`/Product/get-product-by-id?id=${id}`)
        console.log(data)
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const ForEditProduct = createAsyncThunk('admin/ForEditProduct',async(params,{dispatch})=>{
    console.log(params)
    try {
        const {data} = await axiosRequest.put(`/Product/update-product?Id=${params.id}&BrandId=${params.selectedBrandID}&ColorId=${params.selectedColorID}&ProductName=${params.EditProductName}&Description=${params.EditDescription}&Quantity=${params.EditQuantity}&Code=${params.EditCode}&Price=${params.EditPrice}&HasDiscount=${params.EditHasDiscount}&SubCategoryId=${params.selectedSubcategoryID}`)
        dispatch(GetProducts())
        return data

    } catch (error) {
        console.log(error);
    }
})