import { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import setDbUser from '../../async/setUser'

export default () => {
  const [user, setUser] = useState()
  useEffect(() => {
    auth.onAuthStateChanged(u => {
      if (u) {
        setDbUser(u)
      }
      setUser(u)
    })
  }, [setUser])

  return {
    user,
    setUser
  }
}
