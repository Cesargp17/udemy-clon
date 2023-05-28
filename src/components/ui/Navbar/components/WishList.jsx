import useWindowSize from '@/hooks/useWindowResize';
import Link from 'next/link';
import React, { useState } from 'react'
import { RiHeart3Line } from 'react-icons/ri';

export const WishList = () => {

    const [isWishListHover, setIsWishListHover] = useState(false)
    const { width } = useWindowSize();

  return (
    <div className='relative mr-2 hidden lg:block' onClick={ () => setIsWishListHover( !isWishListHover ) }>
        <RiHeart3Line className='text-2xl cursor-pointer hover:text-indigo-800'/>
        <div 
            className={`absolute ${ !isWishListHover && 'hidden' } w-[280px] h-28 bg-white top-14 right-0 ${ width <= 1023 && 'hidden' } flex items-center justify-center flex-col text-center animate__animated animate__bounce animate__fadeIn animate__faster`}>
            <p className='text-gray-500'>Tu lista de deseos está vacia.</p>
            <Link className='w-36 hover:text-indigo-800 text-indigo-600 text-sm font-bold mt-4' href='#'>Descubrir cursos</Link>
        </div>
    </div>
  )
}
