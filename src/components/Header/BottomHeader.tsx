import React from 'react'
import {LuMenu} from "react-icons/lu"
import { useSelector , useDispatch } from 'react-redux'
import { StateProps } from '../../../type';
import {signOut} from 'next-auth/react'
import { removeUser } from '@/store/nextSlice';

const BottomHeader = () => {
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state:StateProps)=>state.next)

  const handleSignOut=()=>{
    signOut();
    dispatch(removeUser())
  }
  return (
    <div className=' w-full h-10 px-4 text-sm text-white bg-amazon_light flex items-center
    '>
       
       <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white
       cursor-pointer duration-300'>
        <LuMenu className="text-xl"/>All
       </p>

       <p className='hidden md:inline-flex  items-center gap-1 h-8 px-2 border border-transparent hover:border-white
       cursor-pointer duration-300'>
        Today`&apos;`s deals
       </p>

       <p className='hidden md:inline-flex  items-center gap-1 h-8 px-2 border border-transparent hover:border-white
       cursor-pointer duration-300'>
        Customer Service
       </p>

       <p className='hidden md:inline-flex  items-center gap-1 h-8 px-2 border border-transparent hover:border-white
       cursor-pointer duration-300'>
        Registry
       </p>

       <p className='hidden md:inline-flex  items-center gap-1 h-8 px-2 border border-transparent hover:border-white
       cursor-pointer duration-300'>
        Gift Cards
       </p>

       <p className='hidden md:inline-flex  items-center gap-1 h-8 px-2 border border-transparent hover:border-white
       cursor-pointer duration-300'>
        sell
       </p>

       
    </div>
  )
}

export default BottomHeader