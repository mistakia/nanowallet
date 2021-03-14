import { Map } from 'immutable'

import { accountActions } from './actions'
import { createAccount } from './account'

export function accountsReducer(state = new Map(), { payload, type }) {
  switch (type) {
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

    default:
      return state
  }
}