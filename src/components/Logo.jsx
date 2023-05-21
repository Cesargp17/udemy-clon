import Image from 'next/image'
import React from 'react'

export const Logo = ({ width = 91, height = 34 }) => {
  return (
    <Image
        src={'/images/logo-udemy.svg'}
        width={width}
        height={height}
        alt='Logo Udemy'
    />
  )
}
