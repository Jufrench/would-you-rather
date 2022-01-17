import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {

    hasVotes() {
        const { id } = this.props
        const question = this.props.questions[id]
    }

    render() {
        const { activeQuestion, questions } = this.props
        const qid = questions[activeQuestion].id

        if (!this.props.questions) {
            return
        }

        return (
            <div>
                <h3>Question Page</h3>
                <div style={{border:'1px solid tomato'}}>
                    <Question id={qid} />
                </div>
                {/* {onQuestionPage && this.hasVotes()} */}
            </div>
            
        )
    }
}

function mapStateToProps({ questions, activeQuestion }) {
    return {
        questions,
        activeQuestion,
    }
}

export default connect(mapStateToProps)(QuestionPage)