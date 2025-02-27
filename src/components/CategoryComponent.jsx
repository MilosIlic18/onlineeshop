import { useEffect, useState } from 'react'

// our services
import CategoryService from '../services/CategoryService'

function CategoryComponent() {
    const [allCategory,setAllCategory] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        CategoryService.getAllCategory()
        .then(res=>{setAllCategory(res.data),setIsLoading(true)})
        .catch(err=>{console.log(err)})
    },[])
  return (
    <div className='bg-ligthGray flex items-center h-full md:h-[70px]'>
      <div className='container mx-auto flex items-center gap-[20px]'>
        <button className='px-[20px] py-[10px] bg-mainBlue text-textWhite rounded-lg'>Show Category</button>
        {isLoading?<div>Category</div> : <div>Loading... </div>}
      </div>
    </div>
  )
}

export default CategoryComponent
