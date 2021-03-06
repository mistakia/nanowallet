import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button, Title } from 'react-native-paper'
import Modal from 'react-native-modal'

import Logo from '@components/logo'
import constants from '@core/constants'
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

  componentDidUpdate(prevProps) {
    if (this.state.createVisible && this.props.wallet.confirmed) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ createVisible: false })
    }
  }

  toggleImport = () => {
    this.setState({ importVisible: !this.state.importVisible })
  }

  toggleCreate = () => {
    this.setState({ createVisible: !this.state.createVisible })
  }

  cancelCreate = () => {
    this.props.exit()
    this.setState({ createVisible: false })
  }

  cancelImport = () => {
    this.setState({ importVisible: false })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.lead}>
          <Logo color={constants.green} size='40%' />
          <Title style={styles.title}>Welcome to NANO</Title>
          <Text>Money without fees</Text>
        </View>
        <View style={styles.actions}>
          <Button
            style={styles.action}
            onPress={this.toggleCreate}
            mode='contained'>
            Create
          </Button>
          <Button style={styles.action} mode='text' onPress={this.toggleImport}>
            Import
          </Button>
        </View>
        <Modal
          isVisible={this.state.importVisible}
          backdropColor='black'
          style={{ margin: 0 }}
          avoidKeyboard={true}
          onBackdropPress={this.cancelImport}
          onSwipeComplete={this.cancelImport}
          swipeDirection='down'>
          <Import handleCancel={this.cancelImport} />
        </Modal>
        <Modal
          isVisible={this.state.createVisible}
          backdropColor='white'
          swipeDirection='down'
          onSwipeComplete={this.cancelCreate}>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  title: {
    marginBottom: 16,
    fontSize: 24
  }
})
