import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {

  const router = useRouter()

  // Manage user ===============================================

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    console.log("Major UseEffect running")

    if(localStorage.getItem('token')){
      setUser(localStorage)
    }

    if(user){
      console.log("Found user => ", user)
      setLoading(false)
    } else {
      console.log("User not found => ", user)
    }

  }, [])

  const logout = () => {
    localStorage.clear()
    setUser(null)
    router.push('/login')
  }

  // authentication ====================================================

  const exports = {
    user,
    setUser,
    logout
  }

  return (
    <AuthContext.Provider value={exports}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}