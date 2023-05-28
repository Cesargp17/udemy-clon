import { AuthLayout } from '@/components/layouts/AuthLayout'
import { FormLogin } from '@/components/pages/auth/FormLogin'
import { RedesSociales } from '@/components/pages/auth/RedesSociales';
import { AuthContext } from '@/context/AuthProvider';
import Link from 'next/link';
import React, { useContext } from 'react'
import { RiErrorWarningFill } from 'react-icons/ri';

const LoginPage = () => {
  
  const { onSignIn, isError, isSending } = useContext(AuthContext);

  return (
    <AuthLayout>
      <div className='flex-col'>
        <h2 className='font-bold mb-4'>Inicia sesión en tu cuenta de Udemy</h2>
        {
          isError.error && (
            <div className='w-full sm:w-[350px] h-24 bg-red-300 mb-4 flex px-4 gap-x-3'>
            <RiErrorWarningFill className='mt-4 text-2xl'/>
            <p className='font-bold leading-none m-auto'>{ isError.msg }</p>
          </div>
          )
        }
        <RedesSociales/>
        <FormLogin onSignIn={ onSignIn } isSending={ isSending }/>
        <div className='w-full sm:w-[350px] h-[0.2px] bg-gray-500 mt-4'/>
        <div className='text-center flex justify-center mt-4 text-sm'>
          <span>¿No tienes una cuenta?</span>&nbsp;
          <Link className='underline text-indigo-800 font-bold' href='/auth/register'>Regístrate</Link>
        </div>
      </div>
    </AuthLayout>
  )
}

export default LoginPage
