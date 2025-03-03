import React from 'react'
import { Link } from 'react-router'
import Rating from '@mui/material/Rating';

function CardComponent({product}) {
  return (
    <div className='w-[300px] border border-grayColor rounded-[20px] flex flex-col items-center justify-center'>
      <div>
        <img src={product.thumbnail} alt={product.title} className='w-full h-[200px] object-cover'/>
      </div>
      <h3>{product.title}</h3>
      <h4>${product.price}</h4>
      <Rating name="read-only" value={product.rating} readOnly />
      <Link to={`/singleProduct/${product.id}`} className='bg-mainBlue text-white px-[16px] py-[8px] rounded-lg my-[20px] hover:bg-mainYellow transition-all duration-300'>View More</Link>
    </div>
  )
}

export default CardComponent
