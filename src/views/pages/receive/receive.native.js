import React from 'react'
import { View, StyleSheet, Text, Share } from 'react-native'
import { BigNumber } from 'bignumber.js'
import { Button } from 'react-native-paper'
import QRCode from 'react-native-qrcode-svg'
import ClipboardPlus from 'react-native-clipboard-plus'

import constants from '@core/constants'
import { formatAddress } from '@core/utils'

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default class ReceivePage extends React.Component {
  state = {
    copied: false
  }

  paste = async () => {
    const pasteResult = await ClipboardPlus.paste()
    console.log(pasteResult)
  }

  copy = async () => {
    const { account } = this.props
    await ClipboardPlus.copyText(account.address)
    this.setState({ copied: true })
    await wait(1000)
    this.setState({ copied: false })
  }

  share = async () => {
    await Share.share({ message: this.props.account.address })
  }

  render() {
    const { account, amount } = this.props
    const amountRaw = new BigNumber(amount || 0).shiftedBy(30).toFixed(0)
    const code = `nano:${account.address}?amount=${amountRaw}`

    return (
      <View style={styles.container}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{formatAddress(account.address)}</Text>
        </View>
        <View style={styles.qrContainer}>
          <QRCode
            enableLinearGradient={true}
            size={200}
            linearGradient={['rgb(0,65,31)', constants.green]}
            value={code}
          />
        </View>
        {this.state.copied ? (
          <Button mode='outlined'>Copied</Button>
        ) : (
          <Button mode='contained' onPress={this.copy}>
            Copy
          </Button>
        )}
        <Button mode='text' onPress={this.share} style={{ marginTop: 16 }}>
          Share
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    flexDirection: 'column'
  },
  qrContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  address: {
    fontFamily: 'Menlo',
    letterSpacing: 3,
    fontVariant: ['tabular-nums'],
    fontSize: 14
  }
})
