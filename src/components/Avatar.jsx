import { AuthContext } from '@/context/AuthProvider'
import Image from 'next/image';
import React, { useContext } from 'react'

export const Avatar = () => {

    const { user } = useContext(AuthContext);

  return (
    <div className='w-[40px] h-[20px] flex items-center'>
        <img 
            src={user?.picture} 
            alt={`${ user?.name } Imagen de perfil`} 
            className='rounded-full ms-2 cursor-pointer'
        />
    </div>
  )
}
