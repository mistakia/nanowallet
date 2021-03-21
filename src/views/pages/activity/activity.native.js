import React from 'react'
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  View
} from 'react-native'
import Modal from 'react-native-modal'

import TransactionDetails from '@pages/transaction-details'
import Block from '@components/block'

export default class ActivityPage extends React.Component {
  state = {
    block: null,
    transactionDetailsVisible: false
  }

  showTransactionDetails = (block) => {
    this.setState({
      block,
      transactionDetailsVisible: true
    })
  }

  hideTransactionDetails = () => {
    this.setState({ transactionDetailsVisible: false })
  }

  render() {
    const { blocks } = this.props
    const renderItem = ({ item }) => (
      <Block
        block={item}
        handlePress={() => this.showTransactionDetails(item)}
      />
    )

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
        <Modal
          isVisible={this.state.transactionDetailsVisible}
          backdropColor='black'
          swipeDirection='down'
          style={{ margin: 0 }}
          onBackdropPress={this.hideTransactionDetails}
          onSwipeComplete={this.hideTransactionDetails}>
          <TransactionDetails
            block={this.state.block}
            handleCancel={this.hideTransactionDetails}
          />
        </Modal>
      </>
    )
  }
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
