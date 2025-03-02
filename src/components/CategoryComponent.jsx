import { useEffect, useState } from 'react'

// our services
import CategoryService from '../services/CategoryService'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { saveAllCategoryAction } from '../store/categorySlice'

function CategoryComponent() {
  const [toggleCategory,setToggleCategory] = useState(false)
  const dispatch = useDispatch()
  const {allCategory,isLoading} = useSelector(state=>state.categoryStore)

  useEffect(()=>{
      CategoryService.getAllCategory()
      .then(res=>{dispatch(saveAllCategoryAction(res.data))})
      .catch(err=>{console.log(err)})
  },[])
  return (
    <div className='bg-ligthGray flex items-center h-full'>
      <div className='container mx-auto flex items-center gap-[20px] py-[10px] flex-col md:flex-row'>
        <button onClick={()=>setToggleCategory(!toggleCategory)} className='px-[20px] py-[10px] bg-mainBlue text-textWhite rounded-lg w-[200px] md:w-auto'>Show Category</button>
        {isLoading?<ul className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[5px]'>
          {toggleCategory && allCategory.map((cat,index)=><li key={index} className='w-[200px] bg-mainBlue text-textWhite py-[8px] px-[16px] rounded-lg cursor-pointer text-center hover:bg-mainYellow transition-all duration-500'>{cat}</li>)}
        </ul> : <div>Loading... </div>}
      </div>
    </div>
  )
}

export default CategoryComponent
