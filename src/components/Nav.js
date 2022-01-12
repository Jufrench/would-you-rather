import React from "react"

export default function Nav(props) {
    return (
        <header>
            <nav>
                <p>Link to Leaderboard</p>
                Logged in as: {props.authedUser}
            </nav>
        </header>
    )
}