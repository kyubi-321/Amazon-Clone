import Link from 'next/link'

import { useDispatch } from 'react-redux'
import { resetCart } from '@/store/nextSlice'

const success = () => {
    const dispatch = useDispatch();
  return (
    <div className='m-0 p-20 bg-gray-300 flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-semibold'>Payment Successful</h1>
        <Link href={"/"} onClick={()=>dispatch(resetCart())}>
            <p className='text--2xl text-blue-400 hover:text-blue-600 underline-offset-4'>
                Continue Shopping
            </p>
        </Link>
    </div>
  )
}

export default success