import { Avatar } from '@/components/Avatar'
import React, { useState } from 'react'
import { MenuUser } from './MenuUser'

export const User = ({ user, onSignOut }) => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className='hidden lg:block relative'>
        <div onClick={ () => setIsOpenMenu( !isOpenMenu ) }>
            <Avatar />
        </div>
        <div className={`absolute ${ !isOpenMenu && 'hidden' } w-[250px] h-[500px] bg-white -right-5 top-14 px-2 pt-6 animate__animated animate__bounce animate__fadeIn animate__faster`}>
            <MenuUser user={ user } onSignOut={ onSignOut }/>
        </div>
    </div>
  )
}
