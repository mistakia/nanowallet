import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { List, Button } from 'react-native-paper'

export default function () {
  return (
    <>
      <View style={styles.head} />
      <ScrollView>
        <View style={styles.header} />
        <View>
          <List.Item
            style={styles.row}
            title='Security'
            description='Biometrics, Auto-Lock, Wallet Password'
            right={(props) => <List.Icon {...props} icon='chevron-right' />}
          />
          <List.Item
            style={styles.row}
            title='Privacy'
            description='Cold Storage, Hot Wallet'
            right={(props) => <List.Icon {...props} icon='chevron-right' />}
          />
          <List.Item
            style={styles.row}
            title='Backup Wallet'
            description='Copy Seed, Secret Phrase'
            right={(props) => <List.Icon {...props} icon='chevron-right' />}
          />
          <List.Item
            style={styles.row}
            title='Node Configuration'
            description='API Endpoints, PoW Source'
            right={(props) => <List.Icon {...props} icon='chevron-right' />}
          />
          <List.Item
            style={styles.row}
            title='Support'
            description='Help, FAQs, Forum'
            right={(props) => <List.Icon {...props} icon='chevron-right' />}
          />
          <View style={styles.exitContainer}>
            <Button mode='text' icon='alert'>
              Exit Wallet
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  head: {
    height: 100
  },
  close: {
    position: 'absolute',
    top: 30,
    zIndex: 1
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 90
  },
  exitContainer: {
    marginTop: 60,
    padding: 8
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 0,
    paddingRight: 0
  }
})
