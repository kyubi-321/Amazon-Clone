
import { useSelector } from 'react-redux'
import { StateProps, StoreProduct } from '../../type'
import CartProduct from '@/components/CartProduct'
import ResetCart from '@/components/ResetCart'
import Link from 'next/link'
import CartPayment from '@/components/CartPayment'

const CartPage = () => {
  const {productData} = useSelector((state:StateProps)=>state.next)
  return (
    <div className='bg-gray-300  flex-col justify-center m-1  md:bg-gray-300 max-w-screen-2xl mx-auto px-6   py-4'>
      {
        productData.length>0 ? (
          <>
            <div className='bg-white col-span-4 p-4 rounded-lg'>
               <div className='flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1'>
                    <p className='text-2xl font-semibold text-amazon_blue'>Shopping Cart</p>
                    <p className='text-lg  font-semibold text-amazon_blue'>Subtotal</p>
               </div>

               <div className='pt-2 flex flex-col gap-2'>
                {productData.map((item: StoreProduct)=>(
                  <div key={item._id} >
                        
                        <CartProduct item={item}/>
                  </div>
                ))}

                <ResetCart/>
               </div>

            </div>

            <div className='h-64 p-4 rounded-lg bg-white  col-span-1 flex  items-center justify-center mt-4 sm:mt-0'>
              <CartPayment/>
            </div>
          </>
        ):(
          <>
            <div className='bg-white h-64 flex flex-col col-span-5  items-center justify-center py-5 shadow-lg shadow-gray-400'>
              <h1 className='text-lg font-bold'>Your cart is empty</h1>
              <Link href={"/"}>
                <button className='w-64 h-10 bg-amazon_blue text-white rounded-lg hover:bg-amazon_yellow hover:text-amazon_blue   mt-4'>Go back to shopping</button>
              </Link>
            </div>
            </>
        )
      }
    </div>
  )
}

export default CartPage