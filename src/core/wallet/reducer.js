import { Record, List } from 'immutable'

import { walletActions } from './actions'

const initialState = new Record({
  seed: null,
  mnemonic: null,
  accounts: new List(),
  selected: null,
  confirmed: false,
  sendAddress: null,
  sendAmount: null,
  qr: null
})

export const mergeAccounts = (list, collection) => {
  let accounts = list.toJS()
  const newAccounts = collection.filter((a) => {
    const exists = accounts.find((x) => x.accountIndex === a.accountIndex)
    return !exists
  })

  return newAccounts.length ? new List(accounts.concat(newAccounts)) : list
}

export function walletReducer(state = initialState(), { payload, type }) {
  switch (type) {
    case walletActions.SET_WALLET:
      const { seed, mnemonic, accounts } = payload
      return state.merge({
        seed,
        mnemonic,
        accounts: new List(accounts),
        selected: accounts[0].address
      })

    case walletActions.CONFIRM_WALLET:
      return state.merge({ confirmed: true })

    case walletActions.EXIT_WALLET:
      return initialState()

    case walletActions.SET_WALLET_ACCOUNTS:
      return state.merge({
        accounts: mergeAccounts(state.accounts, payload)
      })

    case walletActions.SET_QR:
      return state.withMutations((s) => {
        s.merge({ qr: payload.code })

        if (payload.code.type === 'SEND') {
          s.merge({
            sendAmount: payload.code.amount,
            sendAddress: payload.code.data
          })
        }
      })

    default:
      return state
  }
}
