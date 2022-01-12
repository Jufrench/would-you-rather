import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import User from "./User"

 class Leaderboard extends Component {
     render() {
        console.log('this.props.userNames', this.props.userNames)
        return (
            <Fragment>
                <div>Leaderboard</div>
                <ul>
                    {this.props.userNames.map(user => (
                        // <p key={user}>{user}</p>
                        <User key={user} userName={user} />
                    ))}
                </ul>
            </Fragment>
        )
    }
}

function mapStateToProps({ users }) {
    console.log('users:', users)
    return {
        userNames: Object.keys(users)
      }
}

export default connect(mapStateToProps)(Leaderboard)