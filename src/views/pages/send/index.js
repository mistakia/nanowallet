import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { Linking, Keyboard } from 'react-native'
import { Camera } from 'react-native-vision-camera'
import Snackbar from 'react-native-snackbar'

import { getSelectedAccount } from '@core/accounts'
import { walletActions, getWallet } from '@core/wallet'

import render from './send'

class SendPage extends React.Component {
  state = {
    text: '',
    address: null,
    invalid: false,
    cameraVisible: false
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

    const block = {
      amount: this.props.amount,
      to: this.state.text
    }
  }

  showCamera = async () => {
    const permission = await Camera.requestCameraPermission()
    if (permission === 'denied') {
      Keyboard.dismiss()
      Snackbar.show({
        text: 'Enable camera permissions in settings',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'Settings',
          textColor: 'green',
          onPress: () => {
            Linking.openSettings()
            Snackbar.dismiss()
          }
        }
      })
      return
    }
    this.setState({ cameraVisible: true })
  }

  cancelCamera = () => {
    this.setState({ cameraVisible: false })
  }

  componentDidMount() {
    this.ref.focus()
  }

  componentWillReceiveProps(nextProps) {
    const { sendAddress, sendAmount } = nextProps.wallet
    if (sendAddress && sendAmount) {
      this.props.handleCancel()
    }
  }

  render() {
    return render.call(this)
  }
}

const mapStateToProps = createSelector(
  getSelectedAccount,
  getWallet,
  (account, wallet) => ({
    account,
    wallet
  })
)

const mapDispatchToProps = {
  setSend: walletActions.setSend
}

export default connect(mapStateToProps, mapDispatchToProps)(SendPage)
