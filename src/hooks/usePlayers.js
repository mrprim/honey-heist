import { useContext } from 'react'
import { Context } from '../components/Context'

export default () => {
  const { store } = useContext(Context)

  return store
}
