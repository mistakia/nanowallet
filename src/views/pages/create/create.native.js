import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IconButton, Headline, Button } from 'react-native-paper'
import Modal from 'react-native-modal'

import Confirm from '@pages/confirm'

export default function () {
  const { wallet, handleCancel } = this.props
  const first = wallet.seed && wallet.seed.slice(0, 8)
  const middle = wallet.seed ? wallet.seed.slice(8, -8).match(/.{1,8}/g) : []
  const last = wallet.seed && wallet.seed.slice(-8)
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconButton icon='close' size={36} onPress={handleCancel} />
        </View>
        <View style={styles.body}>
          <View style={styles.seedDescription}>
            <Headline>Seed</Headline>
            <Text>This provides access to your accounts</Text>
            <Text>It can not be recovered if lost</Text>
          </View>
          <View style={styles.seedContainer}>
            <Text style={{ ...styles.seedText, ...styles.highlight }}>
              {first}
            </Text>
            {middle.map((t, i) => (
              <Text style={styles.seedText} key={i}>
                {t}
              </Text>
            ))}
            <Text style={{ ...styles.seedText, ...styles.highlight }}>
              {last}
            </Text>
          </View>
          <Button mode='text' onPress={this.props.copy}>
            Copy
          </Button>
        </View>
        <View style={styles.footer}>
          <IconButton
            icon='arrow-right'
            size={36}
            onPress={this.toggleConfirm}
          />
        </View>
      </View>
      <Modal
        isVisible={this.state.confirmVisible}
        backdropColor='white'
        swipeDirection='right'
        onSwipeComplete={this.cancelConfirm}
        animationIn='slideInRight'
        animationOut='slideOutRight'>
        <Confirm handleCancel={this.cancelConfirm} />
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingTop: 16
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  seedContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15
  },
  seedText: {
    padding: 5,
    fontSize: 20,
    fontFamily: 'Courier',
    letterSpacing: 3,
    fontVariant: ['tabular-nums']
  },
  seedDescription: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 32
  },
  highlight: {
    color: 'blue'
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 16
  },
  confirmation: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center'
  }
})
