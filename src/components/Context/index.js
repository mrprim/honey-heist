import React from 'react'
import useLoadFirebaseDb from './useLoadFirebaseDb'
import useLoadLoggedInUser from './useLoadLoggedInUser'

export const Context = React.createContext({})

export default ({ children }) => {
  const { user, setUser } = useLoadLoggedInUser()
  const { store, setStore } = useLoadFirebaseDb()

  return (
    <Context.Provider value={{ store, setStore, user, setUser }}>
      {children}
    </Context.Provider>
  )
}
