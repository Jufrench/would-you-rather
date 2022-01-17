import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionDetails from './QuestionDetails'

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
                <h3>Would You Rather?</h3>
                <div style={{border:'1px solid tomato'}}>
                    <QuestionDetails id={qid} />
                </div>
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