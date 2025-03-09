import React from 'react'
import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className='h-screen flex items-center flex-col justify-center gap-[15px]'>
        <h2 className='font-extralight text-[80px] text-mainBlue'>Oops! 404</h2>
        <p className='text-[35px] text-mainBlue'>Page Not Found</p>
        <Link to='/' className='border border-mainBlue w-fit px-[20px] py-[10px]'>Go back home</Link>
    </div>
  )
}

export default NotFoundPage
