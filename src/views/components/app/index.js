import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { walletActions, getWallet } from '@core/wallet'
import { getSelectedAccount } from '@core/accounts'

import App from './app'

const mapStateToProps = createSelector(
  getWallet,
  getSelectedAccount,
  (wallet, account) => ({ wallet, account })
)

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(walletActions.load()),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
