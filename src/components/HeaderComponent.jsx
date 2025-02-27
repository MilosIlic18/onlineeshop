import React, { useState } from 'react'

// icons
import { CiLocationOn, CiDeliveryTruck } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

function HeaderComponent({setActiveHeader}) {
  return (
    <div className='container mx-auto h-[80px] flex flex-col md:flex-row justify-between items-center py-[10px]'>
      <div>
        <p>
            Need help? Call us: <a className='text-blue-500' href="tel:+(+98) 0234 456 789">(+98) 0234 456 789</a>
        </p>
      </div>
      <div className='flex gap-[10px] items-center'>
        <div className='flex gap-[5px] items-center'>
            <CiLocationOn size={24} />
            <span>Our Store</span>
        </div>
        <div className='flex gap-[5px] items-center'>
            <CiDeliveryTruck size={24} />
            <span>Track your order</span>
        </div>
        <IoIosClose size={24} onClick={()=>setActiveHeader(false)}/>
      </div>
    </div>
  )
}

export default HeaderComponent
