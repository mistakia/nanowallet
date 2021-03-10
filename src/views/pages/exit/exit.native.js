import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Paragraph } from 'react-native-paper'

import constants from '@core/constants'

export default class ExitPage extends React.Component {
  onExit = () => {
    this.props.exit()
    this.props.handleCancel()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Paragraph style={styles.text}>
            Exiting will remove your seed from this device. With your seed, you
            can always reload your account on this application or on any other
            wallet for nano.
          </Paragraph>
          <Paragraph style={{ ...styles.text, ...styles.warning }}>
            If your seed is not backed up, you will permanently lose access to
            your funds.
          </Paragraph>
          <Button
            mode='outlined'
            onPress={this.props.handleCancel}
            style={styles.cancel}>
            Cancel
          </Button>
        </View>
        <View>
          <Button
            mode='contained'
            icon='alert'
            onPress={this.onExit}
            style={styles.exitAction}>
            Remove Seed and Exit Wallet
          </Button>
        </View>
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
    paddingBottom: 30,
    flexDirection: 'column'
  },
  textContainer: {
    flex: 1
  },
  text: {
    fontSize: 14,
    letterSpacing: 1.2,
    fontWeight: '400'
  },
  warning: {
    color: constants.red,
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 10
  },
  cancel: {
    marginTop: 40
  },
  exitAction: {
    backgroundColor: constants.red
  }
})
