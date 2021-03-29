import { connect } from 'react-redux'

import { walletActions } from '@core/wallet'

import CameraPage from './camera'

const mapDispatchToProps = {
  setQR: walletActions.setQR
}

export default connect(null, mapDispatchToProps)(CameraPage)
