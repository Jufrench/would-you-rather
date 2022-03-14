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
        const { question, id, user } = this.props

        return (
            <Fragment>
                <Profile user={user} />
                <VoteDetails 
                    hasVoted={this.state.hasVoted}
                    optionOne={question.optionOne}
                    optionTwo={question.optionTwo} 
                    qid={id} />
            </Fragment>
        )
    }
}

function mapStateToProps({ questions, users }, { id }) {
    return {
        question: questions[id],
        user: users[questions[id]['author']]
    }
}

export default connect(mapStateToProps)(QuestionDetails)