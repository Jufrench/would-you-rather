import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login';
import Nav from './Nav';
import Home from './Home';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage'
import handleInitialData from '../actions/shared'
// temp
import { setAuthedUser } from '../actions/authedUser'
import Leaderboard from './Leaderboard';
//temp


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    //temp
    this.props.dispatch(setAuthedUser('sarahedo'))
    //temp
  }

  render() {
    return (
      <div>
        {/* {this.props.authedUser === null ? */}
        <Login />
        {/* : */}
         {/* <div> */}
          <Nav authedUser={this.props.authedUser} />
          <Home />
          <NewQuestion />
          <hr />
          <QuestionPage match={{params: { id: '8xf0y6ziyjabvozdd253nd' }}} />
          {/* </div> */}
        {/* } */}
        <Leaderboard />
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
