import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

class NotFound extends Component {
    state = {
        secondsLeft: 15,
        toHome: false,
        countdownId: null,
        showWaitText: false
    }

    componentDidMount() {
        this.startCountdown()
    }

    startCountdown = () => {
        const countdown = setInterval(() => {
            this.setState(() => ({ 
                secondsLeft: this.state.secondsLeft - 1,
                countdownId: countdown
            }))
            this.checkSecondsLeft()
        }, 1000)
    }

    checkSecondsLeft = () => {
        this.state.secondsLeft === 0 && clearInterval(this.state.countdownId)
        this.state.secondsLeft === 0 && this.setState(() => ({ toHome: true }))
    }

    handleShowWaitText = () => {
        this.setState(() => ({ showWaitText: true }))
    }

    handleGoToLoginNow = () => {
        clearInterval(this.state.countdownId)
        this.setState(() => ({ toHome: true }))
    }

    render() {
        return (
            this.state.toHome ?
                <Navigate to={'/'} /> :
            <div>
                <h3>Would You Rather?</h3>
                <button onClick={this.handleShowWaitText}>
                    Wait to be redirected to the login page after the countdown ends in...
                    <div>{this.state.secondsLeft} seconds</div>
                    {this.state.showWaitText && <div>Ok, then wait...</div>}
                </button>
                <button onClick={this.handleGoToLoginNow}>Go to the login page now</button>
            </div>
        )
    }
}

export default NotFound