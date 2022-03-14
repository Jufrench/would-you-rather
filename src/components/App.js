import React, { Component } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import Nav from './Nav'
import Home from './Home'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import handleInitialData from '../actions/shared'
import Leaderboard from './Leaderboard'
import RequireAuth from './RequireAuth'
import NotFound from './NotFound'
import { getPreAuthedDest } from '../actions/preAuthedDest'


class App extends Component {
  state = {
    showPleaseLogin: false
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  toggleShowPleaseLogin() {
    this.setState(() => ({ showPleaseLogin: !this.state.showPleaseLogin }))
  }

  render() {
    const loggedIn = this.props.authedUser
    const pathName = window.location.pathname
          
    let preAuthedDest

    const localStorage = window.localStorage

    if (loggedIn === null) {

      if (preAuthedDest === undefined) {
        localStorage.setItem('preAuthedDest', pathName.substring(1))

        setTimeout(() => {
          if (localStorage.preAuthedDest !== '' && localStorage.preAuthedDest !== 'home') {
            alert('Please log in')
          }
        }, 300)
      }
    } else {
      localStorage.setItem('loggedOut', false)
    }

    return (
        <div className='container'>
          <h2 className={`please-login ${this.state.showPleaseLogin ? '' : 'hide'}`}>
            Please log in
          </h2>
        {this.props.authedUser !== null && <Nav /> }
        <main 
          className={`main ${this.props.authedUser ? 'main-ready' : ''}`}>
        <Routes>
          <Route path="/" 
            element={<Login />}
          />
          <Route path="/home" 
            element={
              <RequireAuth>
                <Home loggedIn={loggedIn} />
              </RequireAuth>
            } />
          <Route path="/leaderboard" 
            element={
              <RequireAuth>
                <Leaderboard loggedIn={loggedIn} />
              </RequireAuth>
            } />
          <Route path="/add" 
            element={
              <RequireAuth>
                <NewQuestion loggedIn={loggedIn} />
              </RequireAuth>
            } />
          <Route path="/questions/:question_id" 
            element={
              <RequireAuth>
                <QuestionPage loggedIn={loggedIn} />
              </RequireAuth>
            } />
          <Route path="/404" element={<NotFound />} />
        </Routes>
        </main>
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
