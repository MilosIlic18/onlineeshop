import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCartAction, handleQuantityChangeAction } from '../store/cartSlice';
import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom'
import { changeSelectedCategoryAction } from '../store/productSlice';
function CartPage() {
  const cart = JSON.parse(localStorage.getItem('cart'))||[]
  const {totalPriceProducts} = useSelector(state=>state.cartStore)
  const [totalProductsPrice,setTotalProductsPrice] = useState(0)
  const [coupon,setCoupon] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleRemoveProduct(product){
    dispatch(deleteFromCartAction(product))
  }
  function handleQuantityChange(product,op){
    dispatch(handleQuantityChangeAction({product,op}))
  }
  function handleSetCoupon(){
    if(coupon==='alpha')localStorage.setItem('coupon',coupon)
      setCoupon('')
  }
  function handleClearCart(){
    localStorage.removeItem('cart')
    localStorage.removeItem('totalProduct')
    localStorage.removeItem('totalPriceProducts')
    dispatch(changeSelectedCategoryAction(''))
    navigate('/')
  }

  useEffect(()=>{
    setTotalProductsPrice(JSON.parse(localStorage.getItem('totalPriceProducts'))||0)
  },[JSON.parse(localStorage.getItem('totalPriceProducts'))])
  return (
    <div className='mt-[50px] px-[10px] md:px-0'>
      <div className="container mx-auto flex flex-col md:flex-row gap-[10px]">
        <div className='w-full md:w-[70%]'>
          <TableContainer component={Paper} >
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead>
              <TableRow className='bg-ligthBlue'>
                <TableCell style={{color: '#003F62',fontWeight:'bold'}}>Products</TableCell>
                <TableCell style={{color: '#003F62',fontWeight:'bold'}} align="left">Price</TableCell>
                <TableCell style={{color: '#003F62',fontWeight:'bold'}} align="left">Quantity</TableCell>
                <TableCell style={{color: '#003F62',fontWeight:'bold'}} align="right">Subtotal</TableCell>
                <TableCell style={{color: '#003F62',fontWeight:'bold'}} align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart && cart.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div className='flex gap-[5px] items-center'>
                      <img src={product.thumbnail} alt={product.title} className='w-[90px] h-[90px] border border-mainBlue rounded-lg object-cover hidden md:block'/>
                        <h2 className='text-mainBlue font-semibold'>{product.title}</h2>
                      </div>
                  </TableCell>
                  <TableCell align="left">{product.price}</TableCell>
                  <TableCell align="left">
                    <div className="flex items-center">
                        <button className="px-[10px] py-[4px] bg-slate-300 text-gray-500 border border-gray-500" onClick={()=>handleQuantityChange(product,'dec')}>-</button>
                        <span className="px-[20px] py-[4px] bg-slate-300 text-gray-500 border border-b-gray-500 border-t-gray-500">{product.quantity}</span>
                        <button className="px-[10px] py-[4px] bg-slate-300 text-gray-500 border border-gray-500" onClick={()=>handleQuantityChange(product,'inc')}>+</button>
                      </div>
                  </TableCell>
                  <TableCell align="right">${product.totalPriceProduct.toFixed(2)}</TableCell>
                  <TableCell align="right">
                    <button className='text-red-500' onClick={()=>handleRemoveProduct(product)}>Remove</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className='flex mt-[30px] gap-[30px] justify-between items-center px-[10px]'>
          <button className='py-[10px] px-[20px] bg-mainYellow text-white rounded-lg' onClick={()=>{navigate('/'),dispatch(changeSelectedCategoryAction(''))}}>Continue Shopping</button>
          <button className='py-[10px] px-[20px] border border-gray-500 text-gray-500 rounded-lg' onClick={()=>(navigate('/'))}>Update Cart</button>
          <button disabled={cart.length===0?true:false} className='py-[10px] px-[20px] border border-red-500 text-red-500 rounded-lg' onClick={handleClearCart}>Clear Cart</button>
        </div>
        </div>
        <div  className='w-full md:w-[30%]'>
          <h2 className='py-[15px] px-[5px] bg-ligthBlue text-mainBlue text-center font-semibold'>Cart total</h2>
          <div className="px-[15px] py-[15px] flex flex-col items-center gap-[30px]">
              
              <div className="flex justify-between items-center border-b-2 border-black-500 w-full">
                <h2 className='font-semibold'>Subtotal:</h2>
                <span className='py-[15px] px-[5px]'>$ {totalProductsPrice.toFixed(2)}</span>
              </div>

              <div className="flex flex-col justify-between items-center border-b-2 border-black-500 w-full">
                  <div className='mb-[30px] w-full'>
                    <div className='border border-black-500 rounded-lg p-[10px] flex items-center gap-[10px] w-full'>
                      <input type="text" className='w-full outline-none' placeholder='Enter coupon code' onChange={(e)=>setCoupon(e.target.value)} value={coupon}  disabled={cart.length===0?true:false}/>
                      <button className={localStorage.getItem('coupon')!=='alpha'?'text-mainBlue/50 font-semibold':'text-mainBlue/50 font-semibold line-through'} onClick={handleSetCoupon} disabled={localStorage.getItem('coupon')==='alpha'?true:false}>Apply</button>
                    </div>
                    {localStorage.getItem('coupon')=='alpha'?
                      <span className='text-[13px] text-green-400'>Coupon applied</span>
                      :
                      <span className='text-[13px] text-gray-400'>Coupon not applied</span>
                    }
                  </div>
                  
              </div>

              <div className="flex justify-between items-center w-full">
                <select name="" id="" className='w-full px-[8px] py-[16px] bg-white border border-black-500 rounded-lg'>
                  <option value="">County</option>
                </select>
              </div>

              <div className="flex justify-between items-center w-full">
                <h2>Total amount:</h2>
                <span className='py-[15px] px-[5px]'>$ {localStorage.getItem('coupon')==='alpha'?(totalProductsPrice/2).toFixed(2):totalProductsPrice.toFixed(2)}</span>
              </div>
          
              <button className='bg-mainYellow text-white px-[16px] py-[8px] text-center w-full rounded-lg font-semibold' disabled={true}>Proceed to checkout</button>
          </div>
            

        </div>
      </div>
    </div>
  )
}

export default CartPage
