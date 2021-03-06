import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { statActions, getStats } from '@core/stats'

import render from './dashboard'

class DashboardPage extends React.Component {
  componentDidMount() {
    this.props.loadMarkets()
    this.props.loadRepresentative()
    this.props.loadNetwork()
  }

  render() {
    return render.call(this)
  }
}

const mapStateToProps = createSelector(getStats, (stats) => ({ stats }))

const mapDispatchToProps = {
  loadMarkets: statActions.loadMarkets,
  loadRepresentative: statActions.loadRepresentative,
  loadNetwork: statActions.loadNetwork
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
