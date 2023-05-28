import { AuthLayout } from '@/components/layouts/AuthLayout'
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { RiErrorWarningFill } from 'react-icons/ri';

const ConfirmPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { onConfirmAccount, isError, isSending } = useContext(AuthContext);

    const onConfirm = ({ codigo }) => {
        onConfirmAccount( codigo );
    }

  return (
    <AuthLayout>
        <div className='flex flex-col'>
            <h2 className='font-bold mb-4'>Confirma tú cuenta para completar tú registro.</h2>
            {
            isError.error && (
            <div className='w-full sm:w-[350px] h-24 bg-red-300 mb-4 flex px-4 gap-x-3'>
                <RiErrorWarningFill className='mt-4 text-2xl'/>
                <p className='font-bold leading-none m-auto'>{ isError.msg }</p>
            </div>
            )
            }
            <form onSubmit={handleSubmit(onConfirm)} className='flex flex-col'>
                <input 
                    className={`${ errors.codigo ? 'outline-red-600 border-red-600 border-2 placeholder-red-600' : 'border-black placeholder-black' } w-full sm:w-[350px] h-[60px] border-[1px] px-2 font-bold text-sm`} 
                    placeholder='Código de confirmación' 
                    type="text"
                    name='codigo'
                    {
                        ...register('codigo', {
                        required: 'Ingresa el código',
                        })
                    }
                />
                { errors.codigo && <span className='font-bold text-xs text-red-600 leading-none mt-2'>{ errors.codigo.message }</span> }

                <button 
                    type='submit' 
                    disabled={ isSending }
                    className={`
                        bg-[#A435F0]
                        hover:bg-[#8710D8] 
                        h-[60px]
                        mt-5
                        font-bold 
                        text-white
                        ${ isSending && 'bg-[#A435F0]/60' }
                        `}
                >Confirmar</button>
            </form>
        </div>
    </AuthLayout>
  )
}

export default ConfirmPage