import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { walletActions, getWallet } from '@core/wallet'

import render from './create'

class CreatePage extends React.Component {
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
