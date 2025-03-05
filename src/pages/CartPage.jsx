import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function CartPage() {
  const cart = JSON.parse(localStorage.getItem('cart'))
  function quantityDecrement(product){
    if(product.quantity>1)product.quantity--
}
function quantityIncrement(product){
    if(product.quantity<product.stock)product.quantity++
}
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
              {cart && cart.map((product) => (
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
                        <button className="px-[10px] py-[4px] bg-slate-300 text-gray-500 border border-gray-500" onClick={()=>quantityDecrement(product)}>-</button>
                        <span className="px-[20px] py-[4px] bg-slate-300 text-gray-500 border border-b-gray-500 border-t-gray-500">{product.quantity}</span>
                        <button className="px-[10px] py-[4px] bg-slate-300 text-gray-500 border border-gray-500" onClick={()=>quantityIncrement(product)}>+</button>
                      </div>
                  </TableCell>
                  <TableCell align="right">${product.quantity*product.totalPriceProduct}</TableCell>
                  <TableCell align="right">
                    <button className='text-red-500'>Remove</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div  className='w-full md:w-[30%]'>
          <h2 className='bg-mainBlue text-textWhite py-[15px] px-[5px] font-semibold'>CART TOTAL:</h2>
        </div>
      </div>
    </div>
  )
}

export default CartPage
