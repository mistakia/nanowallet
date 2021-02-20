import React from 'react'
import Routes from '@views/routes'

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
