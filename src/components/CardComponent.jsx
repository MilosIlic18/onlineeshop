import React from 'react'
import { Link } from 'react-router'
import Rating from '@mui/material/Rating';

function CardComponent({product,isGrid}) {
  return (
    <div className={isGrid==='gridView' || isGrid===undefined?'w-[300px] border border-grayColor rounded-[20px] flex flex-col gap-[10px] items-center justify-center':'w-full flex flex-row border border-grayColor rounded-[20px] px-[10px] gap-[5px] items-center justify-between'}>
      <div>
        <img src={product.thumbnail} alt={product.title} className={isGrid==='gridView' || isGrid===undefined?'w-full h-[200px] object-cover':'w-[100px] h-[100px] md:h-[200px] md:w-full object-cover'}/>
      </div>
      <h3 className={isGrid==='listView'?'text-[12px] md:text-[18px] w-[70px] md:w-[190px] text-center':'text-[15px]'}>{product.title}</h3>
      <h4 className={isGrid==='listView'?'text-[12px] md:text-[18px] w-[70px] md:w-[190px] text-center':''}>${product.price}</h4>    
      <div className={isGrid==='gridView' || isGrid===undefined?'block':'hidden lg:block'}>
        <Rating name="read-only" value={product.rating} readOnly/>
      </div>
  
      <Link to={`/singleProduct/${product.id}`} className={isGrid==='listView'?'bg-mainBlue text-[10px] md:text-[18px] text-white px-[16px] py-[8px] rounded-lg my-[20px] hover:bg-mainYellow transition-all duration-300':
        'bg-mainBlue text-white px-[16px] py-[8px] rounded-lg my-[20px] hover:bg-mainYellow transition-all duration-300'
      }>View More</Link>
    </div>
  )
}

export default CardComponent
