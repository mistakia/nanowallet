import { blake2bFinal, blake2bInit, blake2bUpdate } from 'blakejs'
import BigNumber from 'bignumber.js'
import { byteArrayToHex } from './byte-array-to-hex'
import { hexToByteArray } from './hex-to-byte-array'

import constants from '@core/constants'

const getBaseDifficulty = (type) => {
  switch (type) {
    case constants.RECEIVE_BLOCK:
    case constants.EPOCH_BLOCK:
    case constants.OPEN_BLOCK:
      return '0xfffffe0000000000'

    case constants.SEND_BLOCK:
    case constants.CHANGE_BLOCK:
      return '0xfffffff800000000'

    default:
      return '0xfffffff800000000'
  }
}

export const getDifficultyMultiplier = ({ work, type, hash }) => {
  const hashBytes = hexToByteArray(hash)
  const workBytes = hexToByteArray(work).reverse()

  const context = blake2bInit(8)
  blake2bUpdate(context, workBytes)
  blake2bUpdate(context, hashBytes)
  const output = blake2bFinal(context).reverse()
  const outputHex = byteArrayToHex(output)

  const outputBigNumber = new BigNumber(`0x${outputHex}`)
  const baseBigNumber = new BigNumber(getBaseDifficulty(type))

  return baseBigNumber.dividedBy(outputBigNumber).toFormat(2)
}
