import { useEffect, useState } from "react"
import ProductService from "../services/ProductService"
import { Link, useNavigate, useSearchParams } from "react-router"

// redux
import { useDispatch, useSelector } from 'react-redux'
import { changeSelectedCategoryAction, saveAllProductAction } from "../store/productSlice"
import CardComponent from "../components/CardComponent"

//icons
import { IoGridOutline } from "react-icons/io5";
import { IoList } from "react-icons/io5";

function HomePage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [limit,setLimit] = useState(30)
  
  const [searchParam,setSearchParam] = useSearchParams()
  const [isGrid,setIsGrid] = useState('gridView')
  const {allProducts,isLoading,selectedCategory,searchProduct} = useSelector(state=>state.productStore)
  useEffect(()=>{
    if(!searchParam.get('q'))
      ProductService.getProducts(selectedCategory,limit)
      .then(res=>dispatch(saveAllProductAction(res.data.products)))
      .catch(err=>console.log(err))
  },[selectedCategory,limit,searchParam.get('q')])

  useEffect(()=>{
    if(searchParam.get('q'))
      ProductService.getSearchProducts(searchProduct?searchProduct:searchParam.get('q'))
      .then(res=>dispatch(saveAllProductAction(res.data.products)))
      .catch(err=>console.log(err))
  },[searchProduct,searchParam.get('q')])

  return (
    <div className="container mx-auto my-[20px]">
      <div className="flex justify-end items-end gap-[15px] text-[32px] py-[20px]">
          <IoList onClick={()=>setIsGrid('listView')} className={isGrid==='listView'?'bg-mainYellow p-[5px] rounded-lg':'p-[5px]'}/>
          <IoGridOutline onClick={()=>setIsGrid('gridView')} className={isGrid==='gridView'?'bg-mainYellow p-[5px] rounded-lg':'p-[5px]'}/></div>
        <div>
        {
          searchParam.get('q')?
          
            allProducts.length===0?
              <div className="flex flex-col items-center justify-center gap-[15px]">
                  <h2 className="text-[28px] md:text-[32px] text-mainBlue">No results for <span className="font-semibold">'{searchProduct || searchParam.get('q')}'</span></h2>
                  <button onClick={()=>{navigate('/'),dispatch(changeSelectedCategoryAction(''))}} className="bg-mainYellow hover:bg-mainBlue duration-500 text-textWhite px-[20px] py-[10px] rounded-lg w-fit">Home Page</button>
              </div>
            :
              isLoading?
              <div className="flex flex-wrap justify-center items-center gap-[10px]">{allProducts.map(product=><CardComponent isGrid={isGrid} key={product.id} product={product}/>)}</div>:<div>Loading...</div>
            
          :
          isLoading?
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-wrap justify-center items-center gap-[10px]">{allProducts.map(product=><CardComponent isGrid={isGrid} key={product.id} product={product}/>)}
            </div>
            {selectedCategory===''?
            <button className="bg-mainBlue text-textWhite px-[20px] py-[10px] rounded-lg mt-[20px] hover:bg-mainYellow transition-all duration-300" onClick={()=>{setLimit(limit+10)}}>View More Products...</button>
            :''}
          </div>:<div>Loading...</div>
            
        }
        </div>
      </div>
  )
}

export default HomePage
