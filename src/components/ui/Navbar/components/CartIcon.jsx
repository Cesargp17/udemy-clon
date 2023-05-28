import Link from 'next/link'
import React, { useState } from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
import 'animate.css';
import useWindowSize from '@/hooks/useWindowResize';

export const CartIcon = () => {

    const [isCartHover, setIsCartHover] = useState(false);
    const { width } = useWindowSize();

  return (
    <div className='relative' onClick={ () => setIsCartHover( !isCartHover ) }>
        <RiShoppingCart2Line className='text-2xl cursor-pointer hover:text-indigo-800'/>
        <div 
            className={`absolute ${ !isCartHover && 'hidden' } w-[280px] h-28 bg-white top-14 right-0 ${ width <= 1023 && 'hidden' } flex items-center justify-center flex-col text-center animate__animated animate__bounce animate__fadeIn animate__faster`}>
            <p className='text-gray-500'>Tu cesta está vacia.</p>
            <Link className='w-36 hover:text-indigo-800 text-indigo-600 text-sm font-bold mt-4' href='#'>Seguir comprando</Link>
        </div>
    </div>
  )
}
