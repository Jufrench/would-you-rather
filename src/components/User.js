import React, { Component } from "react"
import { connect } from "react-redux"

class User extends Component {
    render() {
        const { user } = this.props
        
        return (
            <li className="leaderboard-item">
                <div>
                    <article>{this.props.userName}</article>
                    <div className='user-avatar' style={{backgroundImage: `url(${user.avatarURL})`}}></div>
                </div>
                <div className="leaderboard-questions-info">
                    <div>{Object.keys(user.answers).length} questions answered</div>
                    <div>{user.questions.length} questions asked</div>
                </div>
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