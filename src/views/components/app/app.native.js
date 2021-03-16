import React from 'react'
import { IconButton } from 'react-native-paper'
import { View, StyleSheet, Text } from 'react-native'
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'
import { push } from 'connected-react-router'
import Modal from 'react-native-modal'

import Routes from '@views/routes'
// eslint-disable-next-line no-unused-vars
import Snackbar from 'react-native-snackbar'
import constants from '@core/constants'
import Accounts from '@pages/accounts'
import Logo from '@components/logo'
import { formatBalance } from '@core/utils'

export default class App extends React.Component {
  tabs = [
    {
      key: 'dashboard',
      icon: 'home-variant',
      label: 'Dashboard',
      barColor: 'white',
      activeText: constants.green,
      text: 'black',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'transaction',
      icon: 'currency-usd',
      label: 'Transaction',
      barColor: constants.green,
      activeText: 'white',
      text: 'white',
      pressColor: constants.green
    },
    {
      key: 'activity',
      icon: 'history',
      label: 'Activity',
      barColor: 'white',
      activeText: constants.green,
      text: 'black',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'settings',
      icon: 'cog',
      label: 'Settings',
      barColor: 'white',
      activeText: constants.green,
      text: 'black',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]

  state = {
    activeTab: 'dashboard',
    accountsVisible: false,
    text: 'black'
  }

  toggleAccounts = () => {
    this.setState({ accountsVisible: !this.state.accountsVisible })
  }

  closeAccounts = () => {
    this.setState({ accountsVisible: false })
  }

  onTabPress = (newTab) => {
    const { barColor, text } = newTab
    this.setState({ activeTab: newTab.key, barColor, text })
    this.props.dispatch(push(`/${newTab.key}`))
  }

  renderIcon = (tab) => ({ isActive }) => {
    const t = this.tabs.find((t) => t.key === this.state.activeTab)
    const color = isActive ? t.activeText : t.text
    return <IconButton size={30} color={color} icon={tab.icon} />
  }

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      style={{ paddingTop: 0 }}
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
            <View style={styles.balanceContainer}>
              <View style={styles.balanceNano}>
                <Logo size={25} color={this.state.text} />
                <Text
                  style={{ color: this.state.text, ...styles.balanceNanoText }}>
                  {formatBalance(this.props.account.balance)}
                </Text>
              </View>
              <Text style={{ color: this.state.text, ...styles.balanceUsd }}>
                $2,137.10
              </Text>
            </View>
            <IconButton
              size={36}
              color={this.state.text}
              icon='account-circle-outline'
              onPress={this.toggleAccounts}
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
        <Modal
          isVisible={this.state.accountsVisible}
          backdropColor='white'
          style={{ padding: 0, margin: 0 }}
          backdropOpacity={1}
          propagateSwipe>
          <Accounts handleClose={this.closeAccounts} />
        </Modal>
      </>
    )
  }
}

const styles = StyleSheet.create({
  head: {
    position: 'absolute',
    paddingTop: 35,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    right: 0,
    zIndex: 1
  },
  balanceContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  balanceNano: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  balanceNanoText: {
    fontSize: 18,
    fontWeight: '700'
  },
  balanceUsd: {
    fontSize: 13,
    fontWeight: '400'
  },
  body: {
    flex: 1
  },
  menu: {
    shadowColor: 'transparent',
    height: 80
  }
})
