import React from 'react'
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  View
} from 'react-native'

import Transaction from '@components/transaction'

export default function ({ blocks }) {
  const renderItem = ({ item }) => <Transaction transaction={item} />

  return (
    <>
      <View style={styles.head} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={blocks.sort((a, b) => b.height - a.height).toJS()}
          renderItem={renderItem}
          keyExtractor={(item) => item.hash}
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  head: {
    height: 100
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
})
