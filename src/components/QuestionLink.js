import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setActiveQuestion } from '../actions/activeQuestion'

class QuestionLink extends Component {
    handleClick = () => {
        this.props.dispatch(setActiveQuestion(this.props.question.id))
    }

    render() {
        const { question, questions, id } = this.props

        if (question === null) {
            return <p>Loading...</p>
        }

        const { author, optionOne, optionTwo } = question

        return (
            <Link to={`/questions/${question.id}`} 
                onClick={this.handleClick} 
                className='home-question-link'>

                <div className='home-question-text'>
                    <div>{optionOne.text}</div>
                    <div>{optionTwo.text}</div>
                </div>

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

export default connect(mapStateToProps)(QuestionLink)