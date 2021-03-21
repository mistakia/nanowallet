import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Paragraph, Text } from 'react-native-paper'
import { BigNumber } from 'bignumber.js'
import moment from 'moment'

import constants from '@core/constants'
import { formatHash, getDifficultyMultiplier } from '@core/utils'

function blockType(block) {
  switch (block.blockType) {
    case constants.EPOCH_BLOCK:
      return 'Epoch'

    case constants.RECEIVE_BLOCK:
      return 'Receive'

    case constants.CHANGE_BLOCK:
      return 'Change'

    case constants.SEND_BLOCK:
      return 'Send'

    case constants.OPEN_BLOCK:
      return 'Open'
  }
}

function formatBalance(balanceRaw) {
  const balanceNano = new BigNumber(balanceRaw).shiftedBy(-30).toFixed(30, 1)
  const amount = new BigNumber(balanceNano)
  const amountFormatted = amount.toFormat()

  return amountFormatted
}

export default class TransactionDetailsPage extends React.Component {
  render() {
    const { block } = this.props
    const timestamp =
      block.local_timestamp && block.local_timestamp !== '0'
        ? moment(block.local_timestamp, 'X').format('MMM Do YYYY [at] hh:mm a')
        : ''

    return (
      <View style={styles.container}>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.text}>Confirmed</Text>
            <Text style={styles.text} />
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Type</Text>
            <Text style={styles.text}>{blockType(block)}</Text>
          </View>
          {Boolean(block.amount) && (
            <View style={styles.row}>
              <Text style={styles.text}>Amount</Text>
              <Text style={styles.text}>{formatBalance(block.amount)}</Text>
            </View>
          )}
          {Boolean(block.preview) && (
            <View style={styles.row}>
              <Text style={styles.text}>Previous</Text>
              <Text style={styles.text}>{formatHash(block.previous)}</Text>
            </View>
          )}
          <View style={styles.row}>
            <Text style={styles.text}>Height</Text>
            <Text style={styles.text}>{block.height}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Work</Text>
            <Text style={styles.text}>{block.work}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Difficulty Multiplier</Text>
            <Text style={styles.text}>
              {`${getDifficultyMultiplier({
                work: block.work,
                type: block.blockType,
                hash: block.hash
              })}x`}
            </Text>
          </View>
          {Boolean(timestamp) && (
            <View style={styles.row}>
              <Text style={styles.text}>Timestamp</Text>
              <Text style={styles.text}>{timestamp}</Text>
            </View>
          )}
        </View>
        <Button mode='text' onPress={this.props.handleCancel}>
          Close
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
    paddingBottom: 30,
    flexDirection: 'column'
  },
  table: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1
  },
  text: {
    color: 'rgba(0,0,0,0.7)'
  }
})
