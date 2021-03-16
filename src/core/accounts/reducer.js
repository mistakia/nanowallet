import { Map, List } from 'immutable'

import { accountActions } from './actions'
import { createAccount } from './account'
import { blockActions } from '@core/blocks'

export function accountsReducer(state = new Map(), { payload, type }) {
  switch (type) {
    case accountActions.SET_ACCOUNTS:
      return state.withMutations((accounts) => {
        payload.accounts.forEach(acc => {
          accounts.set(acc.address, createAccount({
            ...acc,
            isPending: false,
            isLoaded: false
          }))
        })
      })

    case accountActions.GET_ACCOUNT_INFO_PENDING:
      return state.set(
        payload.opts.address,
        createAccount({ address: payload.opts.address })
      )

    case accountActions.GET_ACCOUNT_INFO_FAILED:
      return state.mergeIn([payload.opts.address], {
        isLoaded: true,
        isPending: false
      })

    case accountActions.GET_ACCOUNT_INFO_FULFILLED:
      return state.set(
        payload.opts.address,
        createAccount({
          address: payload.opts.address,
          isPending: false,
          isLoaded: true,
          ...payload.data
        })
      )

    case accountActions.GET_ACCOUNT_HISTORY_FULFILLED:
      return state.setIn(
        [payload.opts.address, 'blocks'],
        new List(payload.data.history.map((d) => d.hash))
      )

    case blockActions.SET_BLOCKS:
      return state.withMutations((accounts) => {
        for (const address of accounts.keys()) {
          const accountBlocks = payload.blocks.filter(b => b.block_account === address)
          if (accountBlocks.length) {
            const existing = state.getIn([address, 'blocks'], [])
            const blockHashes = accountBlocks.map(b => b.hash)
            const uniq = [...new Set([...existing, ...blockHashes])]
            accounts.setIn([address, 'blocks'], new List(uniq))
          }
        }
      })

    default:
      return state
  }
}
