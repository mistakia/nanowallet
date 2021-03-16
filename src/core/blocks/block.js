import { Record } from 'immutable'

export const Block = new Record({
  opened: null,
  source: null,
  destination: null,

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

export function createBlock(data = {}) {
  return new Block({
    opened: data.opened,
    source: data.source,
    destination: data.destination,

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
