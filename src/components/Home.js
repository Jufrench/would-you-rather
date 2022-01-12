import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
    state = {
        unanswered: true
    }

    changeTabView() {
        this.setState(() => ({ unanswered: !this.state.unanswered }))
    }

    render() {
        return (
            <main>
                <button 
                    onClick={() => this.changeTabView()}
                    disabled={this.state.unanswered}>
                    Unanswered
                </button>
                <button 
                    onClick={() => this.changeTabView()}
                    disabled={!this.state.unanswered}>
                    Answered
                </button>
                    {this.state.unanswered
                    ? 
                    <ul style={{border: '1px solid dodgerblue'}}>
                        {this.props.unansweredIds.map(id => (
                            <li key={id}>
                                <Question id={id} />
                            </li>
                        ))}
                    </ul>
                    : 
                    <ul style={{border: '1px solid tomato'}}>
                        {this.props.answeredIds.map(id => (
                            <li key={id}>
                                <Question id={id} />
                            </li>
                        ))}
                    </ul>
                    }
            </main>
        )
    }
}

function mapStateToProps({ questions, users }) {
    console.log('%cusers', 'color:goldenrod', users)
    console.log('%cquestions', 'color:violet', questions)
    const unansweredIds = Object.keys(questions)
        .filter(q => {
            // console.log('%cq', 'color:dodgerblue', q)
            return questions[q].optionOne.votes.length === 0 
                && questions[q].optionTwo.votes.length === 0
        })

    const answeredIds = Object.keys(questions)
        .filter(q => {
            return questions[q].optionOne.votes.length > 0 
                || questions[q].optionTwo.votes.length > 0
        })

    return {
      questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        unansweredIds,
        answeredIds
    }
}

export default connect(mapStateToProps)(Home)

// * question ids should be the ids of either the unanswered or answered questions
// * then you'll map over each of those and render the individual questions