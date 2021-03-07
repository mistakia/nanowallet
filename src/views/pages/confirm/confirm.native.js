import React from 'react'
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Platform
} from 'react-native'
import { IconButton, TextInput } from 'react-native-paper'

import constants from '@core/constants'

export default function () {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon='arrow-left'
          size={36}
          onPress={this.props.handleCancel}
        />
      </View>
      <View style={styles.body}>
        <TextInput
          value={this.state.text}
          placeholder='Enter your seed to confirm'
          multiline
          ref={this.inputRef}
          onChangeText={this.setText}
          theme={{ colors: { accent: 'transparent' } }}
          style={styles.input}
        />
      </View>
      <View style={styles.footer}>
        {this.state.invalid && (
          <Text style={styles.warning}>Invalid seed. Check again</Text>
        )}
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    paddingTop: 16
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 35,
    height: 80
  },
  warning: {
    color: constants.red
  },
  input: {
    backgroundColor: '#FFFFFF'
  }
})
