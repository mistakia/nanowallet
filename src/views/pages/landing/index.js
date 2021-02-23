import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { walletActions, getWallet } from '@core/wallet'

import LandingPage from './landing'

const mapStateToProps = createSelector(getWallet, (wallet) => ({ wallet }))
const mapDispatchToProps = { clear: walletActions.clear }

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
