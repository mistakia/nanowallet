import React from 'react'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import createStore from '@core/store'
import history from '@core/history'
import App from '@components/app'

const initialState = window.__INITIAL_STATE__
const store = createStore(initialState, history)

const ConnectedApp = withRouter(App)

const theme = {
  ...DefaultTheme,
  roundness: 20,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(0,200,5)',
    accent: '#676686'
  }
}

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PaperProvider theme={theme}>
        <ConnectedApp />
      </PaperProvider>
    </ConnectedRouter>
  </Provider>
)

export default Root
