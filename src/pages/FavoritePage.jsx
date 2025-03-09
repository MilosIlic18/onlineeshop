

import CardComponent from "../components/CardComponent"
// redux
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
function FavoritePage() {
  const [favoriteProduct,setFavoriteProduct] = useState([])
  const { allFavoriteProduct } =useSelector(state=>state.favoriteStore)
  useEffect(()=>{
    setFavoriteProduct(JSON.parse(localStorage.getItem('allFavoriteProduct'))||[])
  },[allFavoriteProduct.length])
  return (
    <div className='container mx-auto my-[20px]'>
      <div className="flex flex-wrap justify-center items-center gap-[10px]">{favoriteProduct.map(product=><CardComponent key={product.id} product={product}/>)}</div>
    </div>
  )
}

export default FavoritePage
