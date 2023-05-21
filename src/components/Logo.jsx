import Image from 'next/image'
import React from 'react'

export const Logo = ({ width = 91, height = 34, img = '/images/logo-udemy.svg' }) => {
  return (
    <Image
        src={ img }
        width={width}
        height={height}
        alt='Logo Udemy'
    />
  )
}
