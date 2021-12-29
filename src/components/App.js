import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login';
import Nav from './Nav';
import Home from './Home';
import NewQuestion from './NewQuestion';
import handleInitialData from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <Login />
        <Nav />
        <Home />
        <NewQuestion />
      </div>
    )
  }
}

export default connect()(App);
