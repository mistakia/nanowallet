import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button, Title } from 'react-native-paper'
import Modal from 'react-native-modal'
import Svg, { Path, Circle } from 'react-native-svg'

import constants from '@core/constants'
import Import from '@pages/import'
import Create from '@pages/create'
import { Colors } from 'react-native/Libraries/NewAppScreen'

function LogoCircle(props) {
  return (
    <Svg x={0} y={0} viewBox='0 0 1770.2 780.1' {...props}>
      <Path
        d='M885.1 106.2c-156.7 0-283.8 127.1-283.8 283.8 0 156.7 127.1 283.8 283.8 283.8 156.7 0 283.8-127.1 283.8-283.8 0-156.7-127.1-283.8-283.8-283.8z'
        fill={constants.green}
      />
      <Path
        fill='#FFF'
        d='M907.5 390c0 12.4-10 22.4-22.4 22.4s-22.4-10-22.4-22.4c0-16.8-5.6-22.4-22.4-22.4S818 373.3 818 390c0 12.4-10 22.4-22.4 22.4s-22.4-10-22.4-22.4 10-22.4 22.4-22.4c16.8 0 22.4-5.6 22.4-22.4 0-12.4 10-22.4 22.4-22.4s22.4 10 22.4 22.4c0 16.8 5.6 22.4 22.4 22.4 12.2.1 22.3 10.1 22.3 22.4z'
      />
      <Circle fill='#FFF' cx={750.9} cy={434.8} r={22.4} />
      <Path
        fill='#FFF'
        d='M1041.6 345.3c0 12.4-10 22.4-22.4 22.4-16.8 0-22.4 5.6-22.4 22.4 0 12.4-10 22.4-22.4 22.4-16.8 0-22.4 5.6-22.4 22.4 0 12.4-10 22.4-22.4 22.4s-22.4-10-22.4-22.4 10-22.4 22.4-22.4c16.8 0 22.4-5.6 22.4-22.4 0-12.4 10-22.4 22.4-22.4 16.8 0 22.4-5.6 22.4-22.4 0-12.4 10-22.4 22.4-22.4s22.4 10.1 22.4 22.4z'
      />
    </Svg>
  )
}

function Logo(props) {
  return (
    <Svg
      id='prefix__Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      width='40%'
      height='40%'
      viewBox='0 0 1770.2 780.1'
      xmlSpace='preserve'
      {...props}>
      <Path
        fill={constants.green}
        d='M985.7 390c0 55.6-45.1 100.6-100.6 100.6s-100.7-45-100.7-100.6c0-75.5-25.2-100.6-100.6-100.6S583.2 314.6 583.2 390c0 55.6-45.1 100.6-100.6 100.6s-100.7-45-100.7-100.6c0-55.6 45.1-100.6 100.6-100.6 75.5 0 100.6-25.2 100.6-100.6 0-55.6 45.1-100.6 100.6-100.6s100.6 45.1 100.6 100.6c0 75.5 25.2 100.6 100.6 100.6 55.8 0 100.8 45.1 100.8 100.6z'
      />
      <Circle fill={constants.green} cx={281.2} cy={591.3} r={100.6} />
      <Path
        fill={constants.green}
        d='M1589.6 188.7c0 55.6-45.1 100.6-100.6 100.6-75.5 0-100.6 25.2-100.6 100.6 0 55.6-45.1 100.6-100.6 100.6-75.5 0-100.6 25.2-100.6 100.6 0 55.6-45.1 100.6-100.6 100.6-55.6 0-100.6-45.1-100.6-100.6 0-55.6 45.1-100.6 100.6-100.6 75.5 0 100.6-25.2 100.6-100.6 0-55.6 45.1-100.6 100.6-100.6 75.5 0 100.6-25.2 100.6-100.6 0-55.6 45.1-100.6 100.6-100.6 55.5 0 100.6 45.1 100.6 100.6z'
      />
    </Svg>
  )
}

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
    this.props.clear()
    this.setState({ createVisible: false })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.lead}>
          <Logo />
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
          backdropColor='white'
          swipeDirection='down'>
          <Import />
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
