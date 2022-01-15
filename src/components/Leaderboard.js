import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import User from "./User"

 class Leaderboard extends Component {
     render() {
        return (
            <div style={{border: '2px dashed tomato'}}>
                <div>Leaderboard</div>
                <ul>
                    {this.props.userNames.map(user => (
                        // <p key={user}>{user}</p>
                        <User key={user} userName={user} />
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        userNames: Object.keys(users)
      }
}

export default connect(mapStateToProps)(Leaderboard)