import React, { Component } from "react"
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

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
        } else {
            this.props.dispatch(setAuthedUser(authedUserId))
        }
    }

    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Choose a user </label>
                <select 
                    name="users" 
                    id="users" 
                    onChange={this.handleChangeUser}>
                        <option>Select</option>
                    {this.props.userIds.map(id => (
                        <option key={id} value={id}>{id}</option>
                    ))}
                </select>
                <button type="submit">Login</button>
            </form>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login)