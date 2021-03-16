import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { getSelectedAccount } from '@core/accounts'

import TransactionPage from './transaction'

const mapStateToProps = createSelector(getSelectedAccount, (account) => ({
  account
}))

export default connect(mapStateToProps)(TransactionPage)
