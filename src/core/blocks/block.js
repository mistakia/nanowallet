import { Record } from 'immutable'

import constants from '@core/constants'

export const Block = new Record({
  opened: null,
  source: null,
  destination: null,

  blockType: null,

  type: null,
  subtype: null,
  account: null,
  amount: null,
  local_timestamp: null,
  height: null,
  hash: null,
  balance: null,
  representative: null,
  link: null,
  previous: null,
  work: null,
  signature: null,

  block_account: null
})

const getBlockType = (data) => {
  switch (data.subtype || data.type) {
    case 'epoch':
      return constants.EPOCH_BLOCK

    case 'send':
      return constants.SEND_BLOCK

    case 'receive':
      return constants.RECEIVE_BLOCK

    case 'open':
      return constants.OPEN_BLOCK

    case 'change':
      return constants.CHANGE_BLOCK
  }
}

export function createBlock(data = {}) {
  return new Block({
    opened: data.opened,
    source: data.source,
    destination: data.destination,

    blockType: getBlockType(data),

    type: data.type,
    subtype: data.subtype,
    account: data.account,
    amount: data.amount,
    local_timestamp: data.local_timestamp,
    height: data.height,
    hash: data.hash,
    balance: data.balance,
    representative: data.representative,
    link: data.link,
    previous: data.previous,
    work: data.work,
    signature: data.signature,

    block_account: data.block_account
  })
}
