import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import Modal from 'react-native-modal'

import Import from '@pages/import'
import Create from '@pages/create'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      importVisible: false,
      createVisible: false
    }
  }

  toggleImport = () => {
    this.setState({ importVisible: !this.state.importVisible })
  }

  toggleCreate = () => {
    this.setState({ createVisible: !this.state.createVisible })
  }

  cancelCreate = () => {
    this.props.clear()
    this.setState({ createVisible: false })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.lead} />
        <View style={styles.actions}>
          <Button
            style={styles.action}
            onPress={this.toggleCreate}
            mode='contained'>
            Create
          </Button>
          <Button
            style={styles.action}
            mode='text'
            onPress={this.toggleImport}>
            Import
          </Button>
        </View>

        <Modal
          isVisible={this.state.importVisible}
          backdropColor='white'
          swipeDirection='down'
        >
          <Import />
        </Modal>
        <Modal
          isVisible={this.state.createVisible}
          backdropColor='white'
          swipeDirection={'down'}
          onSwipeComplete={this.cancelCreate}
        >
          <Create handleCancel={this.cancelCreate} />
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  lead: {
    flex: 1
  },
  actions: {
    paddingTop: 30,
    paddingBottom: 45,
    paddingLeft: 15,
    paddingRight: 15
  },
  action: {
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15
  }
})
