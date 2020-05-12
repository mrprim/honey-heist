import useMessages from './useMessages'

export default id => {
  const { src } = useMessages()
  return src[id]
}
