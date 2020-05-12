import { useEffect, useState } from 'react'
import { database } from '../../firebase'

export default () => {
  const [store, setStore] = useState({})

  useEffect(() => {
    const storeRef = database.ref('/')

    storeRef.on('value', snapshot => {
      setStore(snapshot.val())
    })

    return () => {
      storeRef.off()
    }
  }, [setStore])

  return {
    store,
    setStore
  }
}
