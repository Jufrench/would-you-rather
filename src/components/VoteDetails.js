import React, { Component } from "react"
import { connect } from "react-redux"
import { handleAnswerQuestion } from "../actions/questions"
import { Navigate } from 'react-router-dom'

class VoteDetails extends Component {
    state = {
        voteOption: null,
        toHome: false,
    }

    handleVoteOption = e => {
        const text = e.target.value
        this.setState(() => ({ voteOption: text}))
    }

    handleSubmit = e => {
        e.preventDefault()
        const { qid } = this.props
        this.props.dispatch(handleAnswerQuestion(qid, this.state.voteOption))

        this.setState(() => ({ toHome: true }))
    }

    render() {
        if (this.state.toHome) {
            return <Navigate to="/home" />
        }
        
        const { optionOne, optionTwo } = this.props
        
        if (this.props.hasVoted) {
            return (
                <div>
                    VOTE DETAILS
                </div>
            )
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                    {optionOne.text}    
                        <input 
                            value="optionOne"
                            type="radio" 
                            name="voteOption"
                            onChange={this.handleVoteOption} />
                    </label>
                    <label>
                        {optionTwo.text}
                        <input 
                            value="optionTwo"
                            type="radio" 
                            name="voteOption"
                            onChange={this.handleVoteOption} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )
        }
    }
}

export default connect()(VoteDetails)