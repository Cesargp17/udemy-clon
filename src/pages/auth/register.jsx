import { AuthLayout } from '@/components/layouts/AuthLayout';
import React, { useContext } from 'react'
import { FormRegister } from '@/components/pages/auth/FormRegister';
import Link from 'next/link';
import { RiErrorWarningFill } from 'react-icons/ri';
import { AuthContext } from '@/context/AuthProvider';

const RegisterPage = () => {

    const { onSignUp, isError, isSending } = useContext(AuthContext);

  return (
    <AuthLayout>
      <div className='flex-col'>
        <h2 className='font-bold mb-4'>Regístrate y comienza a aprender.</h2>
        {
          isError.error && (
          <div className='w-full sm:w-[350px] h-24 bg-red-300 mb-4 flex px-4 gap-x-3'>
            <RiErrorWarningFill className='mt-4 text-2xl'/>
            <p className='font-bold leading-none m-auto'>{ isError.msg }</p>
          </div>
          )
        }
        <FormRegister onSignUp={ onSignUp } isSending={ isSending }/>
        <p className='text-xs text-center mt-4'>Al registrarte, aceptas nuestras <span className='underline cursor-pointer'>Condiciones de uso</span> y nuestra <br /> <span className='underline cursor-pointer'>Política de privacidad.</span></p>
        <div className='w-full sm:w-[350px] h-[0.2px] bg-gray-500 mt-4'/>
        <div className='text-center flex justify-center mt-4 text-sm'>
          <span>¿Ya tienes una cuenta?</span>&nbsp;
          <Link className='underline text-indigo-800 font-bold' href='#'>Inicia sesión</Link>
        </div>
      </div>
    </AuthLayout>
  )
}

export default RegisterPage