import { BigNumber } from 'bignumber.js'

export const formatBalance = function (balanceRaw) {
  const balanceNano = new BigNumber(balanceRaw).shiftedBy(-30).toFixed(30, 1)
  const amount = new BigNumber(balanceNano)
  const amountFormatted = amount.isLessThan(1)
    ? amount.toFixed(6)
    : amount.toFormat(2)

  return amountFormatted
}
