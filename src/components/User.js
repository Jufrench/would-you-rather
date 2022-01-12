import React, { Component } from "react"
import { connect } from "react-redux"

class User extends Component {
    render() {
        console.log('user:', this.props)
        return (
            <li>
                <p>{this.props.userName}</p>
                <p>details</p>
            </li>
        )
    }
}

function mapStateToProps({ users }, { userName }) {
    const user = users[userName]
    console.log('userName:', user)
    return {
        user
    }
}

export default connect(mapStateToProps)(User)