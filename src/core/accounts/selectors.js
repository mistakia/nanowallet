import { createSelector } from 'reselect'

import { getWallet } from '@core/wallet'
import { createAccount } from './account'

export function getAccounts(state) {
  return state.get('accounts')
}

export const getSelectedAccount = createSelector(
  getAccounts,
  getWallet,
  (accounts, wallet) => accounts.get(wallet.selected) || createAccount()
)
