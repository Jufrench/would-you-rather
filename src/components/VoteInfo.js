import React, { Component } from "react"
import { connect } from "react-redux"
import { handleAnswerQuestion } from "../actions/questions"

class VoteInfo extends Component {
    state = {
        voteOption: null,
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('submitted!')
        this.props.dispatch(handleAnswerQuestion)
    }

    render() {
        // const { question } = this.props
        // const hasVotes = question.optionOne.votes.length > 0
        //     || question.optionTwo.votes.length > 0
            
        // console.log('hasVotes:', hasVotes)
        if (this.props.canVote) {
            return (
                <form 
                    onSubmit={this.handleSubmit}
                    style={{border: '2px solid limegreen'}}>
                    <label>
                        {this.props.optionOne.text}
                        <input type="radio" name="voteOption" />
                    </label>
                    <label>
                        {this.props.optionTwo.text}
                        <input type="radio" name="voteOption" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )
        } else {
            return (
                <h3>VOTE INFO</h3>
            )
        }
        
    }
}

export default connect()(VoteInfo)