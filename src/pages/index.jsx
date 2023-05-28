import { UdemyLayout } from '@/components/layouts/UdemyLayout';
import { AuthContext } from '@/context/AuthProvider'
import React, { useContext } from 'react'

const HomePage = () => {

  const { user, isLoggedIn } = useContext(AuthContext);

  return (
    <UdemyLayout>
      
    </UdemyLayout>
  )
}

export default HomePage