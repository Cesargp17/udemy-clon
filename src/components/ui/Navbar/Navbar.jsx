import { Logo } from '@/components/Logo'
import React, { useContext } from 'react'
import { Searchbar } from './components/Searchbar'
import Link from 'next/link'
import { CartIcon } from './components/CartIcon'
import { SearchMobil } from './components/SearchMobil'
import { MenuMobil } from './components/MenuMobil'
import { AuthContext } from '@/context/AuthProvider'
import { WishList } from './components/WishList'
import { User } from './components/User'

export const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {

  const { isLoggedIn, user, onSignOut } = useContext(AuthContext);

  return (
    <div className={`fixed w-full h-[72px] ${ isMenuOpen ? 'inset-0 bg-black bg-opacity-50' : 'bg-white' } lg:bg-white drop-shadow-lg flex items-center justify-between px-6 gap-4`}>
        <MenuMobil isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <Logo/>
        <Searchbar/>
        <Link className='w-40 hidden lg:block hover:text-indigo-800 text-sm whitespace-nowrap' href='#'>Udemy Business</Link>
        <Link className='w-40 hidden lg:block hover:text-indigo-800 text-sm whitespace-nowrap' href='#'>Enseña en Udemy</Link>
        { isLoggedIn && <Link className='w-40 hidden lg:block hover:text-indigo-800 text-sm whitespace-nowrap' href='#'>Mi aprendizaje</Link> }
        <div className='flex items-center'>
          <SearchMobil/>
          { isLoggedIn && <WishList/> }
          <CartIcon/>
          { isLoggedIn && <User user={ user } onSignOut={ onSignOut }/> }
        </div>
        {
          !isLoggedIn && (
            <>
            <div className='hidden lg:flex items-center justify-center w-[150px] h-[40px] border-[1px] border-black cursor-pointer hover:bg-gray-100 px-2'>
              <Link href={'/auth/login'} className='font-bold text-sm whitespace-nowrap'>Iniciar sesión</Link>
            </div>
            <div className='hidden lg:flex items-center justify-center w-[150px] h-[43px] border-[1px] bg-black cursor-pointer px-2'>
              <Link href={'/auth/register'} className='font-bold text-sm text-white whitespace-nowrap'>Regístrate</Link>
            </div>
            </>
          )
        }
    </div>
  )
}
