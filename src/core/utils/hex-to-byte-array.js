export function hexToByteArray(hex) {
  if (!hex) {
    return new Uint8Array()
  }

  const a = []
  for (let i = 0; i < hex.length; i += 2) {
    a.push(parseInt(hex.substr(i, 2), 16))
  }

  return new Uint8Array(a)
}
