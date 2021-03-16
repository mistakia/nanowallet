import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { getSelectedAccount } from '@core/accounts'

import ReceivePage from './receive'

const mapStateToProps = createSelector(getSelectedAccount, (account) => ({
  account
}))

export default connect(mapStateToProps)(ReceivePage)
