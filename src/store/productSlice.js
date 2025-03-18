
import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name:'category',
    initialState:{
        allProducts:[],
        isLoading: false,
        selectedCategory:'',
        searchProduct:''
    },
    reducers:{
        saveAllProductAction:(state,action)=>{
            state.allProducts = action.payload
            state.isLoading = true
        },
        changeSelectedCategoryAction:(state,action)=>{
            state.selectedCategory = action.payload
        },
        saveSearchProductAction:(state,action)=>{
            state.searchProduct = action.payload
        }
    }
})

export const {saveAllProductAction,changeSelectedCategoryAction,saveSearchProductAction} = productSlice.actions
export default productSlice.reducer