import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { walletActions, getWallet } from '@core/wallet'

import render from './create'

class CreatePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { confirmVisible: false }
  }

  componentDidUpdate() {
    if (this.state.confirmVisible && this.props.wallet.confirmed) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ confirmVisible: false })
    }
  }

  toggleConfirm = () => {
    this.setState({ confirmVisible: !this.state.confirmVisible })
  }

  cancelConfirm = () => {
    this.setState({ confirmVisible: false })
  }

  componentDidMount() {
    this.props.create()
  }

  render() {
    return render.call(this)
  }
}

const mapStateToProps = createSelector(getWallet, (wallet) => ({ wallet }))

const mapDispatchToProps = {
  create: walletActions.create,
  copy: walletActions.copy
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage)
