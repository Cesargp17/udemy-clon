import Head from 'next/head'
import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar/Navbar'
import { Footer } from '../ui/Footer/Footer'

export const UdemyLayout = ({ children }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
        <Head>
            <title>Udemy</title>
        </Head>
        <nav>
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        </nav>

        <main className={`${ isMenuOpen ? 'inset-0 bg-black bg-opacity-50' : 'bg-[#FFFFFF]' } lg:bg-[#FFFFFF] h-[700px] flex justify-center items-center`}>
            { children }
        </main>

        <Footer/>
    </>
  )
}
