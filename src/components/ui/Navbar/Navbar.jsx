import { Logo } from '@/components/Logo'
import React from 'react'
import { Searchbar } from './components/Searchbar'
import Link from 'next/link'
import { CartIcon } from './components/CartIcon'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { SearchMobil } from './components/SearchMobil'
import { MenuMobil } from './components/MenuMobil'

export const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className={`w-full h-[72px] ${ isMenuOpen ? 'inset-0 bg-black bg-opacity-50' : 'bg-white' } lg:bg-white drop-shadow-lg flex items-center justify-center lg:justify-normal px-6 gap-4`}>
        <MenuMobil isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <div className='flex-grow'/>
        <Logo/>
        <Searchbar/>
        <Link className='w-40 hidden lg:block hover:text-indigo-800 text-sm whitespace-nowrap' href='#'>Udemy Business</Link>
        <Link className='w-40 hidden lg:block hover:text-indigo-800 text-sm whitespace-nowrap' href='#'>Enseña en Udemy</Link>
        <div className='flex-grow'/>
        <SearchMobil/>
        <CartIcon/>
        <Login/>
        <Register/>
    </div>
  )
}
