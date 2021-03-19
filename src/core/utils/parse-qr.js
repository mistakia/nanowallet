import { Record } from 'immutable'
import queryString from 'query-string'

export const types = {
  SEND: 'SEND',
  CHANGE: 'CHANGE',
  KEY: 'KEY',
  SEED: 'SEED',
  BLOCK: 'BLOCK'
}

const Code = new Record({
  type: null,
  data: null,
  amount: null,
  label: null,
  message: null,
  lastIndex: null
})

function createCode({ type, data, amount, label, message, lastIndex } = {}) {
  return new Code({
    type,
    data,
    amount,
    label,
    message,
    lastIndex
  })
}

const getQueryString = (str) => queryString.parse(str.split('?')[1])
const addressRe = /nano_([a-z0-9]{60})/gi
const keyRe = /([0-9A-F]{64})/gi
const seedRe = /([0-9A-F]{64})/gi

export const parseQr = function (code) {
  if (!code) {
    return createCode()
  }

  if (code.slice(0, 5) === 'nano:') {
    const addr = code.match(addressRe)
    if (!addr) {
      return createCode()
    }

    const qs = getQueryString(code)
    return createCode({
      type: types.SEND,
      data: addr[0],
      ...qs
    })
  } else if (code.slice(0, 8) === 'nanorep:') {
    const addr = code.match(addressRe)
    if (!addr) {
      return createCode()
    }

    const qs = getQueryString(code)
    return createCode({
      type: types.CHANGE,
      data: addr[0],
      ...qs
    })
  } else if (code.slice(0, 8) === 'nanokey:') {
    const key = code.match(keyRe)
    if (!key) {
      return createCode()
    }

    const qs = getQueryString(code)
    return createCode({
      type: types.KEY,
      data: key[0],
      ...qs
    })
  } else if (code.slice(0, 9) === 'nanoseed:') {
    const seed = code.match(seedRe)
    if (!seed) {
      return createCode()
    }

    const qs = getQueryString(code)
    return createCode({
      type: types.SEED,
      data: seed[0],
      ...qs
    })
  } else if (code.slice(0, 10) === 'nanoblock:') {
    const block = code.split(':')[1]
    if (!block) {
      return createCode()
    }

    return createCode({
      type: types.BLOCK,
      data: block
    })
  }

  return createCode()
}
