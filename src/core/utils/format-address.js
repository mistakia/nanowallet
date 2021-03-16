export const formatAddress = function (address) {
  const first = address.slice(0, 13)
  const last = address.slice(-8)
  return `${first} ... ${last}`
}
