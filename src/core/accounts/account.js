import { Record, List } from 'immutable'

export const Account = new Record({
  isLoaded: false,
  isPending: true,
  address: null,
  balance: 0,
  blockCount: null,
  representative: null,
  pending: null,
  confirmationHeight: null,
  frontier: null,
  openBlock: null,
  representativeBlock: null,
  blocks: new List()
})

export function createAccount(data = {}) {
  return new Account({
    address: data.address,
    isLoaded: data.isLoaded,
    isPending: data.isPending,
    balance: data.balance,
    blockCount: data.block_count,
    representative: data.representative,
    pending: data.pending,
    confirmationHeight: data.confirmation_height,
    frontier: data.frontier,
    openBlock: data.open_block,
    representativeBlock: data.representative_block
  })
}
