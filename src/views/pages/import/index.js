import React from 'react'
import { connect } from 'react-redux'

import { walletActions } from '@core/wallet'
import { validateSeed } from '@core/utils'

import render from './import'

class ImportPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { text: '', invalid: false }
    this.inputRef = React.createRef()
  }

  setText = (t) => {
    const text = t.toLowerCase()
    const type = validateSeed(text)
    this.setState({ text, invalid: !type })
  }

  submit = () => {
    if (this.state.invalid) {
      return
    }
    this.props.import(this.state.text)
  }

  componentDidMount() {
    this.inputRef.current.focus()
  }

  render() {
    return render.call(this)
  }
}

const mapDispatchToProps = { import: walletActions.importFromSeed }

export default connect(null, mapDispatchToProps)(ImportPage)
