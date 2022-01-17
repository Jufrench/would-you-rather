import React, { Component } from "react"
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { NavLink } from 'react-router-dom'
import NavItem from "./NavItem"

 class Nav extends Component {

    logout = () => {
        this.props.dispatch(setAuthedUser(null))
    }

    render() {
        const navDestinations = ['Home', 'Leaderboard', 'Add']

        return (
            <header className="header">
                <nav className="nav">
                    <ul className="nav-list">
                        {navDestinations.map(dest => (
                            <NavItem key={dest} destination={dest} />
                        ))}
                    </ul>
                    <div className="nav-user">
                        <h4 className="nav-user-name">{this.props.authedUser}</h4>
                        {this.props.authedUser !== null &&
                            <button onClick={this.logout}>Logout</button>}
                    </div>
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