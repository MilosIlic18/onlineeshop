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
function CartPage() {
  const cart = JSON.parse(localStorage.getItem('cart'))
  const {totalPriceProducts} = useSelector(state=>state.cartStore)
  const [totalProductsPrice,setTotalProductsPrice] = useState(0)
  const dispatch = useDispatch()
  function handleRemoveProduct(product){
    dispatch(deleteFromCartAction(product))
  }
  function handleQuantityChange(product,op){
    dispatch(handleQuantityChangeAction({product,op}))
  }
  useEffect(()=>{
    setTotalProductsPrice(JSON.parse(localStorage.getItem('totalPriceProducts'))||0)
  },[totalPriceProducts])
  return (
    <div className='mt-[50px]'>
      <div className="container mx-auto flex flex-col md:flex-row gap-[10px]">
          <TableContainer component={Paper} className='w-full md:w-[70%]'>
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead>
              <TableRow className='bg-mainBlue'>
                <TableCell style={{color: 'white'}}>Products</TableCell>
                <TableCell style={{color: 'white'}} align="left">Price</TableCell>
                <TableCell style={{color: 'white'}} align="left">Quantity</TableCell>
                <TableCell style={{color: 'white'}} align="right">Subtotal</TableCell>
                <TableCell style={{color: 'white'}} align="right">Remove</TableCell>
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
        <div  className='w-full md:w-[30%]'>
          <div className='flex gap-[10px] bg-mainBlue items-center text-textWhite font-semibold'>
            <h2 className='py-[15px] px-[5px]'>CART TOTAL:</h2>
            <span className='py-[15px] px-[5px]'>${totalProductsPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
