import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { walletActions, getWallet } from '@core/wallet'

import AccountsPage from './accounts'

const mapStateToProps = createSelector(getWallet, (wallet) => ({ wallet }))
const mapDispatchToProps = {
  addAccount: walletActions.addAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage)
