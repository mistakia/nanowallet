import { connect } from 'react-redux'

import { walletActions } from '@core/wallet'

import ExitPage from './exit'

const mapDispatchToProps = {
  exit: walletActions.exit
}

export default connect(null, mapDispatchToProps)(ExitPage)
