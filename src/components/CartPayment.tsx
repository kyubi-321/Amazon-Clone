import React from 'react'
import {SiMediamarkt} from 'react-icons/si'
import FormattedPrice from './FormattedPrice'
import {useSelector , useDispatch} from 'react-redux'
import { useState , useEffect } from 'react'
import { StateProps , StoreProduct } from '../../type'
import { loadStripe } from '@stripe/stripe-js'
import { useSession } from 'next-auth/react'


const CartPayment = () => {
    const {productData , userInfo} = useSelector((state: StateProps)=>state.next)
    const dispatch = useDispatch();
    const [totalAmount ,setTotalAmount] = useState(0)
    useEffect(()=>{
        let amt=0
        productData.map((item: StoreProduct)=>{
                amt += item.price*item.quantity
                return
        })

        setTotalAmount(amt)
    } , [productData])

    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    )

    const {data : session}= useSession()

    const handleCheckout=async()=>{
        const stripe = await stripePromise;

        const response = await fetch("/api/checkout" , {
            method: "POST",
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify({items:productData , email:session?.user?.email})
        })
        const checkoutSession = await response.json()

        //redirecting user to stripe checkout

        const result:any = await stripe?.redirectToCheckout({
            sessionId : checkoutSession.id,
        });

        if(result.error){
            alert(result?.error.message)
        }

    }
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex gap-2'>
            <span className='h-6 w-6 bg-green-600 rounded-full p-1 text-sm text-white flex items-center justify-center mt-1'>
                <SiMediamarkt/>

            </span>
            <p className='text-sm'>
                If you select this option you will get free shipping....
            </p>

        </div>
        <p className='flex items-center justify-between px-2'>
            Total:{" "}
            <span className='text-xl font-bold'>
                <FormattedPrice  amount={totalAmount}/>
            </span>
        </p>
        
           
                <div className='flex flex-col items-center'>
            <button onClick={handleCheckout} className='w-full h-10 text-sm font-semibold bg-amazon_blue  cursor-pointer text-white rounded-lg hover:bg-amazon_yellow hover:text-amazon_blue duration-300'>
                Proceed To Buy
            </button>

            
        </div>
            
        
        
    </div>
  )
}

export default CartPayment