import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-paper'

export default class ConfirmSendPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.text}>Amount</Text>
            <Text style={styles.text}>{this.props.amount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>To</Text>
            <Text style={styles.text}>{this.props.address}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>From</Text>
            <Text style={styles.text} />
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Block Height</Text>
            <Text style={styles.text} />
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Fees</Text>
            <Text style={styles.text} />
          </View>
        </View>
        <Button
          style={styles.button}
          mode='text'
          onPress={this.props.handleCancel}>
          Cancel
        </Button>
        <Button
          style={styles.button}
          mode='contained'
          onPress={() => console.log('here')}>
          Confirm
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
    flexDirection: 'column'
  },
  table: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1
  },
  text: {
    color: 'rgba(0,0,0,0.7)'
  },
  button: {
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15
  }
})
