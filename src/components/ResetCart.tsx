import React from 'react'
import { useDispatch } from 'react-redux'
import { resetCart } from '@/store/nextSlice';

const ResetCart = () => {
    const dispatch = useDispatch();
    const handleResetCart =()=>{
        const confirmReset = window.confirm(
            "Are you sure , you want to reset the cart?"
        );

        if(confirmReset){
            dispatch(resetCart())
        }
    }

  return (
    <button onClick={handleResetCart} className='w-44 h-10 font-semibold  text-lg text-amazon_blue bg-gray-300 border-[1px] rounded-lg hover:bg-red-600
    hover:text-white cursor-pointer duration-300'>
        Reset Cart
    </button>
  )
}

export default ResetCart