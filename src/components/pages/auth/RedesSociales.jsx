import { AuthContext } from '@/context/AuthProvider'
import Image from 'next/image'
import React, { useContext } from 'react'

export const RedesSociales = () => {

    const { onLoginWithFacebook, onLoginWithGoogle, isSending } = useContext(AuthContext);

  return (
    <>
        <button
            disabled={ isSending }
            onClick={ () => onLoginWithGoogle() } 
            className={`${ isSending && 'bg-gray-100 text-gray-400' } w-full sm:w-[350px] h-[60px] border-[1px] border-black px-3 mb-3 hover:bg-gray-100 flex items-center`}>
            <Image
                src={'/images/google.png'}
                width={35}
                height={35}
                alt='Google SignIn'
            />
            <span className='font-bold ms-2'>Continuar con Google</span>
        </button>
        <button
            disabled={ isSending }
            onClick={ () => onLoginWithFacebook() } 
            className={`${ isSending && 'bg-gray-100 text-gray-400' } w-full sm:w-[350px] h-[60px] border-[1px] border-black px-3 mb-3 hover:bg-gray-100 flex items-center`}>
            <Image
                src={'/images/Facebook.webp'}
                width={35}
                height={35}
                alt='Facebook SignIn'
            />
            <span className='font-bold ms-2'>Continuar con Facebook</span>
        </button>
    </>
  )
}
