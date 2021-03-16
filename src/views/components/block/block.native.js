import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'

import constants from '@core/constants'
import { formatBalance } from '@core/utils'

function formatAddress(address) {
  const first = address.slice(0, 13)
  const last = address.slice(-8)
  return `${first} ... ${last}`
}

function blockType(block) {
  switch (block.blockType) {
    case constants.EPOCH_BLOCK:
      return <Text style={{ ...styles.type, ...styles.epoch }}>E</Text>

    case constants.RECEIVE_BLOCK:
      return <Text style={{ ...styles.type, ...styles.receive }}>R</Text>

    case constants.CHANGE_BLOCK:
      return <Text style={{ ...styles.type, ...styles.change }}>C</Text>

    case constants.SEND_BLOCK:
      return <Text style={{ ...styles.type, ...styles.send }}>S</Text>

    case constants.OPEN_BLOCK:
      return <Text style={{ ...styles.type, ...styles.receive }}>O</Text>
  }
}

function blockContentLabel(block) {
  switch (block.blockType) {
    case constants.EPOCH_BLOCK:
      return <Text style={styles.label}>Epoch</Text>

    case constants.OPEN_BLOCK:
    case constants.RECEIVE_BLOCK:
      return <Text style={styles.label}>From</Text>

    case constants.CHANGE_BLOCK:
      return <Text style={styles.label}>Change Representative</Text>

    case constants.SEND_BLOCK:
      return <Text style={styles.label}>To</Text>
  }
}

function blockContent(block) {
  switch (block.blockType) {
    case constants.EPOCH_BLOCK:
    case constants.OPEN_BLOCK:
    case constants.SEND_BLOCK:
    case constants.RECEIVE_BLOCK:
      return (
        <Text style={styles.address}>
          {block.account && formatAddress(block.account)}
        </Text>
      )

    case constants.CHANGE_BLOCK:
      return (
        <Text style={styles.address}>
          {block.representative && formatAddress(block.representative)}
        </Text>
      )
  }
}

export default function ({ block }) {
  console.log(block)
  const timestamp =
    block.local_timestamp && block.local_timestamp !== '0'
      ? moment(block.local_timestamp, 'X').format('MMM D YY [at] HH:mm')
      : ''
  const isSend = block.blockType === constants.SEND_BLOCK
  const isReceive =
    block.blockType === constants.RECEIVE_BLOCK ||
    block.blockType === constants.OPEN_BLOCK
  const isTransaction = isSend || isReceive
  const amountFormatted = formatBalance(block.amount)
  const amountStyle = isSend ? styles.sendAmount : styles.receiveAmount

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.body}>
        <View style={styles.header}>
          {blockType(block)}
          <Text style={styles.timestamp}>{timestamp}</Text>
          {isTransaction && (
            <Text style={{ ...styles.amount, ...amountStyle }}>
              <Text>{isSend ? '-' : '+'}</Text>
              <Text>{amountFormatted}</Text>
            </Text>
          )}
        </View>

        <View>
          {blockContentLabel(block)}
          {blockContent(block)}
        </View>
      </View>
    </View>
  )
}

const borderColor = '#F0F0F0'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    paddingBottom: 10
  },
  line: {
    position: 'absolute',
    left: 33,
    top: 0,
    bottom: 0,
    borderLeftWidth: 2,
    borderColor: borderColor
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  body: {
    borderColor: borderColor,
    borderWidth: 2,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4
  },
  type: {
    fontWeight: '500',
    borderWidth: 2,
    borderRadius: 15,
    paddingTop: 2,
    fontSize: 15,
    width: 28,
    height: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'white',
    zIndex: 10
  },
  timestamp: {
    flex: 1,
    paddingLeft: 5,
    fontSize: 11,
    color: 'rgba(0,0,0,0.6)'
  },
  send: {
    borderColor: constants.red
  },
  receive: {
    borderColor: constants.green
  },
  epoch: {
    borderColor: constants.grey
  },
  change: {
    borderColor: constants.purple
  },
  amount: {
    fontWeight: '800'
  },
  sendAmount: {
    color: constants.red
  },
  receiveAmount: {
    color: constants.green
  },
  label: {
    fontSize: 11,
    fontWeight: '800'
  },
  address: {
    fontFamily: 'Courier',
    fontVariant: ['tabular-nums']
  }
})
