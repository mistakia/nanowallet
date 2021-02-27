import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import constants from '@core/constants'

function formatAddress(address) {
  const start = address.slice(0, 11)
  const end = address.slice(-6)
  return `${start}...${end}`
}

export default class AccountItem extends React.Component {
  render() {
    const { account, selected } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.hashiconContainer} />
        <View style={styles.body}>
          <Text style={styles.alias}>
            {`Account ${account.accountIndex + 1}`}
          </Text>
          <Text style={styles.address}>{formatAddress(account.address)}</Text>
        </View>
        <View style={styles.selectedContainer}>
          {selected && <Icon name='check' size={30} color={constants.green} />}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10
  },
  hashiconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 25,
    marginLeft: 5
  },
  body: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  alias: {
    fontWeight: '700',
    fontSize: 18
  },
  address: {
    fontFamily: 'Courier',
    fontVariant: ['tabular-nums'],
    paddingTop: 4
  },
  selectedContainer: {
    width: 50
  }
})
