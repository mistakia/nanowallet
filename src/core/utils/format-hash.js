export const formatHash = function (hash) {
  const first = hash.slice(0, 8)
  const last = hash.slice(-8)
  return `${first} ... ${last}`
}
