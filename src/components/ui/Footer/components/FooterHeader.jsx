import useWindowSize from '@/hooks/useWindowResize'
import Image from 'next/image'
import React from 'react'

export const FooterHeader = ({ images }) => {

    const { width } = useWindowSize();

  return (
    <div className='w-full h-[160px] lg:h-[95px] border-b border-[#3E4143] flex items-center p-6 flex-col lg:flex-row justify-normal lg:justify-between'>
        <p className='text-white font-bold text-sm md:text-xl lg:w-[50%]'>Las principales empresas eligen a <span className='text-indigo-300 cursor-pointer hover:underline'>Udemy Business </span> para desarrollar sus habilidades profesionales más demandadas.</p>
        <div className='flex gap-x-4'>
        {
            images.map( image => (
            <Image
                key={ image.id }
                src={ image.img }
                width={ width > 767 ? image.width : image.width - 30 }
                height={ width > 767 ? image.height : image.height - 30 }
                alt={ image.alt }
                className='mt-4 lg:mt-0'
            />
            ))
        }
        </div>
    </div>
  )
}
