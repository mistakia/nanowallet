import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { walletActions, getWallet } from '@core/wallet'

import App from './app'

const mapStateToProps = createSelector(
  getWallet,
  (wallet) => ({ wallet })
)

const mapDispatchToProps = {
  load: walletActions.load
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
