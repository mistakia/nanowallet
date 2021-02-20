import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { Link } from 'react-router-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function () {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.lead} />
        <View style={styles.actions}>
          <Link
            to='/create'
            component={Button}
            style={styles.action}
            mode='contained'>
            Create
          </Link>
          <Link
            to='/import'
            component={Button}
            style={styles.action}
            mode='text'
            onPress={() => console.log('Pressed')}>
            Import
          </Link>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  lead: {
    flex: 1
  },
  actions: {
    paddingTop: 30,
    paddingBottom: 45,
    paddingLeft: 15,
    paddingRight: 15
  },
  action: {
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15
  }
})
