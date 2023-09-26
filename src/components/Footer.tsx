import React from 'react'
import Image from 'next/image'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <div className='w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center'>
      <Image 
          className='w-24 mx-2'
          src={logo}
          alt='logo'
      />

      <p className='text-sm -mt-4'>
      All rights reserved {" "}  
      <a className='hover:underline cursor-pointer duration-300' href="https://instagram.com/ankit_badhani_11" target='_blank'>@Ankit Badhani</a>
      </p>
    </div>
  )
}

export default Footer