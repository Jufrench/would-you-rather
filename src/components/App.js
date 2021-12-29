import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav';
import Home from './Home';
import Question from './Question';
import handleInitialData from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    )
  }
}

export default connect()(App);
