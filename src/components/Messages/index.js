import React from 'react'
import useMessages from '../../hooks/useMessages'
import Message from '../Message'

export default () => {
  const { messages, deleteAll } = useMessages()

  return (
    <div>
      <button onClick={() => { deleteAll() }}>CLEAR</button>
      {messages.map(({ id }) => <Message key={id} id={id} />)}
    </div>
  )
}
