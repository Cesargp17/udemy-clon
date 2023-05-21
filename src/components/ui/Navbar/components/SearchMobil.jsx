import React, { useState } from 'react'
import { RiCloseLine, RiSearchLine } from 'react-icons/ri'

export const SearchMobil = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false)
    
  return (
    <div>
        <RiSearchLine onClick={ () => setIsSearchOpen( true ) } className='text-2xl cursor-pointer hover:text-indigo-800 lg:hidden'/>
        <div className={`drop-shadow-lg ${ !isSearchOpen && 'hidden' } fixed flex lg:hidden z-10 w-full h-screen bg-white left-0 top-0 bottom-5 transition-all duration-300`}>
            <div className='relative w-full'>
                <input 
                    className='h-[57px] w-full text-gray-600 px-10 border-b-[0.5px] border-gray-400 focus:outline-none' 
                    placeholder='Buscar cualquier cosa' 
                    type="text" 
                />
                <div className='absolute top-5 left-4'>
                    <RiSearchLine className='text-gray-600'/>
                </div>
                <div className='absolute top-4 right-2'>
                    <button onClick={ () => setIsSearchOpen( false ) } className='text-2xl'>
                        <RiCloseLine/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
