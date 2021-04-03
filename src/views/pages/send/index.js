import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { AppState, Linking, Keyboard } from 'react-native'
import { Camera } from 'react-native-vision-camera'
import Snackbar from 'react-native-snackbar'
import ClipboardPlus from 'react-native-clipboard-plus'
import { tools } from 'nanocurrency-web'

import { getSelectedAccount } from '@core/accounts'
import { walletActions, getWallet } from '@core/wallet'

import render from './send'

class SendPage extends React.Component {
  state = {
    appState: '',
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

  checkClipboard = async () => {
    const { string } = await ClipboardPlus.paste()
    const isValid = tools.validateAddress(string)
    if (isValid) {
      this.setState({ text: string })
    }
  }

  submit = () => {
    if (this.state.invalid) {
      return
    }

    this.props.setSend({
      sendAmount: this.props.amount,
      sendAddress: this.state.text
    })
    this.props.handleCancel()
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

  handleAppStateChange = (nextAppState) => {
    //the app from background to front
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      this.checkClipboard()
    }
    this.setState({ appState: nextAppState })
  }

  async componentDidMount() {
    this.ref.focus()

    this.checkClipboard()
    AppState.addEventListener('change', this.handleAppStateChange)
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
