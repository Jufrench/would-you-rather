import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {

    hasVotes() {
        const { id } = this.props
        const question = this.props.questions[id]

        if (!question) {
            return '...'
        } else {
            return 'has votes'
        }
    }

    render() {
        const { id } = this.props

        if (!this.props.questions) {
            return
        }

        return (
            <div>
                <h3>Question Page</h3>
                <Question id={id} />
                {/* {onQuestionPage && this.hasVotes()} */}
            </div>
            
        )
    }
}

function mapStateToProps({ authedUser, questions }, props) {
    const { id } = props.match.params

    return {
        id,
        questions
    }
}

export default connect(mapStateToProps)(QuestionPage)