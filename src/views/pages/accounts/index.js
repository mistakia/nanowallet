import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { walletActions, getWallet } from '@core/wallet'
import { getSelectedAccount } from '@core/accounts'

import AccountsPage from './accounts'

const mapStateToProps = createSelector(
  getWallet,
  getSelectedAccount,
  (wallet, account) => ({ wallet, account })
)

const mapDispatchToProps = {
  addAccount: walletActions.addAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage)
