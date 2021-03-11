import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

export default function () {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.text}
          placeholder='Enter your seed'
          multiline
          ref={this.inputRef}
          onChangeText={this.setText}
          theme={{ colors: { accent: 'transparent' } }}
          style={styles.input}
          error={this.state.invalid}
        />
      </View>
      <Button
        style={styles.button}
        onPress={this.props.handleCancel}
        mode='text'>
        Cancel
      </Button>
      <Button
        style={styles.button}
        mode='contained'
        onPress={this.submit}
        disabled={this.state.invalid}>
        Import Seed
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '30%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 16,
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1
  },
  inputContainer: {
    flex: 1
  },
  input: {
    borderRadius: 20,
    padding: 15,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    fontSize: 24
  },
  button: {
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15
  }
})
