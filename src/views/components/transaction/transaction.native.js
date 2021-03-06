import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import { BigNumber } from 'bignumber.js'

export default function ({ transaction }) {
  const timestamp = moment(transaction.local_timestamp, 'X')
  const isSend = transaction.type === 'send'
  const amount = new BigNumber(transaction.amount_decimal)
  const amountFormatted = amount.isLessThan(1)
    ? amount.toFixed(6)
    : amount.toFormat(2)
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
          <Text>{transaction.account}</Text>
        </View>
      </View>
    </View>
  )
}

const borderColor = '#CCC'

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
    borderColor: 'red'
  },
  receive: {
    borderColor: 'green'
  },
  amount: {
    fontWeight: '800'
  },
  sendAmount: {
    color: 'red'
  },
  receiveAmount: {
    color: 'green'
  },
  label: {
    fontSize: 11,
    fontWeight: '800'
  }
})
