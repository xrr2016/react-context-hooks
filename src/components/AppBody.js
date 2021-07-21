import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const AppBoy = () => {
  const authContext = useContext(AuthContext)

  return (
    <div
      style={{
        backgroundColor: authContext.isAuthenticated ? 'grey' : 'white',
      }}
    >
      <h1>
        Hello, {authContext.isAuthenticated ? authContext.user.name : 'World'}
      </h1>
    </div>
  )
}

export default AppBoy
