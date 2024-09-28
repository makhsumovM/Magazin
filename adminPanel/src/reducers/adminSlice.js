import { createSlice } from "@reduxjs/toolkit"
import {  ForEditProduct, GetBrands, GetCategories, GetColors, GetMyProducts, GetProductByid, GetProducts, GetSubCategories } from "../api/apiAsyncThunk"
 

const initialState = {
    products:[],
    myProducts:null,
    colors:[],
    categories:[],
    brands :[],
    subCategories:[],
    images:[],
    productName :"",
    code :"",
    descripdion:"",
    price :"",
    discount:"",
    quantity:"",
    selectedCategoryID:"",
    selectedBrandID:"",
    selectedColorID:"",
    selectedSubcategoryID:"",
    ProductByID:{},
    EditProductName :"",
    EditDescription:"",
    EditPrice:"",
    EditHasDiscount:"",
    EditQuantity:"",
    EditCode:"",
    fornavigate :{}


}

export const adminReducer  = createSlice({
    name: 'admin',
    initialState,
    reducers:{

    },
    reducers:{
        setProductName:(state,action)=>{
            state.productName = action.payload
        },
        setCode:(state,action)=>{
            state.code = action.payload
        },
        setDescription:(state,action)=>{
            state.descripdion = action.payload
        },
        setPrice:(state,action)=>{
            state.price = action.payload
        },
        setDiscount:(state,action)=>{
            state.discount = action.payload
        },
        setQuantity:(state,action)=>{
            state.quantity = action.payload
        },
        setCategoryID:(state,action)=>{
            state.selectedCategoryID = action.payload
        },
        setBrandID:(state,action)=>{
            state.selectedBrandID = action.payload
        },
        setColorID:(state,action)=>{
            state.selectedColorID = action.payload
        },
        
        setSubCategoriesID:(state,action)=>{
            state.selectedSubcategoryID = action.payload
        },
            setImages:(state,action)=>{
                console.log(action.payload,"fileBase64")
                state.images = action.payload
            },
            forDeleteImages:(state,action)=>{
                state.images = state.images.filter((_,index)=>{
                    return index!== action.payload
                })
                console.log(state.images,"filteredImages")
            },
            setEditProductName:(state,action)=>{
                state.EditProductName = action.payload
            },
            setEditDescription:(state,action)=>{
                state.EditDescription = action.payload
            },
            setEditPrice:(state,action)=>{
                state.EditPrice = action.payload
            },
            setEditHasDiscount:(state,action)=>{
                state.EditHasDiscount = action.payload
            },
            setEditQuantity:(state,action)=>{
                state.EditQuantity = action.payload
            },
            setEditCode:(state,action)=>{
                state.EditCode = action.payload
            }


     
        
       


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
        .addCase(GetCategories.fulfilled,(state,actions)=>{
            state.categories = actions.payload
        })
        .addCase(GetBrands.fulfilled,(state,actions)=>{
            state.brands = actions.payload
        })
        .addCase(GetSubCategories.fulfilled,(state,actions)=>{
            
            state.subCategories = actions.payload
        })
        .addCase(GetProductByid.fulfilled,(state,actions)=>{
            state.ProductByID = actions.payload
            state.EditProductName = actions.payload.productName
            state.EditDescription = actions.payload.description
            state.EditPrice = actions.payload.price
            state.EditHasDiscount = actions.payload.hasDiscount
            state.EditQuantity = actions.payload.quantity
            state.EditCode = actions.payload.code
        })
        .addCase(ForEditProduct.fulfilled,(state,actions)=>{
            console.log(actions.payload,"iiiiyouv")
            state.fornavigate = actions.payload
        })

        
    }
    

})

export const {setProductName,  setCode, setDescription,setPrice, setDiscount,setQuantity,setCategoryID,setBrandID,setColorID,setSubCategoriesID,setImages,forDeleteImages,setEditProductName,  setEditDescription ,setEditPrice,setEditHasDiscount ,setEditQuantity,setEditCode} = adminReducer.actions
export default adminReducer .reducer