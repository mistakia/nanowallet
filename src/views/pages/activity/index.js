import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { getBlocksForSelectedAccount } from '@core/accounts'

import ActivityPage from './activity'

const mapStateToProps = createSelector(
  getBlocksForSelectedAccount,
  (blocks) => ({ blocks })
)

export default connect(mapStateToProps)(ActivityPage)
