import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import User from "./User"

 class Leaderboard extends Component {
     render() {
        return (
            <div>
                <h3>Leaderboard</h3>
                <ul>
                    {this.props.userNames.map(user => (
                        <User key={user} userName={user} />
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    let orderedUsers = Object.keys(users).sort((a,b) => {
        return (users[b].questions.length + Object.keys(users[b].answers).length)
            - (users[a].questions.length + Object.keys(users[a].answers).length)
    })

    return {
        userNames: orderedUsers
      }
}

export default connect(mapStateToProps)(Leaderboard)