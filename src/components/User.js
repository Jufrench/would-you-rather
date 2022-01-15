import React, { Component } from "react"
import { connect } from "react-redux"

class User extends Component {
    render() {
        const { user } = this.props
        
        return (
            <li>
                <div>{this.props.userName}</div>
                <div>user image</div>
                <div>{Object.keys(user.answers).length} questions answered</div>
                <div>{user.questions.length} questions asked</div>
            </li>
        )
    }
}

function mapStateToProps({ users }, { userName }) {
    const user = users[userName]

    return {
        user
    }
}

export default connect(mapStateToProps)(User)