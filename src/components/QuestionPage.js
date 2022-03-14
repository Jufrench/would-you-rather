import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionDetails from './QuestionDetails'
import { Navigate } from 'react-router-dom'

class QuestionPage extends Component {
    render() {
        const { activeQuestion, questions } = this.props
        let qid

        if (Object.keys(activeQuestion).length === 0) {
            return <Navigate to={"/404"} />
        } else {
            qid = questions[activeQuestion].id
        }

        return (
            <div>
                <h3>Would You Rather?</h3>
                <div style={{border:'1px solid tomato', display: 'flex'}}>
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