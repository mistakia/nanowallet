import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

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
    backgroundColor: Colors.white,
    flexDirection: 'column',
    alignItems: 'stretch'
  }
})
