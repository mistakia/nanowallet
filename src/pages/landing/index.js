import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { walletActions } from '@core/wallet'

import LandingPage from './landing'

const mapDispatchToProps = { clear: walletActions.clear }

export default connect(null, mapDispatchToProps)(LandingPage)
