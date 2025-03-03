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
    <div className="container mx-auto">
      <div>List/Grid View</div>
      {isLoading?(<div className="flex flex-wrap justify-center items-center gap-[10px]">{allProducts.map(product=><CardComponent key={product.id} product={product}/>)}</div>):<div>Loading...</div>}
    </div>
  )
}

export default HomePage
