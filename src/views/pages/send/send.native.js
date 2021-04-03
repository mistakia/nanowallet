import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, TextInput, IconButton } from 'react-native-paper'
import Modal from 'react-native-modal'

import CameraPage from '@pages/camera'

export default function () {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            {!this.state.text.length && (
              <IconButton
                size={30}
                icon='crop-free'
                onPress={this.showCamera}
              />
            )}
            {Boolean(this.state.text.length) && (
              <IconButton
                size={30}
                onPress={this.clear}
                icon='backspace-outline'
              />
            )}
          </View>
          <TextInput
            value={this.state.text}
            placeholder='nano_'
            multiline
            ref={this.handleRef}
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
          Send
        </Button>
      </View>
      <Modal
        isVisible={this.state.cameraVisible}
        backdropColor='black'
        swipeDirection='down'
        style={{ margin: 0 }}
        onBackdropPress={this.cancelCamera}
        onSwipeComplete={this.cancelCamera}>
        <CameraPage handleCancel={this.cancelCamera} />
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 16,
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1
  },
  inputContainer: {
    flex: 1,
    position: 'relative'
  },
  iconContainer: {
    position: 'absolute',
    top: 30,
    right: 0,
    zIndex: 10,
    flexDirection: 'row'
  },
  input: {
    borderRadius: 20,
    padding: 15,
    paddingRight: 75,
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
