import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { getSelectedAccount } from '@core/accounts'
import { getWallet } from '@core/wallet'

import TransactionPage from './transaction'

const mapStateToProps = createSelector(
  getSelectedAccount,
  getWallet,
  (account, wallet) => ({
    account,
    wallet
  })
)

export default connect(mapStateToProps)(TransactionPage)
