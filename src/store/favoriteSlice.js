
import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
    name :'favorite',
    initialState:{
        allFavoriteProduct:[],
        favoriteTotalProducts:0
    },
    reducers:{

        updateFavouriteProductsAction:(state,action)=>{
            state.allFavoriteProduct = JSON.parse(localStorage.getItem('allFavoriteProduct'))||[]
            state.favoriteTotalProducts = JSON.parse(localStorage.getItem('favoriteTotalProducts'))

            let findIndex = state.allFavoriteProduct.findIndex(item=>item.id===action.payload.id)
            if(findIndex === -1)
                state.allFavoriteProduct.push(action.payload)
            else
                state.allFavoriteProduct.splice(findIndex,1)
                
            state.favoriteTotalProducts = state.allFavoriteProduct.length
            
            localStorage.setItem('allFavoriteProduct',JSON.stringify(state.allFavoriteProduct))
            localStorage.setItem('favoriteTotalProducts',JSON.stringify(state.favoriteTotalProducts))
        }
    }
})

export const {updateFavouriteProductsAction} = favoriteSlice.actions
export default favoriteSlice.reducer