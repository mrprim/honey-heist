import React from 'react'
import useMessage from '../../hooks/useMessage'
import * as messageTypes from '../../constants/messageTypes'
import ChatMessage from '../ChatMessage'
import RollMessage from '../RollMessage'
import './index.scss'

export default ({ id }) => {
  const message = useMessage(id)

  switch (message.type) {
    case messageTypes.CHAT: return <ChatMessage {...message} />
    case messageTypes.ROLL: return <RollMessage {...message} />
    default: return <div>{message.body}</div>
  }
}
