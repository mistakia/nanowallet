import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, TouchableRipple, IconButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Logo from '@components/logo'
import constants from '@core/constants'

export default function () {
  return (
    <View style={styles.container}>
      <View>
        <IconButton
          size={36}
          color='white'
          icon='crop-free'
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View style={styles.amountContainer}>
        <Logo color='white' size={80} />
        <Text style={styles.amountText}>0</Text>
      </View>
      <View style={styles.keyboardContainer}>
        <View style={styles.keyboardRow}>
          <Button mode='text' onPress={() => console.log('Pressed')}>
            <Text style={styles.keyboardButton}>1</Text>
          </Button>
          <Button mode='text' onPress={() => console.log('Pressed')}>
            <Text style={styles.keyboardButton}>2</Text>
          </Button>
          <Button mode='text' onPress={() => console.log('Pressed')}>
            <Text style={styles.keyboardButton}>3</Text>
          </Button>
        </View>
        <View style={styles.keyboardRow}>
          <Button mode='text' onPress={() => console.log('Pressed')}>
            <Text style={styles.keyboardButton}>4</Text>
          </Button>
          <Button mode='text' onPress={() => console.log('Pressed')}>
            <Text style={styles.keyboardButton}>5</Text>
          </Button>
          <Button mode='text' onPress={() => console.log('Pressed')}>
            <Text style={styles.keyboardButton}>6</Text>
          </Button>
        </View>
        <View style={styles.keyboardRow}>
          <Button mode='text' onPress={() => console.log('Pressed')}>
            <Text style={styles.keyboardButton}>7</Text>
          </Button>
          <Button mode='text' onPress={() => console.log('Pressed')}>
            <Text style={styles.keyboardButton}>8</Text>
          </Button>
          <Button mode='text' onPress={() => console.log('Pressed')}>
            <Text style={styles.keyboardButton}>9</Text>
          </Button>
        </View>
        <View style={styles.keyboardRow}>
          <Button mode='text' onPress={() => console.log('Pressed')}>
            <Text style={styles.keyboardButton}>.</Text>
          </Button>
          <Button mode='text' onPress={() => console.log('Pressed')}>
            <Text style={styles.keyboardButton}>0</Text>
          </Button>
          <Button mode='text' onPress={() => console.log('Pressed')}>
            <Icon name='chevron-left' size={30} color='white' />
          </Button>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableRipple
          onPress={() => console.log('Pressed')}
          rippleColor='rgba(0, 0, 0, .32)'
          style={styles.action}>
          <Text style={styles.actionText}>Receive</Text>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => console.log('Pressed')}
          rippleColor='rgba(0, 0, 0, .32)'
          style={styles.action}>
          <Text style={styles.actionText}>Send</Text>
        </TouchableRipple>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    backgroundColor: constants.green,
    flex: 1,
    flexDirection: 'column'
  },
  amountContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  amountText: {
    color: 'white',
    fontSize: 60,
    paddingRight: 30
  },
  keyboardContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  keyboardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  keyboardButton: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  action: {
    flex: 1,
    margin: 15,
    marginBottom: 30,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 99
  },
  actionText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  }
})
