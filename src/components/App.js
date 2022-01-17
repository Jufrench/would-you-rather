import React, { Component } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login';
import Nav from './Nav';
import Home from './Home';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage'
import handleInitialData from '../actions/shared'
// temp
import Leaderboard from './Leaderboard';
//temp


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const loggedIn = this.props.authedUser

    return (
        <div className='container'>
        {this.props.authedUser !== null && <Nav /> }
        <Routes>
          {/* <div>
            {this.props.authedUser === null ?
            <Login />
            : 
              <div> 
              <Nav />
              <Home />
              <Route path='/' exact component={Home} />
              <NewQuestion />
              <hr />
              <QuestionPage match={{params: { id: '8xf0y6ziyjabvozdd253nd' }}} />
              </div> 
            } 
            <Leaderboard />
          </div> */}
          {/* =============================== */}
          <Route path="/" 
            element={ loggedIn !== null ? 
              <Navigate to="/home" /> :
              <Login />
            }
          />
          <Route exact path="/home" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/add" element={<NewQuestion />} />
          <Route path="/questions/:question_id" element={<QuestionPage />} />
        </Routes>
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
