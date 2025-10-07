import React, { createContext, useState, useEffect } from 'react'
import { getToken, setToken, removeToken } from '../services/storageService'

export const AuthContext = createContext(null)

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [token, setTokenState] = useState(getToken())

  useEffect(()=>{
    if(token){
      // fetch user profile or decode token
    }
  }, [token])

  function login(token){
    setToken(token)
    setTokenState(token)
  }

  function logout(){
    removeToken()
    setUser(null)
    setTokenState(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
