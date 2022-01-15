import React, { Component } from "react"
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

 class Nav extends Component {

    logout = () => {
        this.props.dispatch(setAuthedUser(null))
    }

    render() {
        return (
            <header>
                <nav>
                    <p>Link to Leaderboard</p>
                    <div>
                        <span>Logged in as: {this.props.authedUser}</span>
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