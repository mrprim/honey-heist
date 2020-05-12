import { useContext, useMemo } from 'react'
import { Context } from '../components/Context'
import sendMessage from '../async/sendMessage'
import deleteAllMessages from '../async/deleteAllMessages'

const sortMessages = src =>
  Object.entries(src)
    .map(([key, val]) => ({ id: key, ...val }))
    .sort((a, b) => a.created < b.created ? 1 : -1)

export default () => {
  const { store } = useContext(Context)
  const src = store.messages || {}

  const messages = useMemo(() => sortMessages(src), [src])

  return {
    src,
    messages,
    send: sendMessage,
    deleteAll: deleteAllMessages
  }
}
