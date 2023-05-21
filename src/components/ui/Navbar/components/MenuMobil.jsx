import React, { useState } from 'react'
import { RiCloseLine, RiMenuLine } from 'react-icons/ri'

export const MenuMobil = ({ isMenuOpen, setIsMenuOpen }) => {

  return (
    <div className='lg:hidden'>
        <RiMenuLine onClick={ () => setIsMenuOpen( true ) } className='text-2xl cursor-pointer'/>
        <div className={`drop-shadow-lg fixed flex lg:hidden z-10 w-[250px] h-screen bg-white ${ !isMenuOpen && '-left-full transition-all duration-300' } left-0 top-0 bottom-5 transition-all duration-300`}>
            <div className='ms-auto mt-4'>
                <button onClick={ () => setIsMenuOpen( false ) } className={` ${ isMenuOpen ? 'fixed' : 'hidden'  } ms-2 lg:hidden bg-white z-50 w-10 h-10 flex items-center justify-center rounded-full`}>
                    <RiCloseLine className='text-3xl'/>
                </button>
            </div>
        </div>
    </div>
  )
}
