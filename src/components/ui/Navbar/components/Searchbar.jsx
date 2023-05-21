import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

export const Searchbar = () => {
  return (
    <div className='w-full px-4 relative hidden lg:block'>
        <input 
            className='w-full border-[0.5px] bg-[#F7F9FA] border-black rounded-full h-[46px] focus:outline-none px-8 text-sm' 
            type="text" 
            name="" 
            placeholder='Buscar cualquier cosa'
        />
        <div className='absolute top-4 left-7'>
            <RiSearchLine className='text-gray-600'/>
        </div>
    </div>
  )
}
