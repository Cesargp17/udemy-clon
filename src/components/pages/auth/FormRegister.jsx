import React from 'react'

export const FormRegister = () => {
  return (
    <form className='w-full flex flex-col gap-y-4' action="">
        <input className='w-full sm:w-[350px] h-[60px] border-[1px] border-black px-2 placeholder-black font-bold text-sm' placeholder='Nombre completo' type="text" />
        <input className='w-full sm:w-[350px] h-[60px] border-[1px] border-black px-2 placeholder-black font-bold text-sm' placeholder='Correo eléctronico' type="text" />
        <input className='w-full sm:w-[350px] h-[60px] border-[1px] border-black px-2 placeholder-black font-bold text-sm' placeholder='Contraseña' type="text" />
        <button className='bg-[#A435F0] hover:bg-[#8710D8] h-[60px] font-bold text-white'>Regístrate</button>
    </form>
  )
}
