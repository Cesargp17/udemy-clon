import Link from 'next/link'
import React from 'react'

export const LinksFooter = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 w-[60%] mt-10 px-6 flex-row'>
        <div className='flex flex-col gap-y-2'>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Udemy Business</Link>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Eneseña en Udemy</Link>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Consigue la aplicación</Link>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Quiénes somos?</Link>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Ponte en contacto con nosotros</Link>
        </div>
        <div className='flex flex-col gap-y-2'>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Udemy Business</Link>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Eneseña en Udemy</Link>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Consigue la aplicación</Link>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Quiénes somos?</Link>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Ponte en contacto con nosotros</Link>
        </div>
        <div className='flex flex-col gap-y-2'>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Udemy Business</Link>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Eneseña en Udemy</Link>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Consigue la aplicación</Link>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Quiénes somos?</Link>
            <Link className='hover:underline text-sm text-white font-medium' href='#'>Ponte en contacto con nosotros</Link>
        </div>
    </div>
  )
}
