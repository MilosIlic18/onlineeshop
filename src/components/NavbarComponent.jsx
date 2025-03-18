import logo from '../assets/logo.png'
import { Link, useNavigate, useSearchParams } from 'react-router'
// clerk
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci"
// redux
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { changeSelectedCategoryAction, saveSearchProductAction } from '../store/productSlice';

function NavbarComponent() {
  const { cart } =useSelector(state=>state.cartStore)
  const { allFavoriteProduct } =useSelector(state=>state.favoriteStore)
  const { selectedCategory } =useSelector(state=>state.productStore)
  const [ totalProductLC,setTotalProductLC] = useState(0)
  const [ searchProduct,setSearchProduct] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParam,setSearchParam] = useSearchParams()
  const [ totalFavouriteProductLC,setTotalFavouriteProductLC] = useState(0)
  useEffect(()=>{
    setTotalProductLC(JSON.parse(localStorage.getItem('totalProduct'))||0)
  },[(JSON.parse(localStorage.getItem('cart'))||[]).length])
  useEffect(()=>{
    setTotalFavouriteProductLC(JSON.parse(localStorage.getItem('favoriteTotalProducts'))||0)
  },[(JSON.parse(localStorage.getItem('allFavoriteProduct'))||[]).length])

  function handleSearchProducts(){
      if(searchProduct!==''){
        setSearchParam('q',searchProduct)
        dispatch(saveSearchProductAction(searchProduct))
        setSearchProduct('')
        navigate(`/?q=${searchProduct}`)
      }
  }

  return (
    <div className='bg-mainBlue flex gap-[10px] items-center py-[10px] md:h-[100px]'>
        <div className='container mx-auto p-3 flex gap-[10px] justify-between items-center flex-col md:flex-row md:h-[100px] md:p-0'>
            <img onClick={()=>{navigate('/'),dispatch(changeSelectedCategoryAction(''))}} src={logo} alt="Greska"/>
            
            {/* search bar */}
            <div className="flex bg-textWhite rounded-[20px]">
                <input type="text" className="bg-transparent px-[20px] py-[15px] rounded-[20px] outline-none placeholder:text-mainYellow text-mainBlue" placeholder="Search any things" onChange={(e)=>{setSearchProduct(e.target.value)}} value={searchProduct}/>
                <button className="bg-mainYellow text-textWhite px-[30px] py-[15px] rounded-[20px]" onClick={handleSearchProducts}>Search</button>
            </div>
            
            {/* Login system & Cart/Favourite */}
            <div className="flex gap-[10px] text-textWhite items-center text-[18px]">
                <div className="flex gap-[5px] items-center"><CiUser size={25}/>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton showName />
                </SignedIn>
                </div>
                <div className="flex gap-[5px] items-center"><CiHeart size={25}/> 
                  <span className="bg-mainYellow w-[20px] h-[20px] flex items-center justify-center rounded-full cursor-default">{totalFavouriteProductLC}</span> <Link to='/favorite'>Favorite</Link></div>
                <div className="flex gap-[5px] items-center"><CiShoppingCart size={25}/> <span className="bg-mainYellow w-[20px] h-[20px] flex items-center justify-center rounded-full cursor-default">{totalProductLC}</span> <Link to='/cart'>Cart</Link></div>
            </div>
        </div>
    </div>
  )
}

export default NavbarComponent
