import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import constants from '@core/constants'

export default function () {
  return (
    <View style={styles.container}>
      <Text>Transactions</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.green,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
