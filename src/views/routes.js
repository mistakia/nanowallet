import React from 'react'
import { Route, Switch } from 'react-router'

import CreatePage from '@pages/create'
import ImportPage from '@pages/import'
import DashboardPage from '@pages/dashboard'
import LandingPage from '@pages/landing'
import ActivityPage from '@pages/activity'
import TransactionPage from '@pages/transaction'

const Routes = () => (
  <Switch>
    <Route path='/create' component={CreatePage} />
    <Route path='/import' component={ImportPage} />
    <Route path='/dashboard' component={DashboardPage} />
    <Route path='/landing' component={LandingPage} />
    <Route path='/activity' component={ActivityPage} />
    <Route path='/transaction' component={TransactionPage} />
  </Switch>
)

export default Routes
