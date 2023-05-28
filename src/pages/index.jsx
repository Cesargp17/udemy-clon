import { AuthContext } from '@/context/AuthProvider'
import React, { useContext } from 'react'

const HomePage = () => {

  const { user, isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {
        isLoggedIn
        ? <div>
          { user?.name } { user?.email }
        </div>
        : <h2>No autenticado</h2>
      }
    </div>
  )
}

export default HomePage