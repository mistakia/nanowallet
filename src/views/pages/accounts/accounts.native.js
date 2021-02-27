import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { IconButton, Button } from 'react-native-paper'

import AccountItem from '@components/account-item'

export default class AccountsPage extends React.Component {
  render() {
    const { handleClose, wallet, addAccount } = this.props
    return (
      <>
        <View style={styles.header}>
          <IconButton icon='close' size={36} onPress={handleClose} />
        </View>
        <ScrollView style={styles.body}>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceHeader}>Total Balance</Text>
            <Text style={styles.balance}>420.69 N</Text>
          </View>
          <View>
            {wallet.accounts.map((a, i) => (
              <AccountItem
                account={a}
                key={i}
                selected={a.address === wallet.selected}
              />
            ))}
          </View>
        </ScrollView>
        <View style={styles.actionContainer}>
          <Button mode='contained' onPress={addAccount}>
            Add Account
          </Button>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  settings: {
    position: 'absolute',
    left: 0,
    top: 30,
    zIndex: 1
  },
  close: {
    position: 'absolute',
    right: 0,
    top: 30,
    zIndex: 1
  },
  header: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  balanceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 90,
    marginBottom: 30
  },
  balance: {
    fontWeight: '800',
    fontSize: 30
  },
  balanceHeader: {
    fontSize: 12
  },
  body: {
    flex: 1
  },
  actionContainer: {
    padding: 30
  }
})
