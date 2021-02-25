import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function () {
  return (
    <View style={styles.container}>
      <Text>Import</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'stretch'
  }
})
