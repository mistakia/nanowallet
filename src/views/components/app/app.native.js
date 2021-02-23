import React from 'react'
import { IconButton } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'
import { push } from 'connected-react-router'

import Routes from '@views/routes'
// eslint-disable-next-line no-unused-vars
import Snackbar from 'react-native-snackbar'
import constants from '@core/constants'

export default class App extends React.Component {
  tabs = [
    {
      key: 'dashboard',
      icon: 'home-variant',
      label: 'Dashboard',
      barColor: 'white',
      text: 'black',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'transaction',
      icon: 'currency-usd',
      label: 'Transaction',
      barColor: constants.green,
      text: 'white',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'activity',
      icon: 'history',
      label: 'Activity',
      barColor: 'white',
      text: 'black',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]

  state = {
    activeTab: 'dashboard'
  }

  onTabPress = (newTab) => {
    const { barColor, text } = newTab
    this.setState({ activeTab: newTab.key, barColor, text })
    this.props.dispatch(push(`/${newTab.key}`))
  }

  renderIcon = (tab) => ({ isActive }) => {
    const color = this.tabs.find((t) => t.key === this.state.activeTab).text
    return <IconButton size={30} color={color} icon={tab.icon} />
  }

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab)}
    />
  )

  componentDidMount() {
    this.props.load()
  }

  render() {
    const walletReady = Boolean(this.props.wallet.confirmed)
    return (
      <>
        {walletReady && (
          <View
            style={{ backgroundColor: this.state.barColor, ...styles.head }}>
            <IconButton
              size={36}
              color={this.state.text}
              icon='account-circle-outline'
            />
          </View>
        )}
        <View style={styles.body}>
          <Routes />
        </View>
        {walletReady && (
          <BottomNavigation
            style={styles.menu}
            activeTab={this.state.activeTab}
            onTabPress={this.onTabPress}
            renderTab={this.renderTab}
            tabs={this.tabs}
          />
        )}
      </>
    )
  }
}

const styles = StyleSheet.create({
  head: {
    paddingTop: 35
  },
  body: {
    flex: 1
  },
  menu: {
    shadowColor: 'transparent'
  }
})
