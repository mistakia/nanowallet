export function byteArrayToHex(byteArray) {
  if (!byteArray) {
    return ''
  }

  let hexStr = ''
  for (let i = 0; i < byteArray.length; i++) {
    let hex = (byteArray[i] & 0xff).toString(16)
    hex = hex.length === 1 ? `0${hex}` : hex
    hexStr += hex
  }

  return hexStr.toUpperCase()
}
