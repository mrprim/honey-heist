import { useContext } from 'react'
import { Context } from '../components/Context'

export default () => {
  const { user } = useContext(Context)

  return { user }
}
