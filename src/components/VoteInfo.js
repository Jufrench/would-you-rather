import React, { Component } from "react"
import { connect } from "react-redux"
import { handleAnswerQuestion } from "../actions/questions"

class VoteInfo extends Component {
    state = {
        voteOption: null,
    }

    handleVoteOption = e => {
        const text = e.target.value
        this.setState(() => ({ voteOption: text}))
    }

    handleSubmit = e => {
        e.preventDefault()
        const { qid } = this.props
        this.props.dispatch(handleAnswerQuestion(qid, this.state.voteOption))
    }

    render() {
        const { optionOne, optionTwo } = this.props
        
        if (this.props.canVote) {
            return (
                <form 
                    onSubmit={this.handleSubmit}
                    style={{border: '2px solid limegreen'}}>
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
        } else {
            const { question } = this.props
            console.log('question:', question)
            return (
                <h3>VOTE INFO</h3>
            )
        }
        
    }
}

function mapStateToProps({}) {
    return {

    }
}

export default connect(mapStateToProps)(VoteInfo)