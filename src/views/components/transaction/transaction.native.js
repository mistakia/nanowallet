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

export default function ({ transaction }) {
  const timestamp = moment(transaction.local_timestamp, 'X')
  const isSend = transaction.type === 'send' || transaction.subtype === 'send'
  const amountFormatted = formatBalance(transaction.amount)
  const amountStyle = isSend ? styles.sendAmount : styles.receiveAmount

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.body}>
        <View style={styles.header}>
          {isSend ? (
            <Text style={{ ...styles.type, ...styles.send }}>S</Text>
          ) : (
            <Text style={{ ...styles.type, ...styles.receive }}>R</Text>
          )}
          <Text style={styles.timestamp}>
            {timestamp.format('MMM D YY [at] HH:mm')}
          </Text>
          <Text style={{ ...styles.amount, ...amountStyle }}>
            <Text>{isSend ? '-' : '+'}</Text>
            <Text>{amountFormatted}</Text>
          </Text>
        </View>

        <View>
          <Text style={styles.label}>{isSend ? 'To' : 'From'}</Text>
          <Text style={styles.address}>
            {transaction.account && formatAddress(transaction.account)}
          </Text>
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
