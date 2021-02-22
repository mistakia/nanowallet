import { Record, List } from 'immutable'

import { walletActions } from './actions'

const initialState = new Record({
  seed: null,
  mnemonic: null,
  accounts: new List()
})

export function walletReducer(state = initialState(), { payload, type }) {
  switch (type) {
    case walletActions.SET_WALLET:
      const { seed, mnemonic, accounts } = payload
      return state.merge({
        seed,
        mnemonic,
        accounts: new List(accounts)
      })

    case walletActions.CLEAR_WALLET:
      return initialState()

    default:
      return state
  }
}
