import constants from '@core/constants'

export const validateSeed = function (seed) {
  if (/[a-zA-Z0-9]{64}/gi.test(seed)) {
    return constants.SEED_BLAKE2B
  }

  if (/[a-z0-9]{64}/gi.test(seed)) {
    return constants.SEED_BIP39
  }

  return null
}
