
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
        totalProduct:0
    },
    reducers:{
        saveInCartAction:(state,action)=>{
            let copyCart = JSON.parse(localStorage.getItem('cart'))||[]
            let findIndex = copyCart.findIndex(item=>item.id===action.payload.id)
            if(findIndex === -1){
                copyCart.push({...action.payload,quantity:action.payload.quantity,totalPriceProduct:action.payload.price})
                state.totalProduct++
                localStorage.setItem('totalProduct', JSON.stringify(state.totalProduct))
            }
            else
                copyCart[findIndex].quantity=action.payload.quantity
            localStorage.setItem('cart',JSON.stringify(copyCart))
        },
        deleteFromCartAction:(state,action)=>{
            console.log(action.payload)
        }
    }
})

export const {saveInCartAction,deleteFromCartAction} = cartSlice.actions
export default cartSlice.reducer