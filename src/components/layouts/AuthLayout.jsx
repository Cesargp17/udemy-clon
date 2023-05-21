import { Navbar } from '@/components/ui/Navbar/Navbar'
import Head from 'next/head'
import { useState } from 'react'
import { Footer } from '../ui/Footer/Footer'

export const AuthLayout = ({ children }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
        <Head>
            <title>Udemy</title>
        </Head>
        <nav>
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        </nav>

        <main className={`${ isMenuOpen ? 'inset-0 bg-black bg-opacity-50' : 'bg-[#FFFFFF]' } lg:bg-[#FFFFFF] h-[700px] flex justify-center`}>
            { children }
        </main>

        <Footer/>
    </>
  )
}
