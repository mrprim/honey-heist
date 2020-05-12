export default obj => {
  if (!obj) return

  return Object.entries(obj).reduce((final, [k, v]) => {
    if (v) {
      final[k] = v
    }
    return final
  }, {})
}
