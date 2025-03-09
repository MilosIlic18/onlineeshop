
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
        totalProduct:0,
        totalPriceProducts:0
    },
    reducers:{
        saveInCartAction:(state,action)=>{
            state.totalProduct       = localStorage.getItem('totalProduct')
            state.totalPriceProducts = JSON.parse(localStorage.getItem('totalPriceProducts'))
            state.cart = JSON.parse(localStorage.getItem('cart'))||[]

            let findIndex = state.cart.findIndex(item=>item.id===action.payload.id)
            if(findIndex === -1){
                state.cart.push({...action.payload,quantity:action.payload.quantity,totalPriceProduct:action.payload.price*action.payload.quantity})   
            }
            else{
                state.cart[findIndex].quantity=action.payload.quantity
                state.cart[findIndex].totalPriceProduct=action.payload.quantity*action.payload.price
            }
            
            state.totalPriceProducts = subTotalPrice(state.cart)
            localStorage.setItem('cart',JSON.stringify(state.cart))
            localStorage.setItem('totalPriceProducts', JSON.stringify(state.totalPriceProducts))
            localStorage.setItem('totalProduct', JSON.stringify(state.cart.length))
        },
        deleteFromCartAction:(state,action)=>{
            state.cart               = JSON.parse(localStorage.getItem('cart'))||[]
            state.totalProduct       = JSON.parse(localStorage.getItem('totalProduct'))
            state.totalPriceProducts = JSON.parse(localStorage.getItem('totalPriceProducts'))
            
            let findIndex = state.cart.findIndex(item=>item.id===action.payload.id)
            if(findIndex!==-1){
                state.totalPriceProducts -= state.cart[findIndex].totalPriceProduct
                state.cart.splice(findIndex,1)

                localStorage.setItem('totalProduct',JSON.stringify(state.cart.length))
                localStorage.setItem('cart',JSON.stringify(state.cart))
                localStorage.setItem('totalPriceProducts', JSON.stringify(state.cart.length!==0?state.totalPriceProducts:0))
            }
        },
        handleQuantityChangeAction:(state,action)=>{
            const {product,op} = action.payload
            state.cart               = JSON.parse(localStorage.getItem('cart'))||[]
            state.totalPriceProducts = JSON.parse(localStorage.getItem('totalPriceProducts'))

            let index = state.cart.findIndex(item=>item.id===product.id)
            if(op==='dec'){
                if(state.cart[index].quantity>1){
                    state.cart[index].quantity -=1
                    state.cart[index].totalPriceProduct -= state.cart[index].price
                }
            }
            if(op==='inc'){
                if(state.cart[index].quantity<product.stock){
                    state.cart[index].quantity +=1
                    state.cart[index].totalPriceProduct += state.cart[index].price
                }
            }
            state.totalPriceProducts = subTotalPrice(state.cart)
            localStorage.setItem('cart',JSON.stringify(state.cart))
            localStorage.setItem('totalPriceProducts',JSON.stringify(state.totalPriceProducts))
        }
    }
})

const subTotalPrice = (cart)=>cart.reduce((acc,item)=>acc+item.totalPriceProduct,0)

export const {saveInCartAction,deleteFromCartAction,handleQuantityChangeAction} = cartSlice.actions
export default cartSlice.reducer