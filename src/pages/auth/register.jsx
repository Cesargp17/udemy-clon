import { useAuth } from '@/hooks/useAuth'
import { AuthLayout } from '@/components/layouts/AuthLayout';
import React from 'react'
import { FormRegister } from '@/components/pages/auth/FormRegister';
import Link from 'next/link';

const RegisterPage = () => {

    const { onSignUp } = useAuth();

  return (
    <AuthLayout>
      <div className='flex-col mt-16'>
        <h2 className='font-bold mb-4'>Regístrate y comienza a aprender.</h2>
        <FormRegister/>
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