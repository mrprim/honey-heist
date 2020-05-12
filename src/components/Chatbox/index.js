import React, { useCallback } from 'react'
import { useSubmit, AmiableForm } from 'amiable-forms'
import DecoratedInput from '../DecoratedInput'
import useMessages from '../../hooks/useMessages'
import * as messageTypes from '../../constants/messageTypes'

const ChatInput = () => {
  const { onSubmit } = useSubmit()

  const onKeyPress = useCallback(ev => {
    if (ev.key === 'Enter' && !ev.shiftKey) {
      onSubmit()
      ev.preventDefault()
    }
  }, [onSubmit])

  return (
    <DecoratedInput
      name='chat'
      label='Message'
      variant='outlined'
      multiline
      onKeyPress={onKeyPress}
    />
  )
}

export default () => {
  const { send } = useMessages()
  const process = useCallback((values, { clear }) => {
    if (!values.chat) return

    send(messageTypes.CHAT, { body: values.chat })
    clear()
  }, [send])

  return (
    <AmiableForm process={process}>
      <ChatInput />
    </AmiableForm>
  )
}
