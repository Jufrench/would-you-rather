import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import VoteInfo from './VoteInfo'

class Question extends Component {
    render() {
        const { question } = this.props

        if (!question) {
            return <p>Loading...</p>
        }

        const { author, optionOne, optionTwo } = question
        const hasVotes = question.optionOne.votes.length > 0
            || question.optionTwo.votes.length > 0

        // todo: replace this w/ react router location
        const onQuestionPage = window.location.pathname
            .includes('questions')
        const canVote = !hasVotes && onQuestionPage       

        return (
            <Fragment>
                <div>{author}</div>
                <div>
                    <span>{optionOne.text}</span>
                    <span> ({optionOne.votes.length} 
                        {optionOne.votes.length === 1 ? ' vote' : ' votes' })</span>
                </div>
                <div>
                    <span>{optionTwo.text}</span>
                    <span> ({optionTwo.votes.length} 
                        {optionTwo.votes.length === 1 ? ' vote' : ' votes' })</span>
                </div>
                {canVote 
                    ? <VoteInfo 
                        canVote={canVote}
                        optionOne={optionOne}
                        optionTwo={optionTwo}
                        qid={question.id} />
                    : <VoteInfo question={question} />}
            </Fragment>
        )
    }
}

function mapStateToProps({ questions }, { id }) {
    const question = questions[id]

    return {
        question,
    }
}

export default connect(mapStateToProps)(Question)