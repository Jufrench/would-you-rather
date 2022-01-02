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

        // console.log('canVote:', canVote)        

        return (
            <Fragment>
                <div>{author}</div>
                <div>{ optionOne.text }</div>
                <div>{ optionTwo.text }</div>
                {canVote 
                    ? <VoteInfo 
                        canVote={canVote}
                        optionOne={optionOne}
                        optionTwo={optionTwo} />
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