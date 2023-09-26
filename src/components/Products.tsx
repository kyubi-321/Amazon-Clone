import React from 'react'
import { ProductProps } from '../../type';
import Image from 'next/image';
import {BsFillCartFill} from 'react-icons/bs'
import {FaHeart} from 'react-icons/fa'
import FormattedPrice from './FormattedPrice';
import { useDispatch } from 'react-redux';
import { addToCart, addToFavourite } from '@/store/nextSlice';
import Link from 'next/link';

export const Products = ({productData} :any) => {
  const dispatch = useDispatch();
  return(
    <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      {
        productData.slice(0,19).map(({ _id , title , description , image , oldPrice , price , category ,isNew , brand} :ProductProps)=>(
         <div key={_id} className='w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden'>
          <div className='w-full h-[260px] relative'>
          <Link href={{pathname:`/${_id}` , query:{
            _id:_id,
            brand:brand,
            title:title,
            oldPrice:oldPrice,
            price:price,
            description:description,
            category:category,
            image:image,
            isNew:isNew,
          }}}>
          <Image
              className='w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300'    
              width={300}
              height={300}     
              src={image}
              alt='productImg'
          />
          </Link>
          <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400
           bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
            <span 
              onClick={()=>dispatch(addToCart({
                _id:_id,
                brand:brand,
                title:title,
                oldPrice:oldPrice,
                price:price,
                description:description,
                category:category,
                image:image,
                isNew:isNew,
                quantity:1,
  
              }))}
            className='w-full h-full border-b-[1px] border-b-gray-400 text-xl flex items-center justify-center bg-transparent hover:bg-amazon_yellow cursor-pointer  '>
              <BsFillCartFill />
              </span>
            <span 
            onClick={()=>dispatch(addToFavourite({
              _id:_id,
              brand:brand,
              title:title,
              oldPrice:oldPrice,
              price:price,
              description:description,
              category:category,
              image:image,
              isNew:isNew,
              quantity:1,

            }))}
            className='w-full h-full border-b-[1px] border-b-gray-400 text-xl flex items-center justify-center bg-transparent hover:bg-amazon_yellow cursor-pointer  '>
              <FaHeart/>
            </span>
          </div>
          {
            isNew && (
                <p className='absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce duration-300 '>
                  !Save <FormattedPrice amount={oldPrice-price}/>
                </p>
            )
          }
          </div>

          

          <hr />

          <div className='py-3 px-4 gap-1 flex flex-col'>
            <p className='text-xs text-gray-500 tracking-wide'>{category}</p>
            <p className=' text-base font-medium'>{title}</p>

             <p className='flex items-center gap-2'>
            <span className='text-xs line-through'><FormattedPrice amount={oldPrice}/></span>
            <span className='text-amazon_blue font-semibold'><FormattedPrice amount={price}/></span>
            </p>

            <p className='text-xs etxt-gray-500 text-justify'>{description.substring(0,120)}</p>

            <button onClick={()=>dispatch(addToCart({
              _id:_id,
              brand:brand,
              title:title,
              oldPrice:oldPrice,
              price:price,
              description:description,
              category:category,
              image:image,
              isNew:isNew,
              quantity:1,

            }))} className='p-2 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow duration-300 hover:text-black'>
              add to cart
            </button>
          </div>

         
         </div>
         
        ))
      }
    </div>
  )
};

export default Products