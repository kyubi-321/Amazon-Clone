import React from 'react'
import Image from 'next/image';
import FormattedPrice from './FormattedPrice';
import { LuMinus, LuPlus } from 'react-icons/lu';
import {IoMdClose} from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { increaseQuantity , decreaseQuantity, deleteProduct } from '@/store/nextSlice';

interface Item{
    brand:string;
    category:string;
    description:string;
    image:string;
    isNew:boolean;
    oldPrice:number;
    price:number;
    title:string;
    _id:number;
    quantity:number;
}




interface cartProductProps{
    item: Item;
}


const CartProduct = ({item}: cartProductProps) => {
    const dispatch = useDispatch();
  return (
    <div className='bg-gray-100 rounded-lg flex flex-col md:flex-row items-center md:gap-4'>
        <Image
          className='object-cover'
          width={150}
          height={150} 
          src={item.image} 
          alt='Productimage'
          />

          <div className='flex items-center px-2 gap-4'>
            <div className='flex flex-col gap-1'>
                <p className='text-lg font-semibold text-amazon_blue'>{item.title}</p>
                <p className='text-sm text-gray-600'>{item.description}</p>
                <p className='text-sm text-gray-600'>
                    Unit price {" "}
                    <span className='text-amazon_blue font-semibold'>
                        <FormattedPrice amount={item.price}/>
                    </span>
                </p>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center mt-1 justify-between px-4 py-1 border border-gray-300 w-28 rounded-full shadow-lg shadow-gray-300'>
                        <span
                         onClick={()=>dispatch(decreaseQuantity({
                            _id:item._id,
                            brand:item.brand,
                            title:item.title,
                            oldPrice:item.oldPrice,
                            price:item.price,
                            description:item.description,
                            category:item.category,
                            image:item.image,
                            isNew:item.isNew,
                            quantity:1,
              
                          }))}
                        className='w-6 h-6 flex items-center justify-center text-base rounded-full bg-transparent hover:bg-gray-300 cursor-pointer  duration-300 decoration-purple-300'><LuMinus/></span>
                        <span >{item.quantity}</span>
                        <span 
                        onClick={()=>dispatch(increaseQuantity({
                            _id:item._id,
                            brand:item.brand,
                            title:item.title,
                            oldPrice:item.oldPrice,
                            price:item.price,
                            description:item.description,
                            category:item.category,
                            image:item.image,
                            isNew:item.isNew,
                            quantity:1,
              
                          }))}
                        className='w-6 h-6 flex items-center justify-center text-base rounded-full bg-transparent hover:bg-gray-300 cursor-pointer  duration-300 decoration-purple-300'><LuPlus/></span>
                    </div>
                    <div 
                    onClick={()=>dispatch(deleteProduct(item._id))}
                    className='flex items-center font-medium text-sm text-gray-400 hover:text-red-600 cursor-pointer duration-300 '>
                        <IoMdClose className="text-xl"/><p>remove</p>
                    </div>
                </div>
            </div>
            <div className='text-lg font-semibold text-amazon_blue'>
                <FormattedPrice amount={item.price*item.quantity}/>
            </div>
          </div>
    </div>
  )
}



export default CartProduct