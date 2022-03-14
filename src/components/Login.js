import React, { Component } from "react"
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Navigate } from 'react-router-dom'

class Login extends Component {
    state = {
        authedUserId: null
    }

    handleChangeUser = e => {
        const userId = e.target.value
        this.setState(() => ({ authedUserId: userId }))
    }

    handleSubmit = e => {
        e.preventDefault()
        const { authedUserId } = this.state
        
        if (authedUserId === null) {
            alert('Please select user')
        }

        if (this.props.authedUser === null) {
            this.props.dispatch(setAuthedUser(authedUserId))
        }

    }

    render() {

        if (this.props.authedUser === null) {
            return (
                <div className="login-modal">
                    <div className="login-modal-inner">
                        <h2 className="login-modal-title">Would You Rather?</h2>
                        <form onSubmit={this.handleSubmit} className="login-modal-form">
                            <label>Choose a user </label>
                            <select 
                                className="login-modal-form-select"
                                name="users" 
                                id="users" 
                                onChange={this.handleChangeUser}>
                                    <option>Select</option>
                                    {this.props.userIds.map(id => (
                                        <option key={id} value={id}>{id}</option>
                                    ))}
                            </select>
                            <button type="submit" className="login-modal-submit">Login</button>
                        </form>
                    </div>
                </div>
            )
        } else {
            const storage = window.localStorage

            if (storage.preAuthedDest.length < 1 || storage.preAuthedDest === undefined) {
                return <Navigate to="/home" />
            } else {
                return <Navigate to={`/${storage.preAuthedDest}`} />
            }
        }
    }
}

function mapStateToProps({ users, authedUser, preAuthedDest }) {
    return {
        userIds: Object.keys(users),
        authedUser,
        preAuthedDest
    }
}

export default connect(mapStateToProps)(Login)