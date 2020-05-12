import React, { useContext } from 'react'
import { Context } from '../Context'

export default () => {
  const data = useContext(Context)

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
