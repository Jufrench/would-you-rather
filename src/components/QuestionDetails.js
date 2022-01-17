import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import VoteDetails from './VoteDetails'
import Profile from './Profile'

class QuestionDetails extends Component {
    state = {
        hasVoted: this.props.question.optionOne.votes.length > 0 ||
            this.props.question.optionTwo.votes.length > 0
    }

    render() {
        const { question, id } = this.props

        return (
            <Fragment>
                <Profile />
                <VoteDetails 
                    hasVoted={this.state.hasVoted}
                    optionOne={question.optionOne}
                    optionTwo={question.optionTwo} 
                    qid={id} />
            </Fragment>
        )
    }
}

function mapStateToProps({ questions }, { id }) {
    return {
        question: questions[id]
    }
}

export default connect(mapStateToProps)(QuestionDetails)