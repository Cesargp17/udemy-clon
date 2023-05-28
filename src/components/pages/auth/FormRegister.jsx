import { isEmail, isValidPassword } from '@/utils/validations';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

export const FormRegister = ({ onSignUp, isSending }) => {

  const [isShowPassword, setIsShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onStartSignUp = ({ name, email, password }) => {
    onSignUp({ name, email, password });
  }

  return (
    <form onSubmit={ handleSubmit(onStartSignUp) } className='w-full flex flex-col gap-y-4' action="">
        <input 
          className={`${ errors.name ? 'outline-red-600 border-red-600 border-2 placeholder-red-600' : 'border-black placeholder-black' } w-full sm:w-[350px] h-[60px] border-[1px] px-2 font-bold text-sm`} 
          placeholder='Nombre completo' 
          type="text"
          name='nombre'
          {
            ...register('name', {
              required: 'El campo nombre completo es requerido',
            })
          }
          />
          { errors.name && <span className='font-bold text-xs text-red-600 leading-none'>{ errors.name.message }</span> }
        <input 
          className={`${ errors.email ? 'outline-red-600 border-red-600 border-2 placeholder-red-600' : 'border-black placeholder-black' } w-full sm:w-[350px] h-[60px] border-[1px] px-2 font-bold text-sm`} 
          placeholder='Correo eléctronico' 
          type="text" 
          name='email'
          { ...register('email', {
            required: 'El campo email es requerido',
            validate: isEmail
          })
        }
        />
          { errors.email && <span className='font-bold text-xs text-red-600 leading-none'>{ errors.email.message }</span> }
        <div className='relative'>
          <input 
            type={ isShowPassword ? 'text' : 'password' } 
            className={`${ errors.password ? 'outline-red-600 border-red-600 border-2 placeholder-red-600' : 'border-black placeholder-black' } w-full sm:w-[350px] h-[60px] border-[1px] px-2 font-bold text-sm`} 
            placeholder='Contraseña' 
            name='password'
            { ...register('password', {
              required: 'Ingresa una contraseña',
              validate: isValidPassword
            }) 
          } 
          />
          <div onClick={() => setIsShowPassword( !isShowPassword )} className='absolute top-5 right-3 cursor-pointer'>
            {
              !isShowPassword ? <RiEyeFill/> : <RiEyeOffFill/>
            }
          </div>
        </div>
        { errors.password && <span className='font-bold text-xs text-red-600 leading-none'>{ errors.password.message }</span> }
        <button 
          type='submit' 
          disabled={ isSending }
          className={`
            bg-[#A435F0]
            hover:bg-[#8710D8] 
            h-[60px] 
            font-bold 
            text-white
            ${ isSending && 'bg-[#A435F0]/60' }
            `}
            >Regístrate</button>
    </form>
  )
}
