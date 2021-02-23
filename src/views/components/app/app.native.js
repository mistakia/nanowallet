import React from 'react'

import Routes from '@views/routes'
// eslint-disable-next-line no-unused-vars
import Snackbar from 'react-native-snackbar'

export default class App extends React.Component {
  componentDidMount() {
    this.props.load()
  }

  render() {
    return (
      <>
        <Routes />
      </>
    )
  }
}
