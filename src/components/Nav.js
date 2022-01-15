import React, { Component } from "react"
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Routes, Route, NavLink } from 'react-router-dom'
import Leaderboard from "./Leaderboard"

 class Nav extends Component {

    logout = () => {
        this.props.dispatch(setAuthedUser(null))
    }

    render() {
        return (
            <header style={{border: '1px solid limegreen'}}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/home'>
                                Home
                            </NavLink>
                        </li>
                        <li>                            
                            <NavLink to='/leaderboard'>
                                Leaderboard
                            </NavLink>
                        </li>
                        <li>                            
                            <NavLink to='/add'>
                                Add Question
                            </NavLink>
                        </li>
                        <li>
                            <span>Logged in as: {this.props.authedUser}</span>
                            {this.props.authedUser !== null &&
                                <button onClick={this.logout}>Logout</button>}
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Nav)