import { Avatar } from '@/components/Avatar'
import React from 'react'

export const MenuUser = ({ user, onSignOut }) => {
  return (
    <div className='flex flex-col items-start px-2'>
        <div className='flex items-center hover:text-indigo-600'>
            <Avatar/>
            <div className='flex flex-col'>
                <span className='px-4 font-bold text-lg cursor-pointer'>{ user?.name }</span>
                <span className='px-4 text-xs text-gray-600'>{ user?.email }</span>
            </div>
        </div>
        <div className='w-full h-[0.2px] bg-gray-400 mt-4'/>
        <button onClick={ () => onSignOut() } className='text-md mt-2 text-gray-700 hover:text-indigo-600'>Cerrar sesión</button>
        <div className='w-full h-[0.2px] bg-gray-400 mt-4'/>
    </div>
  )
}
