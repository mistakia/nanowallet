import React, { PureComponent } from 'react'
import * as Animatable from 'react-native-animatable'
import { View, Text, StyleSheet } from 'react-native'
import { Button, TouchableRipple, IconButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { BigNumber } from 'bignumber.js'
import Modal from 'react-native-modal'
import { Camera } from 'react-native-vision-camera'

import Logo from '@components/logo'
import constants from '@core/constants'
import Receive from '@pages/receive'
import Send from '@pages/send'
import CameraPage from '@pages/camera'

export class KeyboardButton extends PureComponent {
  ref = null

  state = {
    fontSize: 24
  }
  handleRef = (ref) => (this.ref = ref)

  handlePress = () => {
    if (this.ref && this.props.onPress) {
      this.setState({ fontSize: 40 })
      this.ref.pulse(400)
      this.props.onPress()
    }
  }

  handleTransitionEnd = () => {
    this.setState({ fontSize: 24 })
  }

  render() {
    const { fontSize } = this.state
    return (
      <Animatable.View ref={this.handleRef} style={styles.keyboardButton}>
        <Button
          mode='text'
          onPress={this.handlePress}
          style={{ flex: 1 }}
          contentStyle={{ height: '100%', width: '100%' }}>
          {this.props.text ? (
            <Animatable.Text
              transition='fontSize'
              duration={100}
              style={{ ...styles.keyboardButtonText, fontSize }}
              onTransitionEnd={this.handleTransitionEnd}>
              {this.props.text}
            </Animatable.Text>
          ) : (
            this.props.children
          )}
        </Button>
      </Animatable.View>
    )
  }
}

export default class TransactionPage extends React.Component {
  state = {
    amount: [0],
    receiveVisible: false,
    sendVisible: false,
    cameraVisible: false
  }

  handleViewRef = (ref) => (this.view = ref)

  isEmpty = () => this.state.amount.length === 1 && this.state.amount[0] === 0

  setBalance = (amount) => {
    const { account } = this.props
    const bal = amount.join('')
    const bn = new BigNumber(bal)
    const balanceRaw = bn.shiftedBy(30)
    if (balanceRaw.isGreaterThan(account.balance)) {
      return this.view.shake(200)
    }

    this.setState({ amount })
  }

  addAmount = (num) => {
    if (this.isEmpty()) {
      const amount = [num]
      return this.setBalance(amount)
    }

    const amount = [...this.state.amount, num]
    this.setBalance(amount)
  }

  addDecimal = () => {
    if (this.state.amount.includes('.')) {
      return this.view.shake(200)
    }

    const amount = [...this.state.amount, '.']
    this.setBalance(amount)
  }

  removeAmount = () => {
    const arr = this.state.amount.slice(0, -1)

    if (!arr.length) {
      this.view.shake(200)
      return this.setState({ amount: [0] })
    }

    this.setState({ amount: arr })
  }

  showReceive = () => {
    this.setState({ receiveVisible: true })
  }

  cancelReceive = () => {
    this.setState({ receiveVisible: false })
  }

  showSend = () => {
    if (this.isEmpty()) {
      return this.view.shake()
    }
    this.setState({ sendVisible: true })
  }

  cancelSend = () => {
    this.setState({ sendVisible: false })
  }

  showCamera = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus()
    console.log(cameraPermission)
    const permission = await Camera.requestCameraPermission()
    this.setState({ cameraVisible: true })
  }

  cancelCamera = () => {
    this.setState({ cameraVisible: false })
  }

  render() {
    let fontSize = 60
    const length = this.state.amount.length
    if (length > 2) {
      let t = length / 30
      const ease = --t * t * t + 1
      fontSize = 60 - ease * 40
    }

    return (
      <>
        <View style={styles.container}>
          <View>
            <IconButton
              size={36}
              color='white'
              icon='crop-free'
              onPress={this.showCamera}
            />
          </View>
          <Animatable.View
            ref={this.handleViewRef}
            style={styles.amountContainer}>
            <Logo color='white' size={80} />
            {this.state.amount.map((a, i) => (
              <Animatable.Text
                key={i}
                style={{ ...styles.amountText, fontSize }}
                animation='fadeInDown'
                duration={200}>
                {a}
              </Animatable.Text>
            ))}
          </Animatable.View>
          <View style={styles.keyboardContainer}>
            <View style={styles.keyboardRow}>
              <KeyboardButton onPress={() => this.addAmount(1)} text={1} />
              <KeyboardButton onPress={() => this.addAmount(2)} text={2} />
              <KeyboardButton onPress={() => this.addAmount(3)} text={3} />
            </View>
            <View style={styles.keyboardRow}>
              <KeyboardButton onPress={() => this.addAmount(4)} text={4} />
              <KeyboardButton onPress={() => this.addAmount(5)} text={5} />
              <KeyboardButton onPress={() => this.addAmount(6)} text={6} />
            </View>
            <View style={styles.keyboardRow}>
              <KeyboardButton onPress={() => this.addAmount(7)} text={7} />
              <KeyboardButton onPress={() => this.addAmount(8)} text={8} />
              <KeyboardButton onPress={() => this.addAmount(9)} text={9} />
            </View>
            <View style={styles.keyboardRow}>
              <KeyboardButton onPress={this.addDecimal} text='.' />
              <KeyboardButton onPress={() => this.addAmount(0)} text='0' />
              <KeyboardButton onPress={this.removeAmount}>
                <Icon name='chevron-left' size={30} color='white' />
              </KeyboardButton>
            </View>
          </View>
          <View style={styles.actions}>
            <TouchableRipple
              onPress={this.showReceive}
              rippleColor='rgba(0, 0, 0, .32)'
              style={styles.action}>
              <Text style={styles.actionText}>Receive</Text>
            </TouchableRipple>
            <TouchableRipple
              onPress={this.showSend}
              rippleColor='rgba(0, 0, 0, .32)'
              style={styles.action}>
              <Text style={styles.actionText}>Send</Text>
            </TouchableRipple>
          </View>
        </View>
        <Modal
          isVisible={this.state.receiveVisible}
          backdropColor='black'
          swipeDirection='down'
          style={{ margin: 0 }}
          onBackdropPress={this.cancelReceive}
          onSwipeComplete={this.cancelReceive}>
          <Receive
            handleCancel={this.cancelReceive}
            amount={this.state.amount.join('')}
          />
        </Modal>
        <Modal
          isVisible={this.state.sendVisible}
          backdropColor='black'
          swipeDirection='down'
          style={{ margin: 0 }}
          avoidKeyboard={true}
          onBackdropPress={this.cancelSend}
          onSwipeComplete={this.cancelSend}>
          <Send
            handleCancel={this.cancelSend}
            amount={this.state.amount.join('')}
          />
        </Modal>
        <Modal
          isVisible={this.state.cameraVisible}
          backdropColor='black'
          swipeDirection='down'
          style={{ margin: 0 }}
          onBackdropPress={this.cancelCamera}
          onSwipeComplete={this.cancelCamera}>
          <CameraPage handleCancel={this.cancelCamera} />
        </Modal>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    backgroundColor: constants.green,
    flex: 1,
    flexDirection: 'column'
  },
  amountContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  amountView: {
    flexDirection: 'row'
  },
  amountText: {
    color: 'white',
    fontWeight: '800'
  },
  keyboardContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  keyboardRow: {
    flex: 1,
    flexDirection: 'row'
  },
  keyboardButton: {
    flex: 1
  },
  keyboardButtonText: {
    flex: 1,
    color: 'white',
    fontSize: 24,
    fontWeight: '700'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  action: {
    flex: 1,
    margin: 15,
    marginBottom: 30,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 99
  },
  actionText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  }
})
