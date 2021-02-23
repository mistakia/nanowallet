import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { walletActions, getWallet } from '@core/wallet'

import App from './app'

const mapStateToProps = createSelector(getWallet, (wallet) => ({ wallet }))

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(walletActions.load()),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
