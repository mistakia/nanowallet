import React from 'react'
import { Route, Switch } from 'react-router'

import CreatePage from '@pages/create'
import ImportPage from '@pages/import'
import DashboardPage from '@pages/dashboard'
import LandingPage from '@pages/landing'

const Routes = () => (
  <Switch>
    <Route path='/create' component={CreatePage} />
    <Route path='/import' component={ImportPage} />
    <Route path='/dashboard' component={DashboardPage} />
    <Route path='/landing' component={LandingPage} />
  </Switch>
)

export default Routes
