import { useEffect } from "react"
import ProductService from "../services/ProductService"

// redux
import { useDispatch, useSelector } from 'react-redux'
import { saveAllProductAction } from "../store/productSlice"
import CardComponent from "../components/CardComponent"


function HomePage() {
  const dispatch = useDispatch()
  const {allProducts,isLoading} = useSelector(state=>state.productStore)
  useEffect(()=>{
    ProductService.getAllProductsService()
    .then(res=>dispatch(saveAllProductAction(res.data.products)))
    .catch(err=>console.log(err))
  },[])

  return (
    <div>
      {isLoading?allProducts.map(product=><CardComponent key={product.id} product={product}/>):<div>Loading...</div>}
    </div>
  )
}

export default HomePage
