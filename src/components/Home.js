import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionLink from './QuestionLink'

class Home extends Component {
    state = {
        unanswered: true
    }

    changeTabView() {
        this.setState(() => ({ unanswered: !this.state.unanswered }))
    }

    render() {
        return (
            <main className='main'>
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
                    {this.state.unanswered ? 
                        <ul>
                            {this.props.unansweredIds.map(id => (
                                <li key={id} className='home-question-item'>
                                    <QuestionLink id={id} />
                                </li>
                            ))}
                        </ul>: 
                        <ul>
                            {this.props.answeredIds.map(id => (
                                <li key={id} className='home-question-item'>
                                    <QuestionLink id={id} />
                                </li>
                            ))}
                        </ul>
                    }
            </main>
        )
    }
}

function mapStateToProps({ questions, users }) {
    const unansweredIds = Object.keys(questions)
        .filter(q => {
            return questions[q].optionOne.votes.length === 0 
                && questions[q].optionTwo.votes.length === 0
        }).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

    const answeredIds = Object.keys(questions)
        .filter(q => {
            return questions[q].optionOne.votes.length > 0 
                || questions[q].optionTwo.votes.length > 0
        }).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    
    return {
        // questionIds: Object.keys(questions)
        //     .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        unansweredIds,
        answeredIds
    }
}

export default connect(mapStateToProps)(Home)