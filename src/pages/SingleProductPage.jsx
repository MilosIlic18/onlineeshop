import { useEffect, useState } from "react"
import { useParams } from 'react-router'
// service
import ProductService from "../services/ProductService"

// icons
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";

import Rating from '@mui/material/Rating';

function SingleProductPage() {
    const [quantity,setQuantity] = useState(1)
    const [singleProduct,setSingleProduct] = useState({})
    const [currentImage,setCurrentImage] = useState(0)
    const [isLoading,setIsLoading] = useState(false)
    let {id} = useParams()

    useEffect(()=>{
        ProductService.getSingleProduct(id)
        .then(res=>{setSingleProduct(res.data),setIsLoading(true)})
        .catch(err=>console.log(err))
    },[])
  return (
    <div className="px-[20px]">
      {isLoading?<div className="container mx-auto flex flex-col gap-[10px] md:gap-0 md:flex-row">
            {/* left side */}
            <div className="w-full md:w-[50%]">
                <img src={singleProduct.images[currentImage]} alt="" />
                <div className="flex gap-[20px] flex-wrap items-center justify-center">
                    {singleProduct.images.map((el,index)=><img src={el} key={index} alt={singleProduct.title} onClick={()=>{setCurrentImage(index)}} className={currentImage===index?"w-[100px] h-[100px] border border-mainBlue p-[10px] rounded-lg":"w-[100px] h-[100px] border border-grayColor p-[10px] rounded-lg cursor-pointer"}/>)}
                </div>
            </div>
            {/* right side */}
            <div className="w-full md:w-[50%] flex flex-col gap-[10px]">
                <h2 className="text-mainBlue text-[36px]">{singleProduct.title}</h2>
                <h5 className="font-semibold text-[20px]">${singleProduct.price}</h5>
                <Rating name="read-only" value={singleProduct.rating} readOnly size="large"/>
                <div className="flex gap-[10px] items-center">
                    <span className="text-gray-500">Availability:</span>
                    {singleProduct.stock>0?
                        <h3 className="flex gap-[5px] items-center text-[#30BD57] font-semibold"><FaCheck size={24} /> In stock</h3>
                        :
                        <h3 className="flex gap-[5px] items-center text-[#FF0000] font-semibold"><RxCross1 size={24} /> Out of stock</h3>
                    }
                </div>
                <p className="text-grayColor">Hurry up! only <span className="text-mainBlue font-semibold">{singleProduct.stock}</span> product left in stock!</p>
                <div className="flex items-center gap-[20px]">
                    <p className="text-gray-500">Tags:</p>
                    <ul className="flex items-center gap-[10px]">
                        {singleProduct.tags.map((tag,index)=><li className="bg-ligthGray px-[8px] py-[4px] rounded-lg text-gray-500 cursor-pointer" key={index}>#{tag}</li>)}
                    </ul>
                </div>
                <div className="flex gap-[20px] items-center ">
                    <span className="text-gray-500">Quantity:</span>

                    <div className="flex items-center">
                        <button className="px-[10px] py-[4px] bg-ligthGray text-gray-500 border border-gray-500">-</button>
                        <span className="px-[20px] py-[4px] bg-ligthGray text-gray-500 border border-gray-500">{quantity}</span>
                        <button className="px-[10px] py-[4px] bg-ligthGray text-gray-500 border border-gray-500">+</button>
                    </div>
                </div>
                
                <div className="flex items-center mt-[30px] gap-[20px]">
                    <button className="bg-mainYellow text-textWhite px-[26px] py-[13px] rounded-lg"> Add To Card</button>
                    <div className="bg-[#EEE] p-[10px] rounded-full">
                        <IoIosHeartEmpty size={30} />
                    </div>
                </div>
                <hr className="my-[20px]"/>
                <div className="flex items-center gap-[20px]">
                    <FaShippingFast size={24}/>
                    <span className="text-grayColor">{singleProduct.shippingInformation}</span>
                </div>
                <p className="text-gray-500 font-semibold">{singleProduct.returnPolicy}</p>
            </div>
      </div>:<div>Loading...</div>}
    </div>
  )
}

export default SingleProductPage
