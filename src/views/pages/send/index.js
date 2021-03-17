import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { getSelectedAccount } from '@core/accounts'

import render from './send'

class SendPage extends React.Component {
  state = {
    text: '',
    invalid: false
  }

  handleRef = (ref) => (this.ref = ref)

  clear = () => {
    this.setState({ text: '' })
  }

  setText = (t) => {
    const text = t.toLowerCase()
    this.setState({ text })
  }

  submit = () => {
    if (this.state.invalid) {
      return
    }
  }

  componentDidMount() {
    console.log(this.ref)
    this.ref.focus()
  }

  render() {
    return render.call(this)
  }
}

const mapStateToProps = createSelector(getSelectedAccount, (account) => ({
  account
}))

export default connect(mapStateToProps)(SendPage)
