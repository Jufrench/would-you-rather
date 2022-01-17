import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import VoteInfo from './VoteInfo'
import { Link } from 'react-router-dom'
import { setActiveQuestion } from '../actions/activeQuestion'

class Question extends Component {
    handleClick = () => {
        this.props.dispatch(setActiveQuestion(this.props.question.id))
    }

    render() {
        const { question, questions, id } = this.props

        if (question === null) {
            return <p>Loading...</p>
        }

        const { author, optionOne, optionTwo } = question
        const hasVotes = question.optionOne.votes.length > 0
            || question.optionTwo.votes.length > 0

        // const onQuestionPage = window.location.pathname
        //     .includes('questions')
        // const canVote = !hasVotes && onQuestionPage   

        return (
            <Link to={`/questions/${question.id}`} onClick={this.handleClick}>
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
                {/* {canVote 
                    ? <VoteInfo 
                        canVote={canVote}
                        optionOne={optionOne}
                        optionTwo={optionTwo}
                        qid={question.id} />
                    : <VoteInfo question={question} />} */}
            </Link>
        )
    }
}

function mapStateToProps({ questions }, { id }) {
    const question = questions[id]
    return {
        question: question ? question : null,
    }
}

export default connect(mapStateToProps)(Question)