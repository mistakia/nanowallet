import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { IconButton, List } from 'react-native-paper'

export default function ({ handleClose }) {
  return (
    <ScrollView>
      <IconButton style={styles.close} icon='close' size={36} onPress={handleClose} />
      <View style={styles.header}>
      </View>
      <View>
        <List.Item
          title='Accounts'
          description='Item description'
          left={props => <List.Icon {...props} icon='account' />}
          right={props => <List.Icon {...props} icon='chevron-right' />}
        />
        <List.Item
          title='Security'
          description='Item description'
          left={props => <List.Icon {...props} icon='shield-check' />}
          right={props => <List.Icon {...props} icon='chevron-right' />}
        />
        <List.Item
          title='Backup Seed / Secret Phase'
          description='Item description'
          left={props => <List.Icon {...props} icon='backup-restore' />}
          right={props => <List.Icon {...props} icon='chevron-right' />}
        />
        <List.Item
          title='Node Configuration'
          description='Item description'
          left={props => <List.Icon {...props} icon='server-network' />}
          right={props => <List.Icon {...props} icon='chevron-right' />}
        />
        <List.Item
          title='Support'
          description='Item description'
          left={props => <List.Icon {...props} icon='help-circle' />}
          right={props => <List.Icon {...props} icon='chevron-right' />}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  close: {
    position: 'absolute',
    top: 30,
    zIndex: 1
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 90
  }
})
