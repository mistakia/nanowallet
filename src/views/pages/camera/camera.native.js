import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { IconButton } from 'react-native-paper'
import { Camera } from 'react-native-vision-camera'
import Snackbar from 'react-native-snackbar'

import { parseQr } from '@core/utils'

export default class CameraPage extends React.Component {
  lastCode = null
  state = {
    device: null
  }

  handleCodeScanned = (e) => {
    this.props.handleCancel()

    const item = e[0]
    if (item.code === this.lastCode) {
      return
    }
    this.lastCode = item.code

    const code = parseQr(item.code)
    if (code.type && code.type === 'SEND') {
      this.props.setQR(code)
    } else {
      Snackbar.show({
        text: 'Invalid QR Code',
        duration: Snackbar.LENGTH_SHORT
      })
    }
  }

  componentDidMount = async () => {
    const devices = await Camera.getAvailableCameraDevices()
    this.setState({ device: devices.find((d) => d.position === 'back') })
  }

  render() {
    if (!this.state.device) {
      return null
    }

    return (
      <View style={styles.container}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={this.state.device}
          isActive={true}
          scannableCodes={['qr']}
          onCodeScanned={this.handleCodeScanned}
        />
        <View style={styles.overlay}>
          <View style={styles.focus} />
          <IconButton
            icon='close'
            style={styles.close}
            size={30}
            color='white'
            onPress={this.props.handleCancel}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>Scan a Nano QR Code</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    backgroundColor: 'white',
    padding: 0,
    flex: 1
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  focus: {
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
    width: '75%',
    height: '30%'
  },
  close: {
    position: 'absolute',
    top: 45,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  descriptionContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    marginTop: 30
  },
  descriptionText: {
    color: 'white',
    fontWeight: '800'
  }
})
