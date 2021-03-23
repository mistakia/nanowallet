import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { walletActions, getWallet } from '@core/wallet'
import { getSelectedAccount, getTotalBalance } from '@core/accounts'

import AccountsPage from './accounts'

const mapStateToProps = createSelector(
  getWallet,
  getTotalBalance,
  getSelectedAccount,
  (wallet, totalBalance, account) => ({ wallet, totalBalance, account })
)

const mapDispatchToProps = {
  addAccount: walletActions.addAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage)
