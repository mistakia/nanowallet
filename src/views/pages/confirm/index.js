import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { getWallet, walletActions } from '@core/wallet'

import render from './confirm'

class ConfirmPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { text: '', invalid: false }
    this.inputRef = React.createRef()
  }

  setText = (t) => {
    const text = t.toLowerCase()
    const invalid = !this.props.wallet.seed.startsWith(text)
    this.setState({ text, invalid })

    if (this.props.wallet.seed === text) {
      this.props.confirm()
    }
  }

  componentDidMount() {
    this.inputRef.current.focus()
  }

  render() {
    return render.call(this)
  }
}

const mapStateToProps = createSelector(getWallet, (wallet) => ({ wallet }))
const mapDispatchToProps = { confirm: walletActions.confirm }

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPage)
