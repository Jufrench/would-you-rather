import React, { Component } from 'react'
import { connect } from 'react-redux'
import VoteDetails from './VoteDetails'

class QuestionDetails extends Component {
    state = {
        hasVoted: this.props.question.optionOne.votes.length > 0 ||
            this.props.question.optionTwo.votes.length > 0
    }

    render() {
        const { question } = this.props
        console.log('hasVoted:', this.state.hasVoted)

        return (
            <VoteDetails 
                hasVoted={this.state.hasVoted}
                optionOne={question.optionOne}
                optionTwo={question.optionTwo} 
                qid={this.props.id} />
        )
    }
}

function mapStateToProps({ questions }, { id }) {
    return {
        question: questions[id]
    }
}

export default connect(mapStateToProps)(QuestionDetails)