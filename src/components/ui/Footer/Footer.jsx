import Image from 'next/image'
import React from 'react'
import { FooterHeader } from './components/FooterHeader';
import { LinksFooter } from './components/LinksFooter';
import { Logo } from '@/components/Logo';

const images = [
 { id: 1, img: '/images/Nasdaq.svg', alt: 'Nasdaq Image Logo', width: 115, height: 44 },
 { id: 2, img: '/images/Volk.svg', alt: 'Volk Image Logo', width: 44, height: 44 },
 { id: 3, img: '/images/Box.svg', alt: 'Box Image Logo', width: 67, height: 44 },
 { id: 4, img: '/images/Netapp.svg', alt: 'Netapp Image Logo', width: 115, height: 44 },
 { id: 5, img: '/images/Eventbrite.svg', alt: 'Eventbrite Image Logo', width: 115, height: 44 },
];

export const Footer = () => {

  return (
    <div className='w-full h-auto bg-[#1C1D1F]'>
      <FooterHeader images={ images } />
      <LinksFooter/>
      <div className='flex mt-4 md:mt-20 p-6 justify-between'>
        <Logo img='/images/Logo2.svg'/>
        <p className='text-white text-sm font-medium'>© 2023 Udemy, Inc.</p>
      </div>
    </div>
  )
}
