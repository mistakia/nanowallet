import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { walletActions, getWallet } from '@core/wallet'
import { getSelectedAccount } from '@core/accounts'
import { getStats } from '@core/stats'

import App from './app'

const mapStateToProps = createSelector(
  getWallet,
  getSelectedAccount,
  getStats,
  (wallet, account, stats) => ({ wallet, account, stats })
)

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(walletActions.load()),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
